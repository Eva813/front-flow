# Draft Spec：業務員全視圖 — 綜合分析頁

> 產生時間：2026-03-26
> 狀態：Draft — 待工程師審閱
> Figma 整頁面：https://www.figma.com/design/Jkuzai47DvXzPZlh6hUkNM/🟢-Final-UI?node-id=9714-25867
> 說明：本規格基於 Figma 設計稿推導，涵蓋主頁框架及「綜合分析」Tab（第一頁籤）完整內容，含 Title set、BulletPoint、Metrics、AnalysisTable 四個子區塊詳細規格。API 對應與資料結構將由後續 api-enrichment Skill 補充。
> 更新紀錄：2026-03-26 補充 `9714:25875`、`9714:25879`、`9714:25880`、`9714:25883` 四個子節點詳細解析；補充 8 項 Open Questions 決策結果

---

## 1. 功能範圍與流程摘要

**功能定位：** 業務員績效全視圖（業務員全視圖），提供業務員業績、理賠、損率等多維度分析。

**涵蓋頁面：**
- `業務員` 整頁框（1440×1698px，背景 #E1F0FA）
- 包含：頂部導覽列、業務員基本資訊卡、警示摘要卡、Tab 切換列、Tab 內容（綜合分析）

**Tab 結構（本次規格範圍）：**
- Tab 1：**綜合分析**（Active 狀態，本次規格範圍）
- Tab 2：任意車險（Inactive，有風險警示 icon；結構與綜合分析不同，**本次僅顯示空白小標題佔位**）
- Tab 3：個傷（Inactive，有風險警示 icon；結構與綜合分析不同，**本次僅顯示空白小標題佔位**）

**明確排除：**
- 任意車險 Tab 詳細內容（後續規格補充，現階段空白佔位）
- 個傷 Tab 詳細內容（後續規格補充，現階段空白佔位）
- 後端 API schema、Error/Loading/Empty 狀態（不在本次範圍）

---

### 1.1 頁面結構順序（視覺由上至下）

| 顯示順序 | 元件 / 區塊名稱 | Figma Node ID | 定位備註 |
|---|---|---|---|
| 1 | Header（頂部導覽列） | `9714:25873` | 絕對定位 x:0, y:0，width:1440 |
| 2 | Basic Info（業務員基本資訊） | `9714:25943` | 位於 Header 之下，width:1260 |
| 3 | Summary（官方申訴警示摘要） | `9714:25942` | 黃色警示卡，width:1260，background:#FFF6E0 |
| 4 | Tab 切換列 | `9714:25868` | x:90, y:402 |
| 5 | 白色底板卡（Tab 內容背景） | `9714:25872` | x:90, y:452，width:1260, height:1156 |
| 6 | Agent / 綜合分析區塊（外層 div） | `9714:25874` | 位於白色底板內，column gap:30px |

---

### 1.2 Node Coverage Ledger

| Node ID | 名稱 | 層級 | 類型 | 狀態 | 備註 |
|---|---|---|---|---|---|
| `9714:25867` | 業務員（整頁框） | 一級 | 結構 | 已確認 | 1440×1698, bg #E1F0FA |
| `9714:25873` | Header | 一級 | 元件(Instance) | 已確認 | Component: Header(6002:11740) |
| `9714:25943` | Basic Info | 一級 | 元件(Instance) | 已確認 | Component: Basic Info(6861:13591) |
| `9714:25942` | Summary | 一級 | 元件(Instance) | 已確認 | Component: Summary(7790:15327) |
| `9714:25868` | Group / Tab / 業務員 | 一級 | 結構 | 已確認 | Tab 切換列容器 |
| `9714:25872` | card（底板） | 一級 | 骨架 | 已確認 | 白色背景卡，IMAGE-SVG，drop-shadow |
| `9714:25874` | Agent（綜合分析 content） | 一級 | 結構 | 已確認 | 外層 div + 內層結構 |
| `I9714:25873;4020:16336` | Nav | 二級 | 結構 | 已確認 | Header 內部 row |
| `I9714:25873;4022:21104` | Nav / logo-set | 二級 | 結構 | 已確認 | Logo + divider + 標題 |
| `I9714:25873;4022:23291` | logo-tmnewa | 三級 | 資源 | 已確認 | width:240, height:44, SVG |
| `I9714:25873;4020:16361` | System（業務員全視圖 文字） | 三級 | 元件 | 已確認 | Title 24, text:"業務員全視圖" |
| `I9714:25873;4020:16363` | Nav / menu | 二級 | 骨架 | 已確認 | opacity:0，此頁不顯示 |
| `I9714:25943;5299:557` | Info / Warning and last update | 二級 | 元件(Instance) | 已確認 | 警告語 + 最後更新時間 |
| `I9714:25943;5299:557;5293:892` | Warning | 三級 | 結構 | 已確認 | "不可外流" + 說明文字 |
| `I9714:25943;5299:557;5293:888` | 最後更新時間 | 三級 | 文字 | 已確認 | Body 16, text:"最後更新時間：2026 年 2 月" |
| `I9714:25943;5299:558` | Basic info card | 二級 | 骨架 | 已確認 | 白色卡, borderRadius:20px, drop-shadow |
| `I9714:25943;5299:559` | Name | 三級 | 元件(Instance) | 已確認 | Component: Name(6439:12478) |
| `I9714:25943;5299:560` | Divider | 三級 | 骨架 | 已確認 | 水平分隔線 |
| `I9714:25943;5299:561` | Status | 三級 | 元件(Instance) | 已確認 | Component: Status(6002:11957), Status=On |
| `I9714:25942;5201:485` | summary（內層 row） | 二級 | 結構 | 已確認 | row, gap:20px |
| `I9714:25942;5201:486` | ic / summary | 二級 | 資源 | 已確認 | 24×24 icon |
| `I9714:25942;5201:487` | Set / Bullet point | 二級 | 結構 | 已確認 | column gap:4px |
| `I9714:25942;5201:488` | Bullet point（申訴筆數） | 三級 | 元件 | 已確認 | text:"客戶提出的官方申訴：共 3 筆 (近三個月：1 筆)" |
| `I9714:25942;5201:491` | Bullet point pack（備註） | 三級 | 元件 | 已確認 | text:"(註記於2019/06/06)", Body 14, #475354 |
| `9714:25869` | Tab — 綜合分析（Active） | 二級 | 元件(Instance) | 已確認 | State=Active_N2, text:"綜合分析" |
| `9714:25870` | Tab — 任意車險（Inactive+icon） | 二級 | 元件(Instance) | 已確認 | State=Inactive_N, has alert icon |
| `9714:25871` | Tab — 個傷（Inactive+icon） | 二級 | 元件(Instance) | 已確認 | State=Inactive, has alert icon |
| `9714:25875` | Title set | 二級 | 結構 | 已確認 | row, space-between, width:1140, pb:20px |
| `9714:25876` | Agent / Title | 三級 | 結構 | 已確認 | text:"整體綜合表現", Title 24, #172122 |
| `9714:25878` | Select set（日期選擇） | 三級 | 元件(Instance) | 已確認 | Type=Date_select; Label:"資料區間為："; dropdown width:340, 預設值:"近六年 (2019/03/01 ~ 2025/02/28)" |
| `I9714:25878;5307:447` | Select dropdown | 四級 | 元件(Instance) | 已確認 | bg #FFFFFF, border #A3D6E0, br:8px, padding:10/10/10/12px; expand icon 24×24 |
| `9714:25879` | Bullet point / 範圍說明 | 二級 | 元件(Instance) | 已確認 | 完整文字見 Section 4.3 |
| `9714:25880` | Metrics（KPI 指標列） | 二級 | 結構 | 已確認 | row, gap:16px, pb:20px |
| `9714:25881` | Metric — 總保費 | 三級 | 元件(Instance) | 已確認 | border #A3D6E0, br:20px; inner bg #EDF7F9, padding:16x20, height:168; 主值:1,742,766 (Title 28) |
| `I9714:25881;6222:375` | Number set（總保費） | 四級 | 結構 | 已確認 | column, gap:4, width:250; label(Title 16) + value(Title 28) |
| `I9714:25881;6222:387` | Des set_multi | 四級 | 結構 | 已確認 | column gap:2; 含 Des set×2（第2個 opacity:0 隱藏） |
| `9714:25882` | Metric — 總理賠金額 | 三級 | 元件(Instance) | 已確認 | 同上結構; 主值:1,389,222 (Title 28), 標籤:"總理賠金額 (元)" |
| `9714:25883` | Frame 227（表格容器） | 二級 | 結構 | 已確認 | column, pb:60px; 總寬 1140px |
| `9714:25884` | Table head | 三級 | 元件(Instance) | 已確認 | bg:#EDF7F9, border:#E3F6FA, br:8px, padding:12px 0; 8欄 |
| `I9714:25884;5309:2355` | 進單險別（表頭第1欄） | 四級 | 結構 | 已確認 | width:192px; placeholder(24×24) + text:"進單險別"(Title 16, #475354) |
| `9714:25885` | Table row — 任意車險（険別父行） | 三級 | 元件(Instance) | 已確認 | Type=険別, Title 18, **有** alert, height:63px; 含 Row + Divider |
| `9714:25886` | Table row — A&H（険別父行） | 三級 | 元件(Instance) | 已確認 | Type=険別, Title 18, **無** alert; 無底線（下方有子行） |
| `9714:25887` | Row — 個傷（子行, 有 alert） | 三級 | 結構 | 已確認 | Title 16 #475354, **有** alert, Body 14 資料, padding:12px 22px 20px |
| `9714:25900` | Table row — 個健（険種_last） | 三級 | 元件(Instance) | 已確認 | Type=険種_last, Title 16, Body 14; 含 Row + Divider（群組結尾） |
| `9714:25901` | Table row — 工程險（険別父行） | 三級 | 元件(Instance) | 已確認 | Type=険別, Title 18, **無** alert; 含 Row + Divider |
| `9714:25902` | Row — 責任保險（自訂父行） | 三級 | 結構 | 已確認 | Title 18 #172122, **無** alert, 非 Instance（自訂 FRAME） |
| `9714:25914` | Row — 公共意外（子行） | 三級 | 結構 | 已確認 | Title 16 #475354, **無** alert, Body 14, padding:12px 22px 20px |
| `9714:25927` | Row — 雇主責任（子行） | 三級 | 結構 | 已確認 | Title 16 #475354, **無** alert, Body 14 |
| `9865:4038` | Row — 產品責任（子行） | 三級 | 結構 | 已確認 | Title 16 #475354, **無** alert, Body 14 |
| `9714:25940` | 分隔線（垂直骨架線） | 三級 | 骨架 | 已確認 | 絕對定位, x:227, y:0, w:0, h:644px, stroke #C4EAE7；位於険別欄右側 |
| `9865:3726` | Table row — 營繕承包人意外（険種_last） | 三級 | 元件(Instance) | 已確認 | Type=険種_last, Title 16 #475354; 含 Row + Divider（群組結尾） |

---

## 2. 元件拆分建議 ← 工程師重點審閱

| 元件名稱 | Figma Node ID | 層級 | 可重用性 | 說明 |
|---|---|---|---|---|
| `AppHeader` | `9714:25873` (ComponentSet: 6002:11740) | Base | 跨頁 | 含 TMNEWA logo + 系統名稱。Style=No-menu（此頁隱藏選單）。Props: `systemName: string` |
| `TabGroup` | `9714:25868` | Feature | 頁面專屬 | 業務員頁 Tab 切換器。Props: `tabs: TabItem[]`, `activeTab: string`；Emit: `tab-change` |
| `TabItem` | `9714:25869~25871` (ComponentSet: 6002:11422) | Base | 跨頁 | 單一 Tab。State: Active_N2 / Inactive_N / Inactive。Props: `label`, `state`, `showAlert` |
| `BasicInfoSection` | `9714:25943` (ComponentSet: 6861:13591) | Feature | 頁面專屬 | 業務員資訊卡（含警告條、基本資訊卡）。Props: `agentInfo: AgentInfo` |
| `WarningInfoBar` | `I9714:25943;5299:557` (ComponentSet: 6002:11924) | Base | 跨頁 | 機密警告 + 最後更新時間。Props: `lastUpdated: string` |
| `BasicInfoCard` | `I9714:25943;5299:558` | Feature | 頁面專屬 | 白色卡：NameBlock + Divider + StatusBlock |
| `AgentNameBlock` | `I9714:25943;5299:559` (ComponentSet: 6439:12478) | Base | 跨頁 | 業務員姓名 + 公司名稱 + 管理人。Props: `agentName`, `agencyName`, `manager` |
| `AgentStatusBlock` | `I9714:25943;5299:561` (ComponentSet: 6002:11957) | Base | 跨頁 | 登錄年份 + 近三個月進單數 + status icon。Props: `registeredYear`, `recentOrders`, `status: 'On' \| 'Off'` |
| `SummaryAlertCard` | `9714:25942` (ComponentSet: 7790:15327) | Feature | 跨頁（業務員頁） | 黃底申訴警示卡。Props: `items: SummaryItem[]` |
| `MetricCard` | `9714:25881/25882` (ComponentSet: 9714:24869) | Base | 跨頁 | KPI 指標卡。Props: `mainLabel`, `mainValue`, `subLabel`, `subValue`, `percentage` |
| `DateSelectSet` | `9714:25878` (ComponentSet: 8677:15841) | Base | 跨頁 | 日期區間選擇器。Props: `label: string`, `rangeName: string`, `startDate: string`, `endDate: string`；Emit: `change` |
| `DateSelectDropdown` | `I9714:25878;5307:447` (ComponentSet: 7980:15619) | Base | 跨頁 | Select 元件 State=Default/Type=Combo。bg #FFFFFF, border #A3D6E0, br:8, width:340px |
| `BulletPointScope` | `9714:25879` (ComponentSet: 9865:3744) | Base | 跨頁 | 分析範圍說明條列。Props: `title: string`, `mainText: string`, `excludeText: string`, `tailText: string` |
| `AnalysisTable` | `9714:25883` | Feature | 頁面專屬 | 險別分析表格，含 Table head + 多層 Table rows |
| `AnalysisTableHead` | `9714:25884` (ComponentSet: 10460:5139) | Base | 跨頁 | 表格 header。bg:#EDF7F9, br:8px。Props: `columns: ColumnDef[]` |
| `AnalysisTableParentRow` | `9714:25885/25886/25901` (ComponentSet: 10460:4871, Type=険別) | Base | 跨頁 | 父類別行, Title 18 #172122, height:63px fixed。Props: `rowData`, `showAlert: boolean` |
| `AnalysisTableSubRow` | `9714:25887/25914/25927/9865:4038` (自訂 FRAME) | Base | 頁面專屬 | 子類別行, Title 16 #475354, Body 14 資料, 縮排。Props: `rowData`, `showAlert: boolean` |
| `AnalysisTableLastSubRow` | `9714:25900/9865:3726` (ComponentSet: 10460:4871, Type=険種_last) | Base | 跨頁 | 子類別末行（帶群組底線）。Props: `rowData` |
| `ComprehensiveAnalysisTab` | `9714:25874` (外層 div 包裹) | Container | 頁面專屬 | 綜合分析 Tab 的容器。整合標題、日期選擇、範圍說明、Metrics、分析表格。接收 props/data |
| `PlaceholderTab` | — | Feature | 頁面專屬 | 任意車險 / 個傷 Tab 空白佔位，僅顯示小標題文字。Props: `tabTitle: string` |
| `AgentAnalysisPage` | `9714:25867` | Container | 頁面 | 整個業務員頁容器。管理 Tab 狀態、資料請求 |

> 拆分原則：Container 負責資料與邏輯，Presentational 只接收 props。

---

## 3. 互動行為說明 ← 工程師重點審閱

| 互動點 | 觸發條件 | 預期行為 | 對應 Figma Node |
|---|---|---|---|
| 點擊 Tab（綜合分析 / 任意車險 / 個傷） | 點擊 Tab 元件 | 切換 active tab，更新 tab indicator（藍色 #16B7D9），顯示對應 content | `9714:25868` |
| Tab Active 樣式 | State=Active_N2 | 白底 #FFFFFF + 藍色文字 #05A0C0 + 底部 indicator 線 | `9714:25869` |
| Tab Inactive 樣式 | State=Inactive / Inactive_N | 灰底 #E7E7E7 + 灰色文字 #ADADAD | `9714:25870`, `9714:25871` |
| Tab 風險警示 icon | Inactive_N / Inactive + 有風險 | 顯示 `ic/alert_risk` icon（24×24）於 tab 文字右側 | `9714:25870`, `9714:25871` |
| 選擇日期區間 | 點擊 Date Select dropdown | 展開選項列表（近六年 / 近五年 / 近三年）；預設值「近六年 (2019/03/01 ~ 2025/02/28)」，選擇後更新表格 | `9714:25878` |
| 選擇後顯示日期範圍 | 選擇日期區間後 | dropdown 顯示格式：「{區間名稱} ({startDate} ~ {endDate})」 | `I9714:25878;5307:447` |
| 表格行（靜態展開，無收合） | — | 表格**無展開/收合**互動，父行與子行**恆常顯示**；子行縮排以 placeholder(24px) 做視覺區分 | `9714:25883` |
| 風險警示 icon（表格內） | `ic/alert_risk` 顯示 | **無互動**，純視覺標示，不可點擊，無 tooltip 或跳轉 | `9714:25887` |
| Summary 警示卡 | 恆顯示（機密資料） | 固定顯示，無交互行為，純警示展示 | `9714:25943;5299:557` |

---

## 4. 欄位與資料型別定義 ← 工程師重點審閱

### 4.1 業務員基本資訊（BasicInfoSection）

| UI 文字 | 推測欄位名稱 | 推測型別 | 範例值 | 待確認 |
|---|---|---|---|---|
| 業務員全視圖（系統名稱） | `systemTitle` | `string` | "業務員全視圖" | — |
| 業務員姓名 | `agentName` | `string` | [Open Question] | Agent name 區塊文字未在深層節點中顯示 |
| 公司 / Agency 名稱 | `agencyName` | `string` | [Open Question] | Agency name 區塊文字未顯示 |
| 管理人 | `managerInfo` | `string` | "940171 張巧勳" | 包含工號 + 姓名 |
| 登錄年份 | `registeredYear` | `number` | 2018 | |
| 近三個月進單數 | `recentOrderCount` | `number` | 10 | "最近三個月有進單 10 張" |
| 業務員狀態 | `status` | `'On' \| 'Off'` | "On" | Status icon green=On |
| 最後更新時間 | `lastUpdatedAt` | `string` | "2026 年 2 月" | [Assumption] 可能是 ISO date，前端格式化 |

### 4.2 官方申訴摘要（SummaryAlertCard）

| UI 文字 | 推測欄位名稱 | 推測型別 | 範例值 | 待確認 |
|---|---|---|---|---|
| 官方申訴總筆數 | `complaintTotal` | `number` | 3 | |
| 近三個月申訴筆數 | `complaintRecentCount` | `number` | 1 | |
| 備註日期 | `noteDate` | `string` | "2019/06/06" | |
| 備註文字 | 內嵌 bullet point | `string` | [Open Question] | 固定文字或動態？ |

### 4.3 BulletPointScope 完整文字（範圍說明）

| 層次 | 節點 ID | 文字內容 | 字型 |
|---|---|---|---|
| 標籤行 | `I9714:25879;6222:821` | 「分析範圍說明：」 | Title 16 (Bold), #172122 |
| 正文（段落1） | `I9714:25879;6222:827` | 「目前已納入分析的險別包括：任意車險、A&H」 | Body 16, #172122 |
| 括號（Bold） | `I9714:25879;6222:828` | 「(不包含疫苗險、團險、旅平險)」 | Title 16 (Bold), #172122 |
| 正文（段落2） | `I9714:25879;6222:831` | 「、住火、商火、工程險、公共意外、雇主責任、產品責任、營繕承包人意外。」 | Body 16, #172122 |

> 組合後完整文字：分析範圍說明：目前已納入分析的險別包括：任意車險、A&H **(不包含疫苗險、團險、旅平險)**、住火、商火、工程險、公共意外、雇主責任、產品責任、營繕承包人意外。

### 4.4 日期選擇器（DateSelectSet）

| UI 文字 | 推測欄位名稱 | 推測型別 | 說明 |
|---|---|---|---|
| 資料區間為 | `dateRangeLabel` | `string` | Label 文字，固定顯示 |
| 區間名稱 | `rangeName` | `string` | 如 "近六年" |
| 開始日期 | `startDate` | `string` | 如 "2019/03/01" |
| 結束日期 | `endDate` | `string` | 如 "2025/02/28" |
| dropdown 顯示 | `displayValue` | `string` | 前端組裝：`"{rangeName} ({startDate} ~ {endDate})"` |

> 可選選項列表（固定 3 項）：近六年 / 近五年 / 近三年

### 4.5 KPI 指標卡（MetricCard × 2）

**視覺結構：**
- 外框：`border: 1px #A3D6E0`, `border-radius: 20px`
- 內底板：bg `#EDF7F9`, padding `16px 20px`, height `168px`（固定）
- 內容區寬度：`250px`

| UI 文字 | 推測欄位名稱 | 推測型別 | 範例值 | 字型 |
|---|---|---|---|---|
| 整體指標名稱（標籤） | `mainLabel` | `string` | "總保費 (元)" | Title 16, #172122 |
| 整體指標數值 | `mainValue` | `number` | 1,742,766 | **Title 28**, #172122 |
| 子指標名稱 | `subLabel` | `string` | "簽單損率" | Body 16, #172122 |
| 子指標件數 | `subCount` | `number` | 187 | **已確認：理賠件數** |
| 子指標百分比 | `percentage` | `string` | "142.9%" | [Assumption] Des set 內 |

> [Assumption] Des set_multi 的第2個 Des set opacity:0 → 此頁面中隱藏。推測當有多項子指標時才顯示。

### 4.6 分析表格（AnalysisTable）

**表頭欄位及欄寬（容器寬:1140px, padding:0 22px, gap:28px）：**

| 欄位顯示名稱 | 推測 key | 推測型別 | 欄寬 | 文字色 |
|---|---|---|---|---|
| 進單險別 | `category` | `string` | 192px | Title 16, #475354 |
| 保費 | `premium` | `number` | 92px | Title 16, #475354 |
| 理賠金額 | `claimAmount` | `number` | 92px | Title 16, #475354 |
| 簽單損率 | `lossRatio` | `string` (含 %) | 70px | Title 16, #475354 |
| 保單數 | `policyCount` | `number` | 92px | Title 16, #475354 |
| 客戶數 | `customerCount` | `number` | 92px | Title 16, #475354 |
| 賠案數 | `claimCount` | `number` | 92px | Title 16, #475354 |
| 客戶出險率 | `claimRate` | `string` (含 %) | 80px | Title 16, #475354 |

> 表頭背景：`#EDF7F9`，border：`#E3F6FA 1px`，border-radius：`8px`，padding：`12px 0`
> 垂直骨架線 `9714:25940`：絕對定位 x:227，高度 644px，stroke `#C4EAE7`（對齊「進單險別」欄右側）

**資料行文字色規則：**
- 父行（険別）名稱 + 非零數據：`#172122`（主色）
- 子行名稱 + 所有數據：`#475354`（次要色）
- 行內底線：`#C4EAE7 1px`

**完整可見 Row Inventory（表格所有可見行）：**

> 行階層：「父行」= Type=険別（Title 18, #172122, height:63px fixed）；「子行」= 自訂FRAME（Title 16, #475354, Body 14 資料, padding:12/22/20px）；「子末行」= Type=険種_last（帶群組底線）

| Row | Node ID | 行類型 | 進單險別 | 保費 | 理賠金額 | 損率 | 保單數 | 客戶數 | 賠案數 | 出險率 | Alert | 備註 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `9714:25885` | 父行(Type=険別) | **任意車險** | 1,114,665 | 1,165,918 | 105.0% | 101 | 41 | 17 | 22.0% | ✅ | Title 18, Body 16, 底線 |
| 2 | `9714:25886` | 父行(Type=険別) | **A&H** | 577,560 | 199,924 | 34.6% | 180 | 43 | 9 | 20.9% | ✗ | Title 18, Body 16; 無底線（下方有子行） |
| 3 | `9714:25887` | 子行(自訂FRAME) | 個傷 | 576,258 | 199,924⚠ | 34.7%⚠ | 174⚠ | 42 | 9 | 21.4% | ✅ | Title 16, Body 14, 縮排 |
| 4 | `9714:25900` | 子末行(型=険種_last) | 個健 | 1,302 | 0 | 0% | 6 | 1 | 0 | 0% | ✗ | Body 14; 群組底線(A&H群結尾) |
| 5 | `9714:25901` | 父行(Type=険別) | **工程險** | 13,020 | 0 | 0% | 5 | 5 | 0 | 0% | ✗ | Title 18, Body 16, 底線 |
| 6 | `9714:25902` | 父行(自訂FRAME) | 責任保險 | 37,521 | 23,380 | 62.3% | 21 | 19 | 2 | 10.5% | ✗ | Title 18, 非 Instance |
| 7 | `9714:25914` | 子行(自訂FRAME) | 公共意外 | 6,000 | 0⚠ | 0%⚠ | 3⚠ | 3 | 0 | 0% | ✗ | Title 16, Body 14 |
| 8 | `9714:25927` | 子行(自訂FRAME) | 雇主責任 | 21,521 | 23,380⚠ | 108.6%⚠ | 14⚠ | 12 | 2 | 16.7% | ✗ | Title 16, Body 14 |
| 9 | `9865:4038` | 子行(自訂FRAME) | 產品責任 | 10,000 | 0⚠ | 0%⚠ | 4⚠ | 4 | 0 | 0% | ✗ | Title 16, Body 14 |
| — | `9714:25940` | 骨架(垂直線) | — | — | — | — | — | — | — | — | — | 絕對定位, x:227, h:644px |
| 10 | `9865:3726` | 子末行(型=険種_last) | 營繕承包人意外 | 10,000 | 0⚠ | 0%⚠ | 4⚠ | 4 | 0 | 0% | ✗ | Body 14; 群組底線(責任保險群結尾) |

> ⚠：子行（例如 個傷、個健、公共意外等）所有欄位一律套用 `#475354`（子行統一色），與零值無關。父行保費欄一律 `#172122`（主色）。已確認：非零值條件弱化，而是子行固定樣式。

**資料分組結構（視覺層級推導）：**
```
任意車險 ─── 父行（有 alert）+ 底線
A&H ─────── 父行（無 alert，無底線）
  └── 個傷 ─── 子行（有 alert）
  └── 個健 ─── 子末行 ══ 群組分隔線
工程險 ──── 父行（無 alert）+ 底線
責任保險 ── 自訂父行
  └── 公共意外 ── 子行
  └── 雇主責任 ── 子行
  └── 產品責任 ── 子行
  └── 營繕承包人意外 ── 子末行 ══ 群組分隔線
```

---

## 5. 視覺規格摘要

### 色彩

| 用途 | 色碼 |
|---|---|
| 頁面背景 | `#E1F0FA` |
| 白色卡片 / Header / Tab Active | `#FFFFFF` |
| 黃色警示背景（Summary） | `#FFF6E0` |
| Tab 指示線 / Active 文字 | `#16B7D9` / `#05A0C0` |
| Tab 非選中背景 | `#E7E7E7` |
| Tab 非選中文字 | `#ADADAD` |
| 主要文字色（標題、父行資料主值） | `#172122` |
| 次要文字色（表頭文字、子行資料、零值弱化） | `#475354` |
| Metric 卡片內底板 | `#EDF7F9` |
| 表格 header 底板 | `#EDF7F9` |
| 表格 header 邊框 | `#E3F6FA` |
| 卡片外框 / Select 框線 / Metric 外框 | `#A3D6E0` |
| 行內底線 / 垂直骨架線 | `#C4EAE7` |
| Alert icon 紅色符號 | `#E03636` |

### 字型

| Style | Font | Weight | Size | Line-height | 使用位置 |
|---|---|---|---|---|---|
| Title 28 | Noto Sans TC | 500 | 28px | 1.5em | Metric 主數值 |
| Title 24 | Noto Sans TC | 500 | 24px | 1.5em | 區塊標題「整體綜合表現」、Header 系統名稱 |
| Title 20 | Noto Sans TC | 500 | 20px | 1.5em | 機密警告「不可外流」 |
| Title 18 | Noto Sans TC | 500 | 18px | 1.5em | 表格父行（険別）名稱、Tab 標籤 |
| Title 16 | Noto Sans TC | 500 | 16px | 1.5em | 表格子行名稱、表頭欄位、範圍說明標籤、括號文字 |
| Body 16 | Noto Sans TC | 400 | 16px | 1.5em | 表格父行資料值、日期選擇、說明正文 |
| Body 14 | Noto Sans TC | 400 | 14px | 1.5em | 表格子行資料值 |

### 陰影

| 元件 | Shadow |
|---|---|
| Header | `0px 6px 10px 0px rgba(23,33,34,0.03)` |
| 卡片 / Tab / Metric | `0px 6px 16px 0px rgba(23,33,34,0.04)` |

### 主要間距

| 區塊 | 值 |
|---|---|
| 頁面左右 padding | 90px |
| 內容區寬度（1440 - 90×2） | 1260px |
| Header gap（logo 至選單） | 70px |
| Agent 區塊 column gap | 30px |
| Tab group row gap | 12px |
| Tab 內部 padding | `11px 24px` |

---

## 6. 待定數據模型清單

| UI 元件位置 | 推測欄位或結構 | 推測型別 | 備註 |
|---|---|---|---|
| BasicInfoSection | `AgentInfo` | object | 含 agentName, agencyName, managerInfo, registeredYear, recentOrderCount, status, lastUpdatedAt |
| SummaryAlertCard | `ComplaintSummary` | object | complaintTotal, complaintRecentCount, items[] |
| MetricCard × 2 | `MetricData[]` | array | { mainLabel, mainValue(number), subLabel, subCount(number), percentage(string) } |
| DateSelectSet | `DateRangeOption` | object | { rangeName, startDate, endDate } |
| DateSelectSet 選項列表 | `DateRangeOptions[]` | array | **已確認：固定 3 項** `['近六年', '近五年', '近三年']`，前端 hardcode 或後端回傳 |
| BulletPointScope | `ScopeDescription` | object | { title, mainText1, excludeText(bold), mainText2 } 或 plain `string` |
| AnalysisTable | `InsuranceGroup[]` | array | 以父類別分組，每組含子行列表 |
| InsuranceGroup | — | object | { groupName, hasAlert, premium, claimAmount, lossRatio, policyCount, customerCount, claimCount, claimRate, items: InsuranceItem[] } |
| InsuranceItem | — | object | { name, hasAlert, premium, claimAmount, lossRatio, policyCount, customerCount, claimCount, claimRate, isLastInGroup: boolean } |

---

## 7. 開放問題與假設 ← 工程師與 api-enrichment 的協商點

### Assumptions（推測，由 Figma 設計稿推導）

- [Assumption] `9714:25872`（白色底板）是純視覺背景骨架，不需對應 Vue 元件，可用 CSS 背景實現
- [Assumption] Tab 切換透過 `v-if` 或 `v-show` 控制 content 顯示，不另起路由
- [Assumption] `lastUpdatedAt` 原始格式為 ISO date string，前端格式化為「2026 年 2 月」形式
- [Assumption] 損率 >100% 可能有特殊文字顏色標示（例如紅色），Figma 未明示，待確認
- [Assumption] 表格採靜態載入一次，不支援前端分頁
- [Assumption] Tab 的 `showAlert`（風險 icon）由後端資料決定，非前端計算
- [Assumption] `Status=On` → 顯示綠色 icon；`Status=Off` → 可能灰色或不顯示（Figma 只看到 On 狀態）
- [Assumption] Header style=No-menu 為此頁固定樣式，若是 Shell layout，menu 由路由控制
- [Assumption] 表格父行與子行恒顯示，無展開/收合機制（Figma 確認靜態結構）
- [Assumption] `ic/alert_risk` 為純視覺元件，不綁定任何 click handler
- [Assumption] 任意車險與個傷 Tab 使用 `PlaceholderTab` 元件佔位，展示小標題文字，待後續覧格補充
- [Assumption] Loading / Error / Empty 狀態不在本次開發範圍內

### Open Questions（需要人類決策）

- ~~[已解決] Row 1 / Row 2 險別名稱~~ → Row1=任意車險（有alert），Row2=A&H（無alert）
- ~~[已解決] Row 4 的險種名稱~~ → 個健（A&H 群末行）
- ~~[已解決] Row 10 的名稱~~ → 營繕承包人意外（責任保險群末行）
- ~~[已解決] 表格欄位標題色~~ → #475354；分隔線 → #C4EAE7；表頭底板 → #EDF7F9
- ~~[已解決] BulletPoint 完整文字~~ → 見 Section 4.3
- ~~[已解決 Q1] 表格父行是否支援展開/收合互動？~~ → **無收合，父行+子行恒顯示靜態展開**
- ~~[已解決 Q2] `ic/alert_risk` 點擊行為？~~ → **無任何互動，純視覺標示**
- ~~[已解決 Q3] 日期選擇選項列表？~~ → **近六年 / 近五年 / 近三年**（固定 3 選項）
- ~~[已解決 Q4] Metric 187 件數含義？~~ → **理賠件數**
- ~~[已解決 Q5] 個健保費「1.302」格式錯誤？~~ → **確認為資料格式錯誤，應為 1,302**
- ~~[已解決 Q6] 子行資料欄 #475354 樣式？~~ → **子行固定樣式**（A&H 等父行之下子項目，#475354 為固定色︌非零值條件）
- ~~[已解決 Q7] Loading/Error/Empty 狀態？~~ → **不在本次範圍**
- ~~[已解決 Q8] 任意車險/個傷 Tab 結構？~~ → **結構不同，本次僅空白小標題佔位**
- ~~[已解決] `Nav / menu`（opacity:0）~~ → 本頁設計隐藏，其他頁面由路由控制

---

> **本规格所有 Open Questions 已完成決策（共 8 項）。主框架 + 綱合分析 Tab 规格已完整。**
> 任意車險 Tab、個傷 Tab 待後續提供 Figma 節點後補充。
