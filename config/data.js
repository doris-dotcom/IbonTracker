window.monitorData = {
  "last_run": "2026-06-19 14:25:34",
  "total_checks": 30,
  "success_checks": 0,
  "fail_checks": 30,
  "apis": [
    {
      "name": "ibon 影片推廣首頁",
      "method": "GET",
      "url": "print.ibon.com.tw/promoVideo",
      "status": "online",
      "latency": "5.72 s"
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
      "time": "2026-06-19 14:25:34",
      "id": "#TS-50334",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-18 20:30:46",
      "id": "#TS-85846",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-18 14:01:41",
      "id": "#TS-62501",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-17 20:55:55",
      "id": "#TS-00955",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-17 14:21:31",
      "id": "#TS-77291",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-16 22:23:25",
      "id": "#TS-19805",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-16 18:17:38",
      "id": "#TS-05058",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-16 18:03:40",
      "id": "#TS-04220",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-16 14:38:17",
      "id": "#TS-91897",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-15 23:22:26",
      "id": "#TS-36946",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-15 14:31:57",
      "id": "#TS-05117",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-14 19:34:57",
      "id": "#TS-36897",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-14 13:57:41",
      "id": "#TS-16661",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-13 19:21:51",
      "id": "#TS-49711",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-13 13:25:13",
      "id": "#TS-28313",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-12 20:25:46",
      "id": "#TS-67146",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-12 13:54:58",
      "id": "#TS-43698",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-11 20:51:57",
      "id": "#TS-82317",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-11 13:58:01",
      "id": "#TS-57481",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-10 20:30:36",
      "id": "#TS-94636",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-10 13:24:53",
      "id": "#TS-69093",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-09 20:11:13",
      "id": "#TS-07073",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-09 13:12:45",
      "id": "#TS-81965",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-08 21:13:34",
      "id": "#TS-24414",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-08 13:58:52",
      "id": "#TS-98332",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-07 19:13:42",
      "id": "#TS-30822",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-07 13:44:42",
      "id": "#TS-11082",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-06 18:57:55",
      "id": "#TS-43475",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-06 12:59:50",
      "id": "#TS-21990",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    },
    {
      "time": "2026-06-05 20:15:34",
      "id": "#TS-61734",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】等待元素超時，網頁加載過慢",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    }
  ]
};