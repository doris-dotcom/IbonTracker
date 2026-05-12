"""
IbonTracker - ibon 影片平台監測與網頁控制台伺服器
"""

import os
import sys
import json
import logging
import time
import threading
import subprocess
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from dotenv import load_dotenv
from datetime import datetime

# --- 定位專案根目錄，確保路徑一致 ---
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
os.chdir(PROJECT_ROOT)

load_dotenv()

# 載入設定
CONFIG_PATH = "config/settings.json"
with open(CONFIG_PATH, "r", encoding="utf-8") as f:
    config = json.load(f)

# 設定 logging
log_level = getattr(logging, config["logging"]["level"], logging.INFO)
log_handlers = [logging.StreamHandler()]
if config["logging"]["log_to_file"]:
    os.makedirs("logs", exist_ok=True)
    log_handlers.append(logging.FileHandler(config["logging"]["log_path"], encoding="utf-8"))

logging.basicConfig(
    level=log_level,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=log_handlers,
)
logger = logging.getLogger(__name__)


# --- 1. 定時自動監測執行緒 (Scheduler) ---
def is_slot_executed_today(slot):
    """檢查某個排程時段在今天是否已經執行過"""
    state_path = "config/scheduler_state.json"
    today = datetime.now().strftime("%Y-%m-%d")
    if os.path.exists(state_path):
        try:
            with open(state_path, "r", encoding="utf-8") as f:
                saved_state = json.load(f)
                if saved_state.get("date") == today:
                    return slot in saved_state.get("executed_slots", [])
        except Exception as e:
            logger.warning(f"⚠️ [Scheduler] 讀取排程狀態失敗: {e}")
    return False

def record_slots_executed(slots):
    """將一或多個排程時段標記為今天已執行，並持久化寫入 config/scheduler_state.json"""
    state_path = "config/scheduler_state.json"
    today = datetime.now().strftime("%Y-%m-%d")
    
    state = {"date": today, "executed_slots": []}
    if os.path.exists(state_path):
        try:
            with open(state_path, "r", encoding="utf-8") as f:
                saved_state = json.load(f)
                if saved_state.get("date") == today:
                    state = saved_state
        except Exception as e:
            logger.warning(f"⚠️ [Scheduler] 讀取排程狀態失敗，將重新初始化: {e}")
            
    for slot in slots:
        if slot not in state["executed_slots"]:
            state["executed_slots"].append(slot)
            
    try:
        os.makedirs(os.path.dirname(state_path), exist_ok=True)
        with open(state_path, "w", encoding="utf-8") as f:
            json.dump(state, f, ensure_ascii=False, indent=2)
        logger.info(f"💾 [Scheduler] 已更新排程執行狀態: {state}")
    except Exception as e:
        logger.error(f"❌ [Scheduler] 寫入排程狀態失敗: {e}")

def run_e2e_scan():
    logger.info("🕒 [Scheduler] 開始執行例行自動化 E2E 監測...")
    try:
        # 使用本機 python 執行 e2e_tracker.py 加上 --headless 參數，在背景無感運行
        result = subprocess.run([sys.executable, "src/e2e_tracker.py", "--headless"], capture_output=True, text=True)
        logger.info("✅ [Scheduler] 定時 E2E 監測完成！已自動儲存最新數據與截圖。")
        # 如果失敗了，印出 stderr
        if result.returncode != 0:
            logger.warning(f"⚠️ [Scheduler] 監測腳本回傳非 0 狀態碼: {result.returncode}")
    except Exception as e:
        logger.error(f"❌ [Scheduler] 例行 E2E 監測出錯: {e}")

def send_email_report():
    logger.info("📧 [Scheduler] 正在產生 Dashboard 截圖並寄送 Email 報告...")
    try:
        subprocess.run([sys.executable, "src/email_reporter.py"], capture_output=True, text=True)
        logger.info("✅ [Scheduler] Email 報告寄送完成！")
    except Exception as e:
        logger.error(f"❌ [Scheduler] 寄送報告失敗: {e}")

def execute_and_record_schedule(slots_to_mark):
    """執行 E2E 檢測與寄件，並標記這些時段已完成"""
    run_e2e_scan()
    send_email_report()
    record_slots_executed(slots_to_mark)

def check_startup_missed_schedules(target_times, silent=False):
    """[開機與喚醒偵測] 檢查今日在開機/喚醒前是否已經錯過任何排程。若是，則立即補跑一次測試。"""
    state_path = "config/scheduler_state.json"
    today = datetime.now().strftime("%Y-%m-%d")
    now_time = datetime.now().strftime("%H:%M")
    
    # 找出今天到目前為止所有「已經過去」的排程時間點
    passed_slots = [t for t in target_times if t <= now_time]
    
    if not passed_slots:
        if not silent:
            logger.info("🕒 [開機偵測] 目前尚未到達今日任何排程時段，無需補跑測試。")
        return
        
    executed_slots = []
    if os.path.exists(state_path):
        try:
            with open(state_path, "r", encoding="utf-8") as f:
                saved_state = json.load(f)
                if saved_state.get("date") == today:
                    executed_slots = saved_state.get("executed_slots", [])
        except Exception as e:
            logger.warning(f"⚠️ [開機偵測] 讀取排程狀態失敗，將預設為未跑過: {e}")
            
    # 篩選出「已過期但今日尚未執行」的排程
    missed_slots = [s for s in passed_slots if s not in executed_slots]
    
    if missed_slots:
        logger.info(f"⏰ [開機/喚醒偵測] 偵測到今日已過期但【尚未執行】的排程時段: {missed_slots}")
        logger.info("⚡ [開機/喚醒偵測] 正在立即補跑測試並送出報告...")
        execute_and_record_schedule(missed_slots)
    else:
        if not silent:
            logger.info("✅ [開機偵測] 今日所有已過期的排程皆已執行完畢，無需補跑。")

def schedule_worker():
    # 支援每日固定時間檢測模式
    target_times = ["09:00", "12:00", "17:00"]
    logger.info(f"🕒 定時監測排程已升級為【每日固定時段檢測模式】！")
    logger.info(f"🎯 預定觸發時間: {', '.join(target_times)}")
    
    # 啟動時偵測是否有因未開機而錯過的排程
    check_startup_missed_schedules(target_times)
    
    last_missed_check = time.time()
    
    # 進入每日時間輪詢
    while True:
        now_ts = time.time()
        # 每 5 分鐘 (300 秒) 自動執行一次「漏跑/喚醒偵測」，處理電腦從睡眠模式喚醒時錯過排程的情境
        if now_ts - last_missed_check >= 300:
            check_startup_missed_schedules(target_times, silent=True)
            last_missed_check = now_ts
            
        now_str = datetime.now().strftime("%H:%M")
        if now_str in target_times:
            # 安全防呆：檢查該時段今天是否已經執行過（可能開機偵測剛補跑過）
            if not is_slot_executed_today(now_str):
                logger.info(f"⏰ 到達指定排程時間 {now_str}！開始執行自動化檢測...")
                execute_and_record_schedule([now_str])
            else:
                logger.info(f"ℹ️ 排程時間 {now_str} 已在今日執行過，跳過本次重複觸發。")
            # 休息 60 秒，避免在同一分鐘內重複觸發
            time.sleep(60)
        else:
            # 每 10 秒檢查一次時間
            time.sleep(10)


# --- 2. 網頁控制台 API 伺服器 (Server) ---
class MonitorServer(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        # 覆蓋預設的 HTTP 存取日誌，避免終端機被 "GET / HTTP/1.1" 洗版
        # 讓終端機只專注顯示 E2E 自動化測試的詳細輸出
        pass

    def do_POST(self):
        # 攔截「即時檢測」API 請求
        if self.path == '/api/scan':
            logger.info("🚀 [API Server] 收到網頁即時檢測請求！啟動 Playwright E2E 測試...")
            try:
                # 執行 E2E 監測，使用 --headless 避免彈出視窗干擾使用者工作
                result = subprocess.run(
                    [sys.executable, "src/e2e_tracker.py", "--headless"], 
                    capture_output=True, 
                    text=True
                )
                
                # 紀錄執行日誌到後台終端機
                logger.info("--- E2E 執行輸出 ---")
                logger.info(result.stdout)
                if result.stderr:
                    logger.warning(result.stderr)
                logger.info("--------------------")
                
                # 回傳 JSON 成功訊息
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(b'{"status": "success", "message": "E2E scan completed successfully"}')
                
            except Exception as e:
                logger.error(f"❌ [API Server] 即時檢測失敗: {e}")
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response_err = f'{{"status": "error", "message": "{str(e)}"}}'
                self.wfile.write(response_err.encode('utf-8'))
        else:
            self.send_error(404, "API Not Found")

    def do_OPTIONS(self):
        # 處理 CORS 預檢
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()


# --- 3. 啟動主程式 ---
def run_server():
    PORT = 8000
    # 允許地址重用，避免重啟伺服器時 Address already in use
    TCPServer.allow_reuse_address = True
    
    # 建立 HTTP 伺服器，負責服務 static 網頁 (index.html, config/data.js) 與 API Endpoint
    handler = MonitorServer
    
    with TCPServer(("", PORT), handler) as httpd:
        logger.info("====================================================")
        logger.info(f"🖥️  ibon 影片監測控制台伺服器已啟動！")
        logger.info(f"👉 請在瀏覽器中開啟: http://localhost:{PORT}")
        logger.info("====================================================")
        httpd.serve_forever()

if __name__ == "__main__":
    # 1. 建立背景執行緒執行「定時排程監測」
    scheduler_thread = threading.Thread(target=schedule_worker, daemon=True)
    scheduler_thread.start()
    
    # 2. 主執行緒啟動 HTTP Server 提供控制台網頁
    try:
        run_server()
    except KeyboardInterrupt:
        logger.info("👋 正在關閉監測伺服器...")
        sys.exit(0)
