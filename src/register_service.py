import os
import sys
import subprocess

def register():
    # 取得專案根目錄、Python 執行檔與核心啟動指令
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    python_bin = sys.executable
    script_path = os.path.join(project_root, "src", "tracker.py")
    plist_name = "com.ibontracker.monitor.plist"
    plist_path = os.path.expanduser(f"~/Library/LaunchAgents/{plist_name}")
    
    # 建立日誌與設定資料夾
    os.makedirs(os.path.expanduser("~/Library/LaunchAgents"), exist_ok=True)
    os.makedirs(os.path.join(project_root, "logs"), exist_ok=True)
    
    plist_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.ibontracker.monitor</string>
    <key>ProgramArguments</key>
    <array>
        <string>{python_bin}</string>
        <string>{script_path}</string>
    </array>
    <key>WorkingDirectory</key>
    <string>{project_root}</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>{project_root}/logs/service_stdout.log</string>
    <key>StandardErrorPath</key>
    <string>{project_root}/logs/service_stderr.log</string>
</dict>
</plist>
"""
    # 寫入 Plist 檔
    with open(plist_path, "w", encoding="utf-8") as f:
        f.write(plist_content)
    
    print(f"📝 [1/3] 已成功產生 macOS LaunchAgent 設定檔：\n👉 {plist_path}\n")
    
    # 嘗試卸載舊的服務 (如果已存在)
    print("⏳ [2/3] 正在清理已存在的背景監測服務項目...")
    subprocess.run(["launchctl", "unload", plist_path], capture_output=True)
    
    # 掛載並啟動全新的背景服務
    print("⏳ [3/3] 正在註冊並啟用全新的 OVideo 背景監測服務...")
    result = subprocess.run(["launchctl", "load", plist_path], capture_output=True, text=True)
    
    if result.returncode == 0:
        print("\n🎉 ======================================================= 🎉")
        print("✅ 【OVideo 全自動監測服務】已成功註冊為 macOS 系統常駐背景服務！")
        print("💡 現在它已經在後台悄悄運作了，您可以完全【關閉所有終端機視窗】。")
        print("💡 每次您開機進入 Mac，系統都會在後台自動重啟它，保證健康！")
        print("🎉 ======================================================= 🎉\n")
        print(f"📝 貼心提示：")
        print(f"   1. 您可以隨時透過以下指令查看背景輸出日誌：")
        print(f"      tail -f \"{project_root}/logs/service_stdout.log\"")
        print(f"   2. 如果要完全停止此背景服務，請在終端機執行：")
        print(f"      launchctl unload \"{plist_path}\"")
    else:
        print(f"❌ 註冊服務失敗: {result.stderr}")

if __name__ == "__main__":
    register()
