window.monitorData = {
  "last_run": "2026-08-18 17:39:45",
  "total_checks": 30,
  "success_checks": 0,
  "fail_checks": 30,
  "apis": [
    {
      "name": "ibon 影片推廣首頁",
      "method": "GET",
      "url": "print.ibon.com.tw/promoVideo",
      "status": "online",
      "latency": "4.36 s"
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
      "time": "2026-08-18 17:39:45",
      "id": "#TS-45985",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-18 12:42:07",
      "id": "#TS-28127",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-18 10:21:26",
      "id": "#TS-19686",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-17 17:50:07",
      "id": "#TS-60207",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-17 12:50:57",
      "id": "#TS-42257",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-17 10:22:25",
      "id": "#TS-33345",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-16 17:33:23",
      "id": "#TS-72803",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-16 12:41:49",
      "id": "#TS-55309",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-16 10:23:16",
      "id": "#TS-46996",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-15 17:31:55",
      "id": "#TS-86315",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-15 12:37:58",
      "id": "#TS-68678",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-15 10:16:44",
      "id": "#TS-60204",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-14 18:11:08",
      "id": "#TS-02268",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-14 13:42:03",
      "id": "#TS-86123",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-14 11:26:34",
      "id": "#TS-77994",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-13 18:15:06",
      "id": "#TS-16106",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-13 13:44:54",
      "id": "#TS-99894",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-13 11:29:23",
      "id": "#TS-91763",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-12 18:13:44",
      "id": "#TS-29624",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-12 13:42:15",
      "id": "#TS-13335",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-12 11:25:57",
      "id": "#TS-05157",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-11 18:04:58",
      "id": "#TS-42698",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-11 13:15:11",
      "id": "#TS-25311",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-11 11:06:48",
      "id": "#TS-17608",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-10 18:23:23",
      "id": "#TS-57403",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-10 13:38:51",
      "id": "#TS-40331",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-10 11:14:46",
      "id": "#TS-31686",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-09 17:48:03",
      "id": "#TS-68883",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-09 13:12:03",
      "id": "#TS-52323",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-08-09 11:04:38",
      "id": "#TS-44678",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    }
  ]
};