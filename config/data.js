window.monitorData = {
  "last_run": "2026-05-15 12:56:22",
  "total_checks": 24,
  "success_checks": 13,
  "fail_checks": 11,
  "apis": [
    {
      "name": "ibon 影片推廣首頁",
      "method": "GET",
      "url": "print.ibon.com.tw/promoVideo",
      "status": "online",
      "latency": "4.18 s"
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
      "error": "無法定位到同意聲明勾選框"
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
      "time": "2026-05-15 12:56:22",
      "id": "#TS-20982",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】無法定位到同意聲明勾選框",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-14 19:22:25",
      "id": "#TS-57745",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-14 12:57:22",
      "id": "#TS-34642",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-13 19:39:58",
      "id": "#TS-72398",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-13 17:45:36",
      "id": "#TS-65536",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-13 07:50:03",
      "id": "#TS-58603",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-12 23:56:04",
      "id": "#TS-30164",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-12 15:43:30",
      "id": "#TS-00610",
      "api_status": "5 / 5 在線",
      "steps": "Step 6/7 完成 (步驟 7 失敗)",
      "fail_reason": "【步驟 7 - 驗證腳本生成】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-12 10:13:26",
      "id": "#TS-80806",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-12 12:01:35",
      "id": "#TS-58495",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-12 09:01:44",
      "id": "#TS-47704",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-11 17:37:35",
      "id": "#TS-92255",
      "api_status": "5 / 5 在線",
      "steps": "Step 0/7 完成 (步驟 1 失敗)",
      "fail_reason": "【步驟 1 - 開啟 ibon 首頁】Page.goto: net::ERR_INTERNET_DISCONNECTED at https://print.ibon.com.tw/promoVideo",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-11 12:01:05",
      "id": "#TS-72065",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-11 09:08:13",
      "id": "#TS-61693",
      "api_status": "5 / 5 在線",
      "steps": "Step 0/7 完成 (步驟 1 失敗)",
      "fail_reason": "【步驟 1 - 開啟 ibon 首頁】Page.goto: net::ERR_INTERNET_DISCONNECTED at https://print.ibon.com.tw/promoVideo",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-10 17:11:21",
      "id": "#TS-04281",
      "api_status": "5 / 5 在線",
      "steps": "Step 0/7 完成 (步驟 1 失敗)",
      "fail_reason": "【步驟 1 - 開啟 ibon 首頁】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-10 12:27:17",
      "id": "#TS-87237",
      "api_status": "5 / 5 在線",
      "steps": "Step 6/7 完成 (步驟 7 失敗)",
      "fail_reason": "【步驟 7 - 驗證腳本生成】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-10 09:20:04",
      "id": "#TS-76004",
      "api_status": "5 / 5 在線",
      "steps": "Step 6/7 完成 (步驟 7 失敗)",
      "fail_reason": "【步驟 7 - 驗證腳本生成】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-09 17:02:19",
      "id": "#TS-17339",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-09 13:01:29",
      "id": "#TS-02889",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-09 12:10:48",
      "id": "#TS-99848",
      "api_status": "5 / 5 在線",
      "steps": "Step 0/7 完成 (步驟 1 失敗)",
      "fail_reason": "【步驟 1 - 開啟 ibon 首頁】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-09 11:03:27",
      "id": "#TS-95807",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-08 17:03:18",
      "id": "#TS-30998",
      "api_status": "5 / 5 在線",
      "steps": "Step 6/7 完成 (步驟 7 失敗)",
      "fail_reason": "【步驟 7 - 驗證腳本生成】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-08 12:03:25",
      "id": "#TS-13005",
      "api_status": "5 / 5 在線",
      "steps": "Step 6/7 完成 (步驟 7 失敗)",
      "fail_reason": "【步驟 7 - 驗證腳本生成】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-05-08 09:50:10",
      "id": "#TS-05010",
      "api_status": "5 / 5 在線",
      "steps": "Step 6/7 完成 (步驟 7 失敗)",
      "fail_reason": "【步驟 7 - 驗證腳本生成】AI 腳本生成異常: 腳本內容仍為預設佔位符【\"第 1 頁內容\"】",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    }
  ]
};