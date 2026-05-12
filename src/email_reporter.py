import os
import json
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from datetime import datetime
from playwright.sync_api import sync_playwright
import time
from dotenv import load_dotenv

# 讀取專案根目錄的 .env
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
load_dotenv(os.path.join(PROJECT_ROOT, ".env"))

def send_daily_report():
    print("📸 [Email Report] 正在截取 Dashboard 控制台畫面...")
    
    # 1. 截取 Dashboard 畫面
    screenshot_path = "screenshots/dashboard_report.png"
    os.makedirs("screenshots", exist_ok=True)
    
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(viewport={"width": 1280, "height": 900})
            page = context.new_page()
            page.goto("http://localhost:8000", wait_until="networkidle")
            # 等待 2 秒確保動畫載入完畢
            page.wait_for_timeout(2000)
            
            # 動態取得網頁實際總高度，解決 CSS Flexbox (100vh) 導致 full_page=True 截圖被截斷的問題
            page_height = page.evaluate("Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)")
            page.set_viewport_size({"width": 1280, "height": page_height + 50})
            page.wait_for_timeout(500)
            
            page.screenshot(path=screenshot_path, full_page=True)
            browser.close()
            print("✅ [Email Report] 截圖成功！")
    except Exception as e:
        print(f"⚠️ [Email Report] 截圖失敗 (可能是伺服器未啟動): {e}")

    # 2. 讀取最新檢測狀態
    state_file = "config/monitor_state.json"
    latest_result = None
    try:
        if os.path.exists(state_file):
            with open(state_file, "r", encoding="utf-8") as f:
                history = json.load(f)
                if len(history) > 0:
                    latest_result = history[0]
    except Exception as e:
        print(f"⚠️ 無法讀取狀態檔: {e}")

    # 3. 準備信件內容
    # 支援從 .env 讀取多個收件人 (支援以逗號分隔，例如: a@test.com,b@test.com)
    receiver_env = os.getenv("NOTIFY_EMAIL", "doris@osensetech.com").strip()
    receiver_emails = [email.strip() for email in receiver_env.split(",") if email.strip()]
    if not receiver_emails:
        receiver_emails = ["doris@osensetech.com"]
        
    sender_email = os.getenv("SENDER_EMAIL", receiver_emails[0])
    app_password = os.getenv("GMAIL_APP_PASSWORD")
    
    if not app_password:
        print("❌ [Email Report] 錯誤：找不到 GMAIL_APP_PASSWORD，請確認您已在 .env 檔案中設定。")
        return
        
    msg = MIMEMultipart("related")
    msg["From"] = sender_email
    msg["To"] = ", ".join(receiver_emails)
    
    if latest_result:
        status_emoji = "🟢 成功" if latest_result.get("result") == "success" else "🔴 異常"
        msg["Subject"] = f"【OVideo 自動化監測報告】檢測結果: {status_emoji} - {latest_result.get('time')}"
        
        fail_reason_html = ""
        if latest_result.get("result") == "fail":
            fail_reason_html = f"<p style='color: red; font-weight: bold;'>⚠️ 錯誤原因：{latest_result.get('fail_reason', '無詳細原因')}</p>"
            
        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f5; padding: 20px;">
            <div style="max-width: 800px; margin: 0 auto; background-color: white; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h2 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">📊 OVideo 每日自動化監測報告</h2>
                <div style="background-color: #f8fafc; border-left: 4px solid {'#10b981' if latest_result.get('result') == 'success' else '#ef4444'}; padding: 16px; margin: 20px 0; border-radius: 4px;">
                    <p style="margin: 5px 0; font-size: 16px;"><strong>檢測時間：</strong>{latest_result.get('time')}</p>
                    <p style="margin: 5px 0; font-size: 16px;"><strong>最終狀態：</strong>{status_emoji}</p>
                    <p style="margin: 5px 0; font-size: 16px;"><strong>執行步驟：</strong>{latest_result.get('steps')}</p>
                    {fail_reason_html}
                </div>
                
                <h3 style="color: #475569;">🖥️ 最新 Dashboard 儀表板截圖：</h3>
                <img src="cid:dashboard_img" alt="Dashboard Screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                
                <h3 style="color: #475569; margin-top: 30px;">🤖 Step 7 (AI 腳本生成) 畫面截圖：</h3>
                <p style="font-size: 14px; color: #64748b; margin-top: -10px;">下圖為本次檢測中 OVideo 解析並自動生成的腳本畫面：</p>
                <img src="cid:step7_img" alt="Step 7 Screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                
                <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 30px;">
                    此信件由 IbonTracker 系統於排程時間自動發送，請勿直接回覆。
                </p>
            </div>
        </body>
        </html>
        """
    else:
        msg["Subject"] = f"【OVideo 自動化監測報告】狀態回報 - {datetime.now().strftime('%Y-%m-%d %H:%M')}"
        html_content = "<p>目前尚無檢測紀錄。</p>"

    msg.attach(MIMEText(html_content, "html"))

    # 附加圖片
    # 附加 Dashboard 圖片
    if os.path.exists(screenshot_path):
        with open(screenshot_path, "rb") as img_file:
            img_data = img_file.read()
            image = MIMEImage(img_data, name="dashboard.png")
            image.add_header("Content-ID", "<dashboard_img>")
            image.add_header("Content-Disposition", "inline", filename="dashboard.png")
            msg.attach(image)

    # 附加 Step 7 圖片
    step7_path = "screenshots/step7_final_result.png"
    if os.path.exists(step7_path):
        with open(step7_path, "rb") as img_file:
            img_data = img_file.read()
            image = MIMEImage(img_data, name="step7.png")
            image.add_header("Content-ID", "<step7_img>")
            image.add_header("Content-Disposition", "inline", filename="step7.png")
            msg.attach(image)

    # 4. 透過 SMTP 發送 Email
    print(f"📧 [Email Report] 正在連線至 smtp.gmail.com 並寄送郵件給 {msg['To']}...")
    try:
        # 使用 Gmail SMTP 伺服器
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.login(sender_email, app_password)
        # 用 sendmail 可以精準且安全地傳遞給多個收件者
        server.sendmail(sender_email, receiver_emails, msg.as_string())
        server.quit()
        print("✅ [Email Report] 郵件寄送成功！")
    except Exception as e:
        print(f"❌ [Email Report] 郵件寄送失敗: {e}")

if __name__ == "__main__":
    send_daily_report()
