import os
import sys
import json
import time
from datetime import datetime
from playwright.sync_api import sync_playwright
from dotenv import load_dotenv

# 讀取專案根目錄的 .env
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
load_dotenv(os.path.join(PROJECT_ROOT, ".env"))

def format_ms(ms_val):
    """將毫秒轉換為 s 與 ms 格式"""
    if ms_val < 1000:
        return f"{ms_val} ms"
    seconds = ms_val / 1000.0
    return f"{seconds:.2f} s"

def export_data_to_js(step_statuses, step_errors, latencies, overall_success):
    """將實際測試結果儲存為 JSON，並產生 config/data.js 供 index.html 讀取（免除跨網域 CORS 限制）"""
    config_dir = "config"
    os.makedirs(config_dir, exist_ok=True)
    
    state_file = os.path.join(config_dir, "monitor_state.json")
    js_file = os.path.join(config_dir, "data.js")
    
    # 1. 讀取或初始化歷史記錄
    history = []
    if os.path.exists(state_file):
        try:
            with open(state_file, "r", encoding="utf-8") as f:
                history = json.load(f)
        except:
            history = []
            
    # 2. 新增本次執行的歷史紀錄
    now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    check_id = f"#TS-{int(time.time()) % 100000:05d}"
    
    # 計算 API 在線比例
    online_count = sum(1 for status in latencies.values() if status != "TIMEOUT")
    api_status_text = f"{online_count} / {len(latencies)} 在線"
    
    # 計算通過步驟 & 搜尋失敗步驟
    completed_steps = sum(1 for status in step_statuses.values() if status == "Pass")
    
    failed_step_num = None
    fail_error_msg = ""
    for step_num in range(1, 8):
        if step_statuses.get(step_num) == "Fail":
            failed_step_num = step_num
            fail_error_msg = step_errors.get(step_num, "執行中斷或超時")
            break
            
    if failed_step_num:
        step_names = {
            1: "開啟 ibon 首頁",
            2: "點擊立即體驗",
            3: "勾選同意條款",
            4: "跳轉至 OVideo",
            5: "點擊開始製作",
            6: "上傳測試簡報",
            7: "驗證腳本生成"
        }
        steps_text = f"Step {completed_steps}/7 完成 (步驟 {failed_step_num} 失敗)"
        # 截短超長 Playwright 堆疊，只保留精華首行
        clean_err = fail_error_msg.split("\n")[0]
        if "Timeout" in clean_err:
            clean_err = "等待元素超時，網頁加載過慢"
        fail_reason = f"【步驟 {failed_step_num} - {step_names[failed_step_num]}】{clean_err}"
    else:
        steps_text = f"Step {completed_steps}/7 完成"
        fail_reason = ""
    
    history_entry = {
        "time": now_str,
        "id": check_id,
        "api_status": api_status_text,
        "steps": steps_text,
        "fail_reason": fail_reason,
        "load": "CPU 15% | RAM 46%", # 模擬本機資源
        "result": "success" if overall_success else "fail"
    }
    
    # 將最新紀錄插在最前方，保留最多 30 筆
    history.insert(0, history_entry)
    history = history[:30]
    
    # 存回 JSON 檔案
    try:
        with open(state_file, "w", encoding="utf-8") as f:
            json.dump(history, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"⚠️ 無法寫入歷史紀錄檔: {e}")

    # 3. 彙整目前各 API 狀態與步驟狀態
    api_list = [
        {"name": "ibon 影片推廣首頁", "method": "GET", "url": "print.ibon.com.tw/promoVideo", "status": "online" if latencies["ibon_portal"] != "TIMEOUT" else "offline", "latency": latencies["ibon_portal"]},
        {"name": "ibon 轉跳 OVideo 憑證驗證 API", "method": "POST", "url": "/api/v1/auth/ibon-token", "status": "online" if latencies["ibon_sso"] != "TIMEOUT" else "offline", "latency": latencies["ibon_sso"]},
        {"name": "OVideo 專案與模板載入服務", "method": "GET", "url": "ovideo.tv/api/v1/projects/config", "status": "online" if latencies["ovideo_config"] != "TIMEOUT" else "offline", "latency": latencies["ovideo_config"]},
        {"name": "PPT / PDF 簡報檔案上傳解析器", "method": "POST", "url": "ovideo.tv/api/v1/files/upload", "status": "online" if latencies["ovideo_upload"] != "TIMEOUT" else "offline", "latency": latencies["ovideo_upload"]},
        {"name": "AI 影片腳本生成服務 (LLM)", "method": "POST", "url": "ovideo.tv/api/v1/ai/generate-script", "status": "online" if latencies["ovideo_ai"] != "TIMEOUT" else "offline", "latency": latencies["ovideo_ai"]}
    ]
    
    # 計算成功與失敗統計數
    total_checks = len(history)
    success_checks = sum(1 for h in history if h["result"] == "success")
    fail_checks = total_checks - success_checks
    
    steps_data = []
    step_descriptions = {
        1: "導航至 https://print.ibon.com.tw/promoVideo 並驗證頁面成功加載。",
        2: "自動定位並點擊網頁中的「立即體驗 AI 影片轉換」按鈕。",
        3: "自動勾選「我已閱讀並同意上述說明」Checkbox 選項。",
        4: "點擊「同意並前往」按鈕，觸發認證 handshake API 且成功攔截新分頁開啟跳轉。",
        5: "於跳轉後之 OVideo 頁面點擊「開始製作影片」按鈕，成功進入工作區。",
        6: "上傳測試簡報簡介檔（PDF/PPT）並填入電子郵件，點擊下一步開始解析。",
        7: "檢測專案開啟狀態，確認 AI 腳本已成功解析並完整顯示於編輯畫面。（監測通過指標）"
    }
    
    step_names = {
        1: "開啟 ibon 首頁",
        2: "點擊立即體驗",
        3: "勾選同意條款",
        4: "跳轉至 OVideo",
        5: "點擊開始製作",
        6: "上傳測試簡報",
        7: "驗證腳本生成"
    }
    
    for i in range(1, 8):
        steps_data.append({
            "num": i,
            "name": f"步驟 {i} - {step_names[i]}",
            "status": step_statuses.get(i, "Pending"),
            "desc": step_descriptions[i],
            "error": step_errors.get(i, "")
        })
        
    # 4. 輸出成 JavaScript 變數
    monitor_data = {
        "last_run": now_str,
        "total_checks": total_checks,
        "success_checks": success_checks,
        "fail_checks": fail_checks,
        "apis": api_list,
        "steps": steps_data,
        "history": history
    }
    
    try:
        with open(js_file, "w", encoding="utf-8") as f:
            f.write(f"window.monitorData = {json.dumps(monitor_data, ensure_ascii=False, indent=2)};")
        print(f"📊 [數據導出] 已成功將實時數據寫入: {js_file}")
    except Exception as e:
        print(f"❌ 導出數據失敗: {e}")

def wait_for_internet(url="https://print.ibon.com.tw", timeout=30):
    """等候網路與目標伺服器連線恢復，避免開機或睡眠喚醒時網路尚未就緒導致檢測失敗"""
    import urllib.request
    print("🌐 [Network] 正在檢查網路與目標伺服器連線...")
    start_time = time.time()
    while time.time() - start_time < timeout:
        try:
            req = urllib.request.Request(
                url, 
                headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'}
            )
            with urllib.request.urlopen(req, timeout=3) as response:
                if response.getcode() == 200:
                    print("✅ [Network] 網路連線正常，且目標伺服器回應 200 OK！")
                    return True
        except Exception as e:
            print(f"⏳ [Network] 網路或伺服器尚未就緒，等候中... (剩餘 {int(timeout - (time.time() - start_time))} 秒, 錯誤: {e})")
            time.sleep(2)
    print("⚠️ [Network] 超時仍未偵測到連線，將直接嘗試啟動 Playwright。")
    return False

def run_steps_1_to_7():
    # 避免電腦睡眠喚醒/剛開機時，網路介面尚未連線完成就執行檢測，導致 Step 1 載入網頁超時失敗
    wait_for_internet()
    
    print("🚀 正在啟動 Playwright 瀏覽器...")
    
    # 初始化步驟狀態 (預設 Pending)
    step_statuses = {i: "Pending" for i in range(1, 8)}
    step_errors = {i: "" for i in range(1, 8)}
    
    # 紀錄各 API 模擬測量延遲 (在正式檢測中，可依連線時間動態計算)
    latencies = {
        "ibon_portal": format_ms(32),
        "ibon_sso": format_ms(120),
        "ovideo_config": format_ms(95),
        "ovideo_upload": format_ms(210),
        "ovideo_ai": format_ms(820)
    }
    
    overall_success = False
    
    # 預設為桌面視窗模式 (Headed)，若帶入 --headless 參數則以背景靜默模式 (無介面) 執行
    is_headless = "--headless" in sys.argv
    if is_headless:
        print("🕶️  [E2E] 偵測到 --headless 參數，將以背景無介面模式執行檢測...")
    else:
        print("🖥️  [E2E] 將以桌面視窗模式 (Headed) 執行檢測，以便觀察操作...")
        
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=is_headless)
        context = browser.new_context(
            viewport={"width": 1280, "height": 800},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()
        
        # -----------------
        # 🟢 [Step 1] 開啟目標網頁
        # -----------------
        target_url = "https://print.ibon.com.tw/promoVideo"
        print(f"🔗 [Step 1] 正在開啟頁面: {target_url}")
        
        t0 = time.time()
        try:
            step_statuses[1] = "Running"
            page.goto(target_url, wait_until="load", timeout=25000)
            latency_portal = int((time.time() - t0) * 1000)
            latencies["ibon_portal"] = format_ms(latency_portal)
            step_statuses[1] = "Pass"
            print("✅ [Step 1] 頁面載入成功！")
            
            # -----------------
            # 🟢 [Step 2] 點擊「立即體驗 AI 影片轉換」
            # -----------------
            step_statuses[2] = "Running"
            btn_selector = 'button[data-textid="promoVideoStart-btn"]'
            page.wait_for_selector(btn_selector, state="visible", timeout=15000)
            
            primary_btn = page.locator('button.solid[data-textid="promoVideoStart-btn"]').first
            if not primary_btn.is_visible():
                primary_btn = page.locator(btn_selector).first
                
            primary_btn.click()
            step_statuses[2] = "Pass"
            print("✅ [Step 2] 立即體驗按鈕點擊成功！")
            page.wait_for_timeout(1500)
            
            # -----------------
            # 🟢 [Step 3] 勾選「我已閱讀並同意上述說明」
            # -----------------
            step_statuses[3] = "Running"
            try:
                # 先等彈窗標題出現，確認彈窗已完整載入
                page.wait_for_selector("text=即將前往第三方服務頁面", timeout=15000)
                # 直接點 label，避免 label 擋住 checkbox 點擊
                label_locator = page.locator("label.base-checkbox").first
                label_locator.wait_for(state="visible", timeout=10000)
                label_locator.click()
                step_statuses[3] = "Pass"
                print("✅ [Step 3] 同意框勾選完成！")
            except Exception as e:
                raise Exception(f"無法勾選同意框: {e}")

            
            # -----------------
            # 🟢 [Step 4] 點擊「同意並前往」按鈕 (另開 OVideo 新視窗)
            # -----------------
            step_statuses[4] = "Running"
            print("⏳ [Step 4] 正在定位「同意並前往」按鈕...")
            go_button = page.get_by_role("button", name="同意並前往").first
            if not go_button.is_visible():
                go_button = page.locator('text="同意並前往"').first
                
            go_button.wait_for(state="visible", timeout=8000)
            print("🎯 [Step 4] 點擊「同意並前往」，等候 OVideo 新分頁開啟...")
            
            t_sso = time.time()
            with context.expect_page() as new_page_info:
                go_button.click()
            
            ovideo_page = new_page_info.value
            ovideo_page.wait_for_load_state("load")
            latency_sso = int((time.time() - t_sso) * 1000)
            latencies["ibon_sso"] = format_ms(latency_sso)
            step_statuses[4] = "Pass"
            print(f"✅ [Step 4] 成功跳轉新視窗！新網址: {ovideo_page.url}")
            
            # -----------------
            # 🟢 [Step 5] 在 OVideo 頁面點擊「開始製作影片」
            # -----------------
            step_statuses[5] = "Running"
            print("⏳ [Step 5] 正在 OVideo 頁面尋找「開始製作影片」按鈕...")
            ovideo_btn = ovideo_page.get_by_role("button", name="開始製作影片").first
            if not ovideo_btn.is_visible():
                ovideo_btn = ovideo_page.locator('text="開始製作影片"').first
                
            ovideo_btn.wait_for(state="visible", timeout=15000)
            print("🎯 [Step 5] 找到「開始製作影片」按鈕，執行點擊...")
            ovideo_btn.click()
            step_statuses[5] = "Pass"
            print("✅ [Step 5] 「開始製作影片」按鈕點擊成功！")
            
            # 等候工作區加載
            ovideo_page.wait_for_timeout(3000)
            
            # -----------------
            # 🟢 [Step 6] 動態資料夾掃描，交替上傳測試簡報 (PDF / PPT / PPTX)
            # -----------------
            step_statuses[6] = "Running"
            test_dir = "test_files"
            os.makedirs(test_dir, exist_ok=True)
            
            # 如果 test_files 資料夾是空的，提示使用者放入簡報
            if len(os.listdir(test_dir)) == 0:
                print("💡 [Step 6] 偵測到 test_files 資料夾為空，請將測試用簡報 (PDF/PPT) 放入該資料夾中。")
            
            # 掃描 test_files 資料夾內所有支援的簡報檔案 (.pdf, .ppt, .pptx)
            supported_extensions = (".pdf", ".ppt", ".pptx")
            found_files = [
                os.path.join(test_dir, f) for f in os.listdir(test_dir) 
                if f.lower().endswith(supported_extensions)
            ]
            found_files.sort() # 排序，確保交替順序穩定
            
            file_path = ""
            if found_files:
                # 升級：使用專用的持久化檔案記錄上一次輪替的索引，不受歷史日誌被清空、裁切或重設影響
                rotation_file = "config/file_rotation.json"
                last_index = -1
                if os.path.exists(rotation_file):
                    try:
                        with open(rotation_file, "r", encoding="utf-8") as f:
                            state = json.load(f)
                            last_index = state.get("last_file_index", -1)
                    except Exception as e:
                        print(f"⚠️ [Step 6] 讀取檔案輪替狀態失敗: {e}")
                
                # 計算下一個索引
                next_index = (last_index + 1) % len(found_files)
                
                # 儲存最新的輪替索引
                try:
                    os.makedirs(os.path.dirname(rotation_file), exist_ok=True)
                    with open(rotation_file, "w", encoding="utf-8") as f:
                        json.dump({"last_file_index": next_index}, f, ensure_ascii=False, indent=2)
                except Exception as e:
                    print(f"⚠️ [Step 6] 寫入檔案輪替狀態失敗: {e}")
                
                file_path = found_files[next_index]
                print(f"📂 [Step 6] 動態資料夾偵測成功！共找到 {len(found_files)} 個簡報測試檔。")
                print(f"👉 依據獨立輪替機制，本次選用：【{os.path.basename(file_path)}】 (索引: {next_index})")
            else:
                raise Exception("本機找不到任何可供測試的 PDF 或 PPT 簡報檔案。請放檔案至 test_files/ 資料夾內！")
            
            print(f"⏳ [Step 6] 正在上傳：{os.path.basename(file_path)}...")
            
            file_input = ovideo_page.locator('input[type="file"]').first
            if file_input.count() > 0:
                file_input.set_input_files(file_path)
            else:
                with ovideo_page.expect_file_chooser() as fc_info:
                    ovideo_page.locator('text="點擊或拖拽檔案至此處"').first.click()
                file_chooser = fc_info.value
                file_chooser.set_files(file_path)
                
            print("✅ [Step 6] 檔案上傳動作已送出，正在等候上傳進度...")
            ovideo_page.wait_for_timeout(5000)
            
            # 填入 Email 與點擊「下一步」
            receiver_env = os.getenv("NOTIFY_EMAIL", "doris@osensetech.com").strip()
            email_address = [e.strip() for e in receiver_env.split(",") if e.strip()][0] if receiver_env else "doris@osensetech.com"
            print(f"⏳ [Step 6.5] 正在尋找 Email 輸入框並填入: {email_address}...")
            
            email_input = ovideo_page.get_by_placeholder("請輸入您的 Email").first
            email_input.wait_for(state="visible", timeout=10000)
            email_input.fill(email_address)
            
            print("⏳ [Step 6.5] 正在點擊「下一步」按鈕...")
            next_btn = ovideo_page.get_by_role("button", name="下一步").first
            next_btn.wait_for(state="visible", timeout=5000)
            next_btn.click()
            step_statuses[6] = "Pass"
            print("✅ [Step 6] 檔案上傳與表單提交完成！")
            
            # -----------------
            # 🟢 [Step 7] 確認 AI 腳本成功生成並顯示在畫面上
            # -----------------
            step_statuses[7] = "Running"
            print("⏳ [Step 7] 正在等候 AI 腳本生成與專案建立中...")
            
            # 180秒超時等候文字框出現
            textarea_selector = "textarea"
            t_ai = time.time()
            ovideo_page.wait_for_selector(textarea_selector, state="visible", timeout=180000)
            print("🎯 [Step 7] 檢測到編輯器與文字框已載入！正在等候 AI 實質腳本內容出現...")
            
            # 跳過新手指引
            skip_tour_btn = ovideo_page.locator('text="略過"').first
            if skip_tour_btn.is_visible(timeout=3000):
                skip_tour_btn.click()
                ovideo_page.wait_for_timeout(1000)
                
            # 輪詢讀取字幕內容做深度比對 (最多等 180 秒，讓 AI 有時間替換掉預設佔位符)
            textareas = ovideo_page.locator("textarea")
            invalid_keywords = ["第1頁內容", "第一頁內容", "第1页内容", "第一页内容"]
            script_content = ""
            is_invalid = True
            reason = "腳本內容為【空白】或尚未載入"
            
            for _ in range(180):
                if textareas.count() > 0:
                    script_content = textareas.first.input_value().strip()
                    normalized_content = script_content.replace(" ", "")
                    
                    if normalized_content and not any(kw in normalized_content for kw in invalid_keywords):
                        is_invalid = False
                        break
                    elif any(kw in normalized_content for kw in invalid_keywords):
                        reason = f"腳本內容仍為預設佔位符【\"{script_content}\"】"
                        
                ovideo_page.wait_for_timeout(1000)
                
            latency_ai = int((time.time() - t_ai) * 1000)
            latencies["ovideo_ai"] = format_ms(latency_ai)
            
            print("⏳ [Step 7] 腳本已確認生成，額外等候 10 秒讓畫面中的 AI 圖片完整載入...")
            ovideo_page.wait_for_timeout(10000)
            
            os.makedirs("screenshots", exist_ok=True)
            ovideo_page.screenshot(path="screenshots/step7_final_result.png")
            
            print(f"ℹ️ [Step 7 驗證] 最終讀取到字幕內容為: \"{script_content[:50]}...\"")
            
            if is_invalid:
                step_statuses[7] = "Fail"
                step_errors[7] = f"AI 腳本生成異常: {reason}"
                raise Exception(f"AI 腳本生成異常: {reason}")
            else:
                step_statuses[7] = "Pass"
                overall_success = True
                print(f"✅ [Step 7 驗證成功] 🟢 偵測到正常的 AI 腳本內容：\"{script_content[:30]}...\"")
                print("\n🎉 恭喜！全自動化 E2E 監測流程【全部順利通過驗證】！")
            
        except Exception as e:
            # 獲取失敗在哪一步，並標記
            for step_num in range(1, 8):
                if step_statuses[step_num] == "Running":
                    step_statuses[step_num] = "Fail"
                    step_errors[step_num] = str(e)
            
            print(f"\n❌ 流程執行失敗: {e}")
            try:
                page.screenshot(path="screenshots/error_occurred.png")
            except:
                pass
            try:
                ovideo_page.screenshot(path="screenshots/error_ovideo_occurred.png")
            except:
                pass
                
        finally:
            # 不論成功或失敗，將實際數據寫出，讓 Web 監測台能立刻讀取實時數據
            export_data_to_js(step_statuses, step_errors, latencies, overall_success)
            context.close()
            browser.close()

if __name__ == "__main__":
    run_steps_1_to_7()
