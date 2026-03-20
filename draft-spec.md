# Draft Spec：業務員分析頁（Final UI）

> 產生時間：2026-03-18
> 狀態：Draft — 待工程師審閱
> Figma：
> - 頁面整體：https://www.figma.com/design/Jkuzai47DvXzPZlh6hUkNM/%F0%9F%9F%A2-Final-UI?node-id=9714-25867&t=H2DMHUCVvIvLoKqu-4
> - Header 導航：https://www.figma.com/design/Jkuzai47DvXzPZlh6hUkNM/%F0%9F%9F%A2-Final-UI?node-id=9714-25943&t=H2DMHUCVvIvLoKqu-4
> - 下一區塊：https://www.figma.com/design/Jkuzai47DvXzPZlh6hUkNM/%F0%9F%9F%A2-Final-UI?node-id=9714-25942&t=H2DMHUCVvIvLoKqu-4
> - Tab 區塊：https://www.figma.com/design/Jkuzai47DvXzPZlh6hUkNM/%F0%9F%9F%A2-Final-UI?node-id=9714-25868&t=H2DMHUCVvIvLoKqu-4
> - 第一 tab 內容：https://www.figma.com/design/Jkuzai47DvXzPZlh6hUkNM/%F0%9F%9F%A2-Final-UI?node-id=9714-25874&t=H2DMHUCVvIvLoKqu-4
> OpenAPI：N/A（目前網址無效，先忽略 API 格式資料）

---

## 1. 功能範圍與流程摘要

這是一個「業務員」分析型頁面，主要用來呈現單一業務員的整體綜合表現、分析範圍說明、分險別/分項統計表、風險摘要與基本資訊。

此頁目前從 Figma 可確認的範圍包含：

- 頂部 Header 導航。
- Tab 區塊，含三個頁籤，預設顯示「綜合分析」。
- 主內容區，含頁面標題、資料區間選擇器、統計表格。
- Summary 提示卡，顯示官方申訴與特殊註記。
- Basic Info 卡，顯示業務員姓名、代碼、公司、管理人與近期狀態。

明確排除項目：

- 目前不納入任何 API request / response 格式推導。
- Figma 未呈現的後端資料查詢、排序、篩選、匯出流程，先不納入本版 spec。

---

## 2. 元件拆分建議  ← 工程師重點審閱

| 元件名稱 | Figma Node ID | 層級 | 可重用性 | 說明 |
|---|---|---|---|---|
| BusinessAnalysisPage | 9714:25867 | Container | 頁面專屬 | 頁面根容器，負責組裝 Header、Tab、分析區、Summary、Basic Info |
| Header | 9714:25873 | Feature | 跨頁可重用 | 白底 Header，左側 logo + 標題；此頁右側 menu 區在 Figma 為隱藏狀態 |
| TabGroup | 9714:25868 | Feature | 頁面專屬 | 三個頁籤的群組容器，負責 active tab 切換 |
| TabItem | 6002:11422 / 9714:25869~25871 | Base | 跨頁可重用 | Tab 基礎元件，支援 active / inactive / inactive with risk icon |
| AnalysisHeader | 9714:25874 | Feature | 頁面專屬 | 標題「整體綜合表現」與資料區間選擇器的組合區塊 |
| DateRangeSelect | 8677:15843 / 7980:15622 / 6002:12323 | Base | 跨頁可重用 | 資料區間下拉選單，預設顯示「近六年」 |
| MetricsTable | 9714:25883 | Feature | 頁面專屬 | 表格區塊容器，包住 table head 與多個 row |
| TableHead | 9714:25884 | Base | 跨頁可重用 | 固定欄位標題列，欄位包含進單險別、保費、理賠金額、簽單損率等 |
| TableRow | 9714:25885 / 25886 / 25900 / 25901 / 25902 / 25914 / 25927 / 9865:3726 | Base | 跨頁可重用 | 單列統計資料列，依險別顯示各項數值 |
| SummaryNoticeCard | 9714:25942 | Feature | 頁面專屬 | 黃底提示卡，呈現官方申訴與特殊註記 |
| BasicInfoCard | 9714:25943 | Feature | 頁面專屬 | 白底基本資訊卡，呈現姓名、公司與管理資訊 |
| InfoWarningBlock | 6002:11924 | Base | 跨頁可重用 | 不可外流 + 最後更新時間的資訊提示元件 |

> 拆分原則：Container 負責資料與狀態，Feature 元件負責區塊邏輯與布局，Base 元件只接收 props 並渲染。

---

## 3. 互動行為說明  ← 工程師重點審閱

| 互動點 | 觸發條件 | 預期行為 | 對應 Figma Frame |
|---|---|---|---|
| 進入頁面 | 使用者進入此頁 | 顯示 Header、Tab、分析內容、Summary 與 Basic Info | 9714:25867 |
| 切換 Tab | 點擊其他頁籤 | 切換至對應內容區塊；目前 Figma 只清楚看到 active / inactive 視覺狀態 | 9714:25868 |
| 點擊「綜合分析」 | 頁籤被選取 | 顯示 active 狀態，底部藍色 indicator 顯示 | 9714:25869 |
| 點擊「任意車險」 | 頁籤被選取 | 顯示 inactive_N 狀態並附風險圖示；實際是否可切換需確認 | 9714:25870 |
| 點擊「個傷」 | 頁籤被選取 | 顯示 inactive 狀態；實際是否可切換需確認 | 9714:25871 |
| 開啟資料區間選單 | 點擊「近六年」 | 顯示下拉選單，供使用者切換資料區間 | 9714:25878 |
| 檢視統計表 | 頁面載入後 | 顯示各險別的數值與百分比；Figma 未見排序 / 篩選 / 匯出按鈕 | 9714:25883 |
| 檢視 Summary | 頁面載入後 | 顯示申訴數與特殊註記，為靜態提示型內容 | 9714:25942 |
| 檢視 Basic Info | 頁面載入後 | 顯示業務員資訊與狀態，為只讀資料 | 9714:25943 |

---

## 4. 欄位與資料型別定義  ← 工程師重點審閱

### 4.1 頁面顯示欄位

| 欄位名稱 | 顯示名稱（UI） | 型別 | 必填 | 驗證規則 | 備註 |
|---|---|---|---|---|---|
| pageTitle | 整體綜合表現 | string | 是 | N/A | 頁面標題 |
| selectedDateRange | 資料區間為 / 近六年 | string | 是 | N/A | 預設顯示近六年 |
| warningTitle | 不可外流 | string | 是 | N/A | 標示內部資料用途 |
| warningDescription | 本分析資料僅供內部使用... | string | 是 | N/A | 固定提示文案 |
| lastUpdatedLabel | 最後更新時間：2026 年 2 月 | string | 是 | N/A | 顯示最新更新月份 |
| agentName | 徐*雯 | string | 是 | N/A | 資訊已遮罩 |
| agentNo | E**C738183 | string | 是 | N/A | 資訊已遮罩 |
| companyName | 威*保經 | string | 是 | N/A | 資訊已遮罩 |
| companyNo | BA1296**** | string | 是 | N/A | 資訊已遮罩 |
| managerInfo | 管理人：940171 張巧勳 | string | 是 | N/A | 顯示管理人資訊 |
| registrationInfo | 登錄於 2018 年 | string | 是 | N/A | 只讀資料 |
| recentPerformanceInfo | 最近三個月有進單 10 張 | string | 是 | N/A | 只讀資料 |

### 4.2 摘要內容欄位

| 欄位名稱 | 顯示名稱（UI） | 型別 | 說明 |
|---|---|---|---|
| complaintCount | 客戶提出的官方申訴：共 3 筆 | string / number | 申訴總數，UI 目前以文字敘述呈現 |
| complaintRecentCount | 近三個月：1 筆 | string / number | 近期申訴數 |
| specialNote | 特殊註記：A&H 個傷 - 通路業務員招攬品質不良 | string | 特殊標註內容 |
| specialNoteDate | 註記於 2019/06/06 | string | 註記日期 |

### 4.3 表格欄位

| 欄位名稱 | 顯示名稱（UI） | 型別 | 說明 |
|---|---|---|---|
| insuranceCategory | 進單險別 | string | 表格首欄，顯示險別名稱 |
| premium | 保費 | number | 金額，建議千分位格式 |
| claimAmount | 理賠金額 | number | 金額，建議千分位格式 |
| signLossRatio | 簽單損率 | number / string | 百分比，依 Figma 顯示一位小數 |
| policyCount | 保單數 | integer | 筆數 |
| customerCount | 客戶數 | integer | 人數 |
| claimCaseCount | 賠案數 | integer | 筆數 |
| customerLossRatio | 客戶出險率 | number / string | 百分比，依 Figma 顯示一位小數 |

表格中觀察到的險別例子包含：

- 任意車險
- A&H
- 個傷
- 個健
- 工程險
- 責任保險
- 公共意外
- 雇主責任
- 產品責任
- 營繕承包人意外

---

## 5. API 對應表

目前 API URL 無效，因此本版先不做 endpoint / payload / response 的硬對應，只保留待補位。

| 功能 | Method | Endpoint | Request Payload | Response 關鍵欄位 | 錯誤碼處理 |
|---|---|---|---|---|---|
| 取得頁面分析資料 | N/A | N/A | N/A | N/A | [Open Question] API 未提供，待後續補齊 |
| 取得區間資料 | N/A | N/A | N/A | N/A | [Open Question] 近六年 / 其他區間選項尚未定義 |
| 切換 Tab 資料 | N/A | N/A | N/A | N/A | [Open Question] 同頁切換或導頁尚未確認 |

---

## 6. State 結構草案

### 6.1 頁面 State

```typescript
interface BusinessAnalysisPageState {
  activeTab: 'summary' | 'any-car' | 'personal-injury'
  selectedDateRange: string
  isDateRangeOpen: boolean
  tableRows: TableRowItem[]
  summaryItems: SummaryItem[]
  basicInfo: BasicInfo
}
```

### 6.2 基本資訊 State

```typescript
interface BasicInfo {
  agentName: string
  agentNo: string
  companyName: string
  companyNo: string
  managerInfo: string
  registrationYear: string
  recentOrdersLabel: string
}
```

### 6.3 表格資料 State

```typescript
interface TableRowItem {
  insuranceCategory: string
  premium: number
  claimAmount: number
  signLossRatio: number
  policyCount: number
  customerCount: number
  claimCaseCount: number
  customerLossRatio: number
  hasWarningIcon?: boolean
  hasLeadingPlaceholder?: boolean
}
```

### 6.4 衍生 State

```typescript
const isSummaryTabActive = computed(() => activeTab.value === 'summary')
const isAnyCarTabActive = computed(() => activeTab.value === 'any-car')
const isPersonalInjuryTabActive = computed(() => activeTab.value === 'personal-injury')
```

---

## 7. Loading / Empty / Error 狀態

| 狀態 | 觸發條件 | UI 呈現 | 對應 Figma Node |
|---|---|---|---|
| Loading | 資料尚未準備完成 | Figma 未提供 loading skeleton；可暫以一般 loading 區塊處理 | N/A |
| Empty | tableRows 為空 | Figma 未提供 empty state；可顯示無資料提示 | N/A |
| Error (4xx) | 資料取得失敗 | Figma 未提供 error state；可顯示錯誤訊息與重試 | N/A |
| Error (5xx) | 系統異常 | Figma 未提供 error state；可顯示通用錯誤訊息 | N/A |

目前 Figma 只明確提供以下視覺狀態：

- Tab 的 active / inactive 狀態。
- 日期選擇器的預設狀態。
- Summary 與 Basic Info 的靜態展示狀態。

---

## 8. 開放問題與假設  ← 工程師重點審閱

### Assumptions（推測，需確認）

- [Assumption] 本頁為只讀分析頁，不提供編輯、送出或儲存操作。
- [Assumption] 表格數值與摘要內容皆為後端提供的唯讀資料，前端僅負責顯示。
- [Assumption] 金額欄位以千分位格式顯示，百分比欄位以一位小數顯示。
- [Assumption] 使用者可見的遮罩字元（`*`）為資料呈現的一部分，不是前端自行脫敏。
- [Assumption] Tab 區塊、日期選單與表格皆屬同一頁的分析流程，而非獨立頁面跳轉。

### Open Questions（需要人類決策）

- [Open Question] Tab 切換是同頁區塊切換，還是會導向不同 route？
- [Open Question] 資料區間選單的完整選項有哪些？目前只看得到「近六年」。
- [Open Question] Summary 區塊是否在所有 Tab 都顯示，或只在「綜合分析」顯示？
- [Open Question] 表格是否需要排序、展開、橫向捲動或下載功能？
- [Open Question] Header 的右側 menu 在此頁是否永遠隱藏，或只是 Figma 的這個 variant 未啟用？
- [Open Question] API 補齊後，表格欄位命名是否需要與後端欄位一一對齊？

---

✅ draft-spec.md 已產生。

📋 請重點審閱以下章節：
  - Section 2：元件拆分建議是否符合現有 repo 慣例？
  - Section 3：互動行為是否完整？有無遺漏的 edge case？
  - Section 4：欄位型別與命名是否足夠清楚？
  - Section 8：Assumptions 是否正確？Open Questions 請提供決策。

確認無誤後請回覆「Approve」，我將整理交接 payload。
未收到 Approve 前，不會繼續任何下游產出。
