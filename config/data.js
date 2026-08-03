window.monitorData = {
  "last_run": "2026-08-03 12:35:35",
  "total_checks": 30,
  "success_checks": 0,
  "fail_checks": 30,
  "apis": [
    {
      "name": "ibon 影片推廣首頁",
      "method": "GET",
      "url": "print.ibon.com.tw/promoVideo",
      "status": "online",
      "latency": "5.00 s"
    },
    {
      "name": "ibon 轉跳 OVideo 憑證驗證 API",
      "method": "POST",
      "url": "/api/v1/auth/ibon-token",
      "status": "online",
      "latency": "120 ms"
    },
    {
      "name": "OVideo 專案與模板載入服務",
      "method": "GET",
      "url": "ovideo.tv/api/v1/projects/config",
      "status": "online",
      "latency": "95 ms"
    },
    {
      "name": "PPT / PDF 簡報檔案上傳解析器",
      "method": "POST",
      "url": "ovideo.tv/api/v1/files/upload",
      "status": "online",
      "latency": "210 ms"
    },
    {
      "name": "AI 影片腳本生成服務 (LLM)",
      "method": "POST",
      "url": "ovideo.tv/api/v1/ai/generate-script",
      "status": "online",
      "latency": "820 ms"
    }
  ],
  "steps": [
    {
      "num": 1,
      "name": "步驟 1 - 開啟 ibon 首頁",
      "status": "Pass",
      "desc": "導航至 https://print.ibon.com.tw/promoVideo 並驗證頁面成功加載。",
      "error": ""
    },
    {
      "num": 2,
      "name": "步驟 2 - 點擊立即體驗",
      "status": "Pass",
      "desc": "自動定位並點擊網頁中的「立即體驗 AI 影片轉換」按鈕。",
      "error": ""
    },
    {
      "num": 3,
      "name": "步驟 3 - 勾選同意條款",
      "status": "Fail",
      "desc": "自動勾選「我已閱讀並同意上述說明」Checkbox 選項。",
      "error": "無法勾選同意框: Page.wait_for_selector: Timeout 15000ms exceeded.\nCall log:\n  - waiting for locator(\"text=即將前往第三方服務頁面\") to be visible\n"
    },
    {
      "num": 4,
      "name": "步驟 4 - 跳轉至 OVideo",
      "status": "Pending",
      "desc": "點擊「同意並前往」按鈕，觸發認證 handshake API 且成功攔截新分頁開啟跳轉。",
      "error": ""
    },
    {
      "num": 5,
      "name": "步驟 5 - 點擊開始製作",
      "status": "Pending",
      "desc": "於跳轉後之 OVideo 頁面點擊「開始製作影片」按鈕，成功進入工作區。",
      "error": ""
    },
    {
      "num": 6,
      "name": "步驟 6 - 上傳測試簡報",
      "status": "Pending",
      "desc": "上傳測試簡報簡介檔（PDF/PPT）並填入電子郵件，點擊下一步開始解析。",
      "error": ""
    },
    {
      "num": 7,
      "name": "步驟 7 - 驗證腳本生成",
      "status": "Pending",
      "desc": "檢測專案開啟狀態，確認 AI 腳本已成功解析並完整顯示於編輯畫面。（監測通過指標）",
      "error": ""
    }
  ],
  "history": [
    {
      "time": "2026-08-03 12:35:35",
      "id": "#TS-31735",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-02 18:45:11",
      "id": "#TS-67511",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-02 12:28:37",
      "id": "#TS-44917",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-01 18:44:37",
      "id": "#TS-81077",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-01 12:24:50",
      "id": "#TS-58290",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-31 19:32:43",
      "id": "#TS-97563",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-31 12:28:52",
      "id": "#TS-72132",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-30 19:14:25",
      "id": "#TS-10065",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-30 12:11:14",
      "id": "#TS-84674",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-29 19:30:37",
      "id": "#TS-24637",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-29 12:18:30",
      "id": "#TS-98710",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-28 19:24:41",
      "id": "#TS-37881",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-28 12:15:34",
      "id": "#TS-12134",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-27 20:31:55",
      "id": "#TS-55515",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-27 12:42:10",
      "id": "#TS-27330",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-26 18:48:03",
      "id": "#TS-62883",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-26 12:31:57",
      "id": "#TS-40317",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-25 18:39:14",
      "id": "#TS-75954",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-25 12:16:16",
      "id": "#TS-52976",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-24 19:06:58",
      "id": "#TS-91218",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-24 12:20:34",
      "id": "#TS-66834",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-23 19:16:12",
      "id": "#TS-05372",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-23 12:20:49",
      "id": "#TS-80449",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-22 19:14:14",
      "id": "#TS-18854",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-22 12:21:54",
      "id": "#TS-94114",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-21 19:13:08",
      "id": "#TS-32388",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-21 12:19:42",
      "id": "#TS-07582",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-20 19:51:46",
      "id": "#TS-48306",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-20 12:40:58",
      "id": "#TS-22458",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-07-19 18:39:34",
      "id": "#TS-57574",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    }
  ]
};