# IbTracker

ib 影片平台監測系統 — 自動偵測 ib 平台的影片上架狀況、API 健康度以及 Playwright E2E UI 整合測試結果，並提供極具現代感的「單頁監測儀表板 (Single Page Dashboard)」。

---

## 專案結構

```
IbonTracker/
├── .env                  # 機密環境變數（不納入 git）
├── .gitignore
├── requirements.txt
├── README.md
├── index.html            # 📊 頂級單頁監測儀表板 (極速 HTML + 原生 CSS)
├── src/
│   └── tracker.py        # 爬蟲監測主程式
└── config/
    └── settings.json     # 監測與系統設定
```

---

## 📊 監測儀表板 (`index.html`)

為你建立了一個 **無需任何外部框架** 的純 HTML / 原生 CSS 高質感暗黑風格儀表板：

- **頂部狀態摘要卡**：即時統計總檢查數、成功檢查數及異常次數。
- **🔌 API 系統健康度**：展示各個核心 API 的狀態燈號與回應時間（含延遲條）。
- **🎭 Playwright UI 測試結果**：端到端（E2E）自動化瀏覽器步驟測試結果，支援**可折疊**的詳細錯誤資訊面板。
- **📜 歷程監測日誌**：底部即時表格，提供**搜尋過濾器**。
- **⚡ 即時互動檢測**：點擊右上角「即時檢測」按鈕，可直接觸發模擬診斷並即時將最新監測結果動態新增至歷史表格與統計數據。

---

## 快速開始

### 1. 檢視儀表板
直接點擊雙擊打開專案根目錄底下的 [index.html](file:///Users/osense/Desktop/Doris/20.ibon/IbonTracker/index.html) 即可在任何瀏覽器直接檢視效果。

### 2. 建立 Python 虛擬環境並安裝依賴 (主程式偵測)

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3. 設定環境變數

複製並設定 `.env`：

```
IBON_TARGET_URL=https://...
CHECK_INTERVAL=300
```

### 4. 執行監測主程式

```bash
python src/tracker.py
```
