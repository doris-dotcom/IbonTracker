window.monitorData = {
  "last_run": "2026-05-30 12:57:54",
  "total_checks": 30,
  "success_checks": 29,
  "fail_checks": 1,
  "apis": [
    {
      "name": "ibon 影片推廣首頁",
      "method": "GET",
      "url": "print.ibon.com.tw/promoVideo",
      "status": "online",
      "latency": "4.57 s"
    },
    {
      "name": "ibon 轉跳 OVideo 憑證驗證 API",
      "method": "POST",
      "url": "/api/v1/auth/ibon-token",
      "status": "online",
      "latency": "2.23 s"
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
      "latency": "88.25 s"
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
      "status": "Pass",
      "desc": "自動勾選「我已閱讀並同意上述說明」Checkbox 選項。",
      "error": ""
    },
    {
      "num": 4,
      "name": "步驟 4 - 跳轉至 OVideo",
      "status": "Pass",
      "desc": "點擊「同意並前往」按鈕，觸發認證 handshake API 且成功攔截新分頁開啟跳轉。",
      "error": ""
    },
    {
      "num": 5,
      "name": "步驟 5 - 點擊開始製作",
      "status": "Pass",
      "desc": "於跳轉後之 OVideo 頁面點擊「開始製作影片」按鈕，成功進入工作區。",
      "error": ""
    },
    {
      "num": 6,
      "name": "步驟 6 - 上傳測試簡報",
      "status": "Pass",
      "desc": "上傳測試簡報簡介檔（PDF/PPT）並填入電子郵件，點擊下一步開始解析。",
      "error": ""
    },
    {
      "num": 7,
      "name": "步驟 7 - 驗證腳本生成",
      "status": "Pass",
      "desc": "檢測專案開啟狀態，確認 AI 腳本已成功解析並完整顯示於編輯畫面。（監測通過指標）",
      "error": ""
    }
  ],
  "history": [
    {
      "time": "2026-05-30 12:57:54",
      "id": "#TS-17074",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-29 20:23:26",
      "id": "#TS-57406",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-29 13:18:34",
      "id": "#TS-31914",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-28 20:38:33",
      "id": "#TS-71913",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-28 13:15:01",
      "id": "#TS-45301",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-27 20:28:35",
      "id": "#TS-84915",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-27 13:25:28",
      "id": "#TS-59528",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-26 13:09:34",
      "id": "#TS-72174",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-25 20:39:50",
      "id": "#TS-12790",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-25 13:27:13",
      "id": "#TS-86833",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-24 18:47:07",
      "id": "#TS-19627",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-24 13:08:44",
      "id": "#TS-99324",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-23 18:43:18",
      "id": "#TS-32998",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-23 12:48:10",
      "id": "#TS-11690",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-22 19:52:16",
      "id": "#TS-50736",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-22 13:09:10",
      "id": "#TS-26550",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-21 20:22:50",
      "id": "#TS-66170",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-21 13:15:57",
      "id": "#TS-40557",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-20 19:55:31",
      "id": "#TS-78131",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-20 13:11:48",
      "id": "#TS-53908",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-19 20:18:24",
      "id": "#TS-93104",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-19 13:09:12",
      "id": "#TS-67352",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-18 20:41:30",
      "id": "#TS-08090",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-18 13:13:56",
      "id": "#TS-81236",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-17 18:29:16",
      "id": "#TS-13756",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-17 12:58:19",
      "id": "#TS-93899",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-16 18:22:41",
      "id": "#TS-26961",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-16 12:35:08",
      "id": "#TS-06108",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-15 19:26:56",
      "id": "#TS-44416",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-15 12:56:22",
      "id": "#TS-20982",
      "api_status": "5 / 5 在線",
      "steps": "Step 2/7 完成 (步驟 3 失敗)",
      "fail_reason": "【步驟 3 - 勾選同意條款】無法定位到同意聲明勾選框",
      "load": "CPU 15% | RAM 46%",
      "result": "fail"
    }
  ]
};