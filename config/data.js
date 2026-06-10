window.monitorData = {
  "last_run": "2026-06-10 13:24:53",
  "total_checks": 30,
  "success_checks": 20,
  "fail_checks": 10,
  "apis": [
    {
      "name": "ibon 影片推廣首頁",
      "method": "GET",
      "url": "print.ibon.com.tw/promoVideo",
      "status": "online",
      "latency": "5.40 s"
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
      "error": "Locator.check: Timeout 30000ms exceeded.\nCall log:\n  - waiting for locator(\"input[type='checkbox']\").first\n    - locator resolved to <input type=\"checkbox\" data-v-0f7422d0=\"\" class=\"base-checkbox__input\"/>\n  - attempting click action\n    2 × waiting for element to be visible, enabled and stable\n      - element is visible, enabled and stable\n      - scrolling into view if needed\n      - done scrolling\n      - <label data-v-0f7422d0=\"\" data-v-2d2e9651=\"\" class=\"base-checkbox\">…</label> intercepts pointer events\n    - retrying click action\n    - waiting 20ms\n    2 × waiting for element to be visible, enabled and stable\n      - element is visible, enabled and stable\n      - scrolling into view if needed\n      - done scrolling\n      - <label data-v-0f7422d0=\"\" data-v-2d2e9651=\"\" class=\"base-checkbox\">…</label> intercepts pointer events\n    - retrying click action\n      - waiting 100ms\n    56 × waiting for element to be visible, enabled and stable\n       - element is visible, enabled and stable\n       - scrolling into view if needed\n       - done scrolling\n       - <label data-v-0f7422d0=\"\" data-v-2d2e9651=\"\" class=\"base-checkbox\">…</label> intercepts pointer events\n     - retrying click action\n       - waiting 500ms\n"
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
    },
    {
      "time": "2026-06-05 13:26:05",
      "id": "#TS-37165",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-06-04 20:09:21",
      "id": "#TS-74961",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-06-04 14:02:36",
      "id": "#TS-52956",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-06-03 21:23:26",
      "id": "#TS-93006",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-06-03 14:09:55",
      "id": "#TS-66995",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-06-02 20:50:49",
      "id": "#TS-04649",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-06-02 13:56:38",
      "id": "#TS-79798",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-06-01 23:31:06",
      "id": "#TS-27866",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-06-01 14:10:49",
      "id": "#TS-94249",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-31 19:05:32",
      "id": "#TS-25532",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-31 13:24:06",
      "id": "#TS-05046",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
    {
      "time": "2026-05-30 18:52:19",
      "id": "#TS-38339",
      "api_status": "5 / 5 在線",
      "steps": "Step 7/7 完成",
      "fail_reason": "",
      "load": "CPU 15% | RAM 46%",
      "result": "success"
    },
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
    }
  ]
};