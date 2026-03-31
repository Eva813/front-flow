# Draft Spec：業務員全視圖 — 綜合分析頁

> 產生時間：2026-03-31  
> 狀態：Draft — 待工程師審閱  
> Figma：https://www.figma.com/design/Jkuzai47DvXzPZlh6hUkNM/%F0%9F%9F%A2-Final-UI?node-id=9714-25867  
> 說明：本規格基於 Figma 設計稿推導。API 對應與資料結構將由後續 api-enrichment Skill 補充。

---

## 1. 功能範圍與流程摘要

**功能目標**：提供內部使用者（管理人）以「業務員」為視角的綜合分析全視圖，呈現業務員基本資訊、整體績效指標（保費/理賠）、各險別明細表格，以及風險摘要。

**涵蓋頁面**：
- 業務員全視圖 — 綜合分析 Tab（本次 spec 範圍）

**明確排除**：
- 「任意車險」Tab 獨立頁面（另有獨立 spec）
- 「個傷」Tab 獨立頁面（另有獨立 spec）
- Header 選單中的「我的名單」、「查詢企業」導航目標頁
- 下拉選單（Select）展開後的選項列表 UI

**主要流程**：進入頁面 → 顯示業務員基本資訊 → 顯示風險摘要 → Tab 預設選中「綜合分析」→ 呈現整體綜合表現（含指標卡片 + 險別明細表格）

> 實際的 API 端點、Request/Response 格式與錯誤碼處理將由 api-enrichment Skill 補充。

---

### 1.1 頁面結構順序

| 顯示順序 | 元件 / 區塊名稱 | Figma Node ID | 備註 |
|---|---|---|---|
| 1 | Header（導覽列） | 9714:25873 | 固定頂部，含 logo「業務員全視圖」，Style=No-menu（選單 opacity:0） |
| 2 | Basic Info（業務員基本資訊） | 9714:25943 | 含警語、姓名/編號、經代公司、管理人、狀態 |
| 3 | Summary（風險摘要） | 9714:25942 | 黃底警示區塊，含官方申訴筆數、特殊註記 |
| 4 | Tab Group（分頁切換） | 9714:25868 | 三個 Tab：綜合分析(Active)、任意車險(Inactive+alert)、個傷(Inactive+alert) |
| 5 | Background Card（白底卡片背景） | 9714:25872 | Tab 內容區域的白底 card，帶 Drop Shadow |
| 6 | Agent — Title Set（標題與日期選擇器） | 9714:25875 | 標題「整體綜合表現」+ 資料區間下拉選擇器 |
| 7 | Agent — 範圍說明 Bullet Point | 9714:25879 | 分析範圍說明文字 |
| 8 | Agent — Metrics（指標卡片組） | 9714:25880 | 兩張指標卡片：總保費、總理賠金額 |
| 9 | Agent — Table（險別明細表格） | 9714:25883 | 含 Table Head + 多層 Row（險別→險種子項） |

---

### 1.2 Node Coverage Ledger

| Node ID | 名稱 | 層級 | 類型 | 狀態 | 備註 |
|---|---|---|---|---|---|
| 9714:25867 | 業務員 | 一級 | 結構 (Root FRAME) | 已確認 | 頁面根節點，1440×1698 |
| 9714:25873 | Header | 一級 | 元件 (INSTANCE) | 已確認 | Style=No-menu，含 logo + 系統名稱 |
| I9714:25873;4022:23291 | logo-tmnewa | 關鍵二級 | 資源 (INSTANCE/SVG) | 已確認 | 公司 logo 圖片 |
| I9714:25873;4020:16361 | System 文字 | 關鍵二級 | 元件 (TEXT) | 已確認 | 「業務員全視圖」Title 24 |
| I9714:25873;4020:16362 | 分隔線 | 關鍵二級 | 骨架 (LINE) | 已確認 | logo 與系統名稱之間的分隔線 |
| I9714:25873;4020:16363 | Nav / menu | 關鍵二級 | 結構 (FRAME) | 已確認 | opacity:0，含「我的名單」「查詢企業」 |
| 9714:25943 | Basic Info | 一級 | 元件 (INSTANCE) | 已確認 | System=業務員, 主體=自然人 |
| I9714:25943;5299:557 | Info / Warning and last update | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 「不可外流」警語 + 最後更新時間 |
| I9714:25943;5299:558 | Basic info card | 關鍵二級 | 結構 (FRAME) | 已確認 | 白底圓角卡片，含名稱/狀態 |
| I9714:25943;5299:559 | Name | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 業務員姓名+編號+經代公司+管理人 |
| I9714:25943;5299:560 | Divider | 關鍵二級 | 骨架 (LINE) | 已確認 | Name 與 Status 之間的分隔線 |
| I9714:25943;5299:561 | Status | 關鍵二級 | 元件 (INSTANCE) | 已確認 | Status=On，含登錄年+近期進單數 |
| 9714:25942 | Summary | 一級 | 元件 (INSTANCE) | 已確認 | 頁面=業務員, 情境=完整 |
| I9714:25942;5201:486 | ic / summary | 關鍵二級 | 資源 (SVG icon) | 已確認 | 摘要圖示 |
| I9714:25942;5201:487 | Set / Bullet point | 關鍵二級 | 結構 (FRAME) | 已確認 | 官方申訴 + 特殊註記 bullet points |
| 9714:25868 | Group / Tab / 業務員 | 一級 | 結構 (FRAME) | 已確認 | Tab 群組容器 |
| 9714:25869 | Tab — 綜合分析 | 關鍵二級 | 元件 (INSTANCE) | 已確認 | State=Active_N2，含 tab-indicator |
| 9714:25870 | Tab — 任意車險 | 關鍵二級 | 元件 (INSTANCE) | 已確認 | State=Inactive_N，含 alert icon |
| 9714:25871 | Tab — 個傷 | 關鍵二級 | 元件 (INSTANCE) | 已確認 | State=Inactive，含 alert icon |
| 9714:25872 | card (背景) | 一級 | 骨架 (SVG) | 已確認 | 白底 card 背景，Drop Shadow |
| 9714:25874 | Agent (內容主體) | 一級 | 結構 (FRAME) | 已確認 | 綜合分析全部內容容器 |
| 9714:25875 | Title set | 關鍵二級 | 結構 (FRAME) | 已確認 | 標題列（標題+日期選擇器） |
| 9714:25877 | title 文字 | 關鍵二級 | 元件 (TEXT) | 已確認 | 「整體綜合表現」Title 24 |
| 9714:25878 | Select set (日期選擇器) | 關鍵二級 | 元件 (INSTANCE) | 已確認 | Type=Date_select，「資料區間為：近六年 (2019/03/01 ~ 2025/02/28)」 |
| 9714:25879 | Bullet point / 範圍說明 | 關鍵二級 | 元件 (INSTANCE) | 已確認 | System=業務員3.0, Type=範圍說明 |
| 9714:25880 | Metrics | 關鍵二級 | 結構 (FRAME) | 已確認 | 兩張指標卡片容器 |
| 9714:25881 | Metric — 總保費 | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 1,742,766；保單數 307 張 |
| 9714:25882 | Metric — 總理賠金額 | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 1,389,222；賠案數 28 張 |
| 9714:25883 | Frame 227 (表格區) | 關鍵二級 | 結構 (FRAME) | 已確認 | 表格容器，含 padding-bottom: 60px |
| 9714:25884 | Table head | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 8 欄表頭 |
| 9714:25885 | Table row — 任意車險 | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 險別 row，含 alert icon |
| 9714:25886 | Table row — A&H | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 險別 row |
| 9714:25887 | Row — 個傷 (A&H 子項) | 關鍵二級 | 結構 (FRAME) | 已確認 | 險種 sub-row，含 alert icon |
| 9714:25900 | Table row — 個健 (A&H 子項 last) | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 險種_last type |
| 9714:25901 | Table row — 工程險 | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 險別 row |
| 9714:25902 | Row — 責任保險 | 關鍵二級 | 結構 (FRAME) | 已確認 | 險別 row（直接 FRAME） |
| 9714:25914 | Row — 公共意外 | 關鍵二級 | 結構 (FRAME) | 已確認 | 責任保險子項 |
| 9714:25927 | Row — 雇主責任 | 關鍵二級 | 結構 (FRAME) | 已確認 | 責任保險子項 |
| 9865:4038 | Row — 產品責任 | 關鍵二級 | 結構 (FRAME) | 已確認 | 責任保險子項 |
| 9714:25940 | 分隔線（表格內垂直） | 關鍵二級 | 骨架 (SVG) | 已確認 | position:absolute，x:227，高度 644，分隔險別欄與數據欄 |
| 9865:3726 | Table row — 營繕承包人意外 (last) | 關鍵二級 | 元件 (INSTANCE) | 已確認 | 險種_last，責任保險最後子項 |

---

## 2. 元件拆分建議  ← 工程師重點審閱

| 元件名稱 | Figma Node ID | 層級 | 可重用性 | 說明 |
|---|---|---|---|---|
| AgentAnalysisPage | 9714:25867 | Container | 頁面專屬 | 業務員綜合分析頁面容器，管理所有子區塊資料載入與狀態 |
| AppHeader | 9714:25873 | Base | 跨頁 | 頂部導覽列，props: systemTitle, logoSrc, menuItems |
| BasicInfoCard | 9714:25943 | Feature | 跨頁（業務員系統共用） | 業務員基本資訊卡片，含警語、姓名、狀態 |
| WarningBanner | I9714:25943;5299:557 | Base | 跨頁 | 「不可外流」警語 + 最後更新時間 |
| AgentNameBlock | I9714:25943;5299:559 | Base | 跨頁 | 業務員姓名/編號/經代公司/管理人 |
| AgentStatusBadge | I9714:25943;5299:561 | Base | 跨頁 | 登錄年份 + 近期進單數 + 狀態 icon |
| SummaryAlert | 9714:25942 | Feature | 跨頁（業務員系統共用） | 黃底摘要警示區塊，含 bullet point list |
| TabGroup | 9714:25868 | Base | 跨頁 | Tab 切換列，props: tabs[], activeTab, onTabChange |
| TabItem | 9714:25869 | Base | 跨頁 | 單個 Tab 項目，props: label, isActive, hasAlert |
| AnalysisContent | 9714:25874 | Feature | 頁面專屬 | 綜合分析 Tab 的內容容器 |
| TitleWithDateSelect | 9714:25875 | Feature | 跨頁（分析頁共用） | 標題 + 日期區間選擇器 |
| DateRangeSelect | 9714:25878 | Base | 跨頁 | 日期區間 combo select，props: label, value, options |
| ScopeDescription | 9714:25879 | Feature | 跨頁（分析頁共用） | 分析範圍說明 bullet points |
| MetricCardGroup | 9714:25880 | Feature | 跨頁（分析頁共用） | 指標卡片群組容器 |
| MetricCard | 9714:25881 | Base | 跨頁 | 單張指標卡片，props: title, value, details[] |
| AnalysisTable | 9714:25883 | Feature | 頁面專屬 | 險別明細表格區域容器 |
| AnalysisTableHead | 9714:25884 | Base | 跨頁（分析頁共用） | 表頭列，8 欄固定 |
| AnalysisTableRow | 9714:25885 | Base | 跨頁（分析頁共用） | 險別主 row，props: category, values, hasAlert, subRows[] |
| AnalysisTableSubRow | 9714:25887 | Base | 跨頁（分析頁共用） | 險種子 row，props: name, values, isLast |

> 拆分原則：Container 負責資料與邏輯，Presentational 只接收 props。

---

## 3. 互動行為說明  ← 工程師重點審閱

| 互動點 | 觸發條件 | 預期行為 | 對應 Figma Frame |
|---|---|---|---|
| 進入頁面 | 路由 mounted | 載入業務員基本資訊、Summary、指標與表格資料 | 9714:25867 |
| Tab 切換 | 點擊 Tab 項目 | 切換到對應 Tab 的內容區域；Active Tab 樣式 + indicator 顯示 | 9714:25868 |
| Tab「任意車險」 | 點擊任意車險 Tab | 同頁內容替換，切換至任意車險分析內容 | 9714:25870 |
| Tab「個傷」 | 點擊個傷 Tab | 同頁內容替換，切換至個傷分析內容 | 9714:25871 |
| Tab alert icon | Tab 具有 alert 狀態時 | Tab 文字旁顯示紅色 alert icon（ic/alert_risk） | 9714:25870, 9714:25871 |
| 日期區間切換 | 點擊 DateRangeSelect 下拉 | [Open Question] 展開選項列表，選擇後重新載入資料 | 9714:25878 |
| 表格 alert icon | props 控制 | 險別名稱旁顯示紅色 alert icon（純 UI，由 props hasAlert 控制顯隱） | 9714:25885 |
| Header 選單 | Figma 未設計 | 本次不實作 | I9714:25873;4020:16363 |

---

## 4. 欄位與資料型別定義  ← 工程師重點審閱

### 4.1 Basic Info 區塊 — 推測的欄位（待 API 確認）

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| 警語文字 | warning_text | string | 「不可外流」| [Assumption] 是否為固定文案 |
| 警語說明 | warning_description | string | 「本分析資料僅供內部使用…」 | [Assumption] 是否為固定文案 |
| 最後更新時間 | last_updated | string | 「2026 年 2 月」 | [Assumption] 格式：YYYY 年 MM 月 |
| 業務員姓名 | agent_name | string | 「徐*雯」（已脫敏） | [Assumption] 回傳已脫敏字串 |
| 業務員編號 | agent_no | string | 「E**C738183」（已脫敏） | [Assumption] 回傳已脫敏字串 |
| 經代公司名稱 | company_name | string | 「威*保經」 | [Assumption] 回傳已脫敏字串 |
| 經代公司編號 | company_no | string | 「BA1296****」 | [Assumption] 回傳已脫敏字串 |
| 管理人 | manager | string | 「管理人：940171  張巧勳」 | [Assumption] 是否拆分為 manager_id + manager_name |
| 登錄年份 | registered_year | number | 2018 | [Assumption] 型別 |
| 近期進單數 | recent_policy_count | number | 10 | [Assumption] 「最近三個月有進單 N 張」 |
| 狀態 | status | enum | On / Off | [Assumption] Status=On 代表活躍 |

### 4.2 Summary 區塊 — 推測的欄位（待 API 確認）

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| 官方申訴筆數 | complaint_total | number | 共 3 筆 | [Assumption] 型別 |
| 官方申訴近三個月 | complaint_recent | number | 1 筆 | [Assumption] 「近三個月」固定或可配置 |
| 特殊註記文字 | special_notes | Array\<object\> | 多筆註記 | [Assumption] 陣列結構 |
| 註記日期 | note_date | string | 「2019/06/06」 | [Assumption] 格式 YYYY/MM/DD |

### 4.3 Metric 卡片 — 推測的欄位（待 API 確認）

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| 總保費 | total_premium | number | 1,742,766 | [Assumption] 單位：元，需千分位格式化 |
| 保單數 | policy_count | number | 307 | [Assumption] 顯示為「保單數：共 N 張」 |
| 總理賠金額 | total_claim_amount | number | 1,389,222 | [Assumption] 單位：元 |
| 賠案數 | claim_count | number | 28 | [Assumption] 顯示為「賠案數：共 N 張」 |

> 📝 Metric 卡片中部分欄位為 opacity:0 隱藏：「客戶數：共 98 人」、「出險客戶數：共 10 人」。[Open Question] 是否需要在前端預留？

### 4.4 Table 資料 — 推測的欄位（待 API 確認）

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| 進單險別 | category_name | string | 險別名稱 | [Assumption] |
| 保費 | premium | number | 千分位格式 | [Assumption] 型別與格式 |
| 理賠金額 | claim_amount | number | 千分位格式 | [Assumption] |
| 簽單損率 | loss_ratio | number | 百分比顯示 | [Assumption] 回傳小數或百分比？ |
| 保單數 | policy_count | number | 整數 | [Assumption] |
| 客戶數 | customer_count | number | 整數 | [Assumption] |
| 賠案數 | claim_count | number | 整數 | [Assumption] |
| 客戶出險率 | customer_claim_rate | number | 百分比顯示 | [Assumption] |
| 風險警示 | has_alert | boolean | 是否顯示 alert icon | [Assumption] 由前端計算還是後端回傳？ |
| 子險種 | sub_categories | Array\<object\> | 險種子項列表 | [Assumption] 巢狀結構 |

### 4.5 完整 Row Inventory（表格可見全部資料列）

| 層級 | 險別/險種 | 保費 | 理賠金額 | 簽單損率 | 保單數 | 客戶數 | 賠案數 | 客戶出險率 | Alert |
|---|---|---|---|---|---|---|---|---|---|
| 險別 | 任意車險 | 1,114,665 | 1,165,918 | 105.0% | 101 | 41 | 17 | 22.0% | ✅ 有 |
| 險別 | A&H | 577,560 | 199,924 | 34.6% | 180 | 43 | 9 | 20.9% | ❌ 無 |
| └ 險種 | 個傷 | 576,258 | 199,924 | 34.7% | 174 | 42 | 9 | 21.4% | ✅ 有 |
| └ 險種(last) | 個健 | 1,302 | 0 | 0% | 6 | 1 | 0 | 0% | ❌ 無 |
| 險別 | 工程險 | 13,020 | 0 | 0% | 5 | 5 | 0 | 0% | ❌ 無 |
| 險別 | 責任保險 | 37,521 | 23,380 | 62.3% | 21 | 19 | 2 | 10.5% | ❌ 無 |
| └ 險種 | 公共意外 | 6,000 | 0 | 0% | 3 | 3 | 0 | 0% | ❌ 無 |
| └ 險種 | 雇主責任 | 21,521 | 23,380 | 108.6% | 14 | 12 | 2 | 16.7% | ❌ 無 |
| └ 險種 | 產品責任 | 10,000 | 0 | 0% | 4 | 4 | 0 | 0% | ❌ 無 |
| └ 險種(last) | 營繕承包人意外 | 10,000 | 0 | 0% | 4 | 4 | 0 | 0% | ❌ 無 |

> ⚠️ 表格中「任意車險」行的 alert icon 可見；A&H 底下「個傷」行亦有 alert icon。其餘行 alert icon 為 opacity:0（隱藏）。

---

## 5. 待定數據模型清單

以下是根據 Figma 設計稿推敲出需要補充的資料結構。此清單將在 api-enrichment Skill 階段完善。

### 5.1 業務員基本資訊 API

| 推測項目 | UI 呈現 | 待補充內容 |
|---|---|---|
| **基本資訊查詢** | Basic Info 區塊：姓名/編號/經代公司/管理人/狀態 | Endpoint / Request params (agent_id?) / Response schema |
| **脫敏規則** | 姓名與編號均有遮罩（*） | 前端負責遮罩？還是後端回傳已遮罩字串？ |
| **狀態定義** | Status=On, ic/status_on icon (綠色) | enum 值有哪些？On / Off？還有其他？ |
| **管理人資料** | 「管理人：940171  張巧勳」 | 是否為獨立欄位？還是拼接字串？ |

### 5.2 風險摘要 API

| 推測項目 | UI 呈現 | 待補充內容 |
|---|---|---|
| **官方申訴查詢** | Summary 區塊：「共 N 筆 (近三個月：M 筆)」 | Endpoint / Response schema / 統計邏輯 |
| **特殊註記** | 「A&H 個傷 - 通路業務員招攬品質不良」+ 日期 | 是否有多筆？Response 結構？ |

### 5.3 綜合分析資料 API

| 推測項目 | UI 呈現 | 待補充內容 |
|---|---|---|
| **指標摘要** | Metric 卡片：總保費、總理賠金額、保單數、賠案數 | 是否與表格 API 合併？還是獨立 endpoint？ |
| **險別明細** | 表格資料（險別→險種巢狀結構） | Response schema / 排序邏輯 / 是否分頁？ |
| **日期區間** | 「近六年 (2019/03/01 ~ 2025/02/28)」Select | 可選選項有哪些？是否允許自訂日期？ |
| **Alert 判定** | 險別/險種行的 alert icon | 前端根據損率計算，還是後端回傳 flag？ |
| **分析範圍文字** | 「目前已納入分析的險別包括…」 | 是否為後端回傳？還是前端靜態文案？ |

### 5.4 Tab 狀態

| 推測項目 | UI 呈現 | 待補充內容 |
|---|---|---|
| **Tab alert** | 「任意車險」「個傷」Tab 帶有 alert icon | alert 條件由後端提供？Tab 配置是靜態還是動態？ |

> 實際的 API 對應與資料驗證規則，請參考後續補充的 `enriched-spec.md`。

---

## 6. 開放問題與假設  ← 工程師與 api-enrichment 的協商點

### Assumptions（推測，由 Figma 設計稿推導）

- [Confirmed] 頁面寬度固定 1440px（桌機版），不需響應式適配
- [Confirmed] Header Menu（我的名單/查詢企業）Figma 未設計，本次不實作
- [Assumption] Tab 的 alert icon 表示該險別存在風險異常，切版階段僅由 props 控制顯隱
- [Assumption] 表格內「任意車險」行的 alert icon (ic/alert_risk) 表示該險別簽單損率 > 100%
- [Confirmed] 表格為兩層巢狀結構：險別（粗體 Title 18，#172122）→ 險種子項（細體 Body 14，#475354）
- [Confirmed] 險種子項以縮排 + 24×24 placeholder (RECTANGLE) 方式表示階層關係；險別 row layout padding: 20px 22px，險種 sub-row padding: 12px 22px 20px；各欄 gap: 28px；險別欄寬 192px（含 alert icon 24px + gap 8px + 名稱 76px + alert icon 24px）；數據欄寬 92px，損率欄寬 70px，出險率欄寬 80px
- [Assumption] 「險種_last」型態的 row 為該險別最後一筆子項，可能帶有不同的 bottom border 處理
- [Assumption] 表格內有一條垂直分隔線（9714:25940），位於 x:227 處，分隔「進單險別」欄與數據欄
- [Assumption] Metric 卡片的「客戶數」「出險客戶數」欄位為 opacity:0 隱藏，表示目前不顯示但保留結構
- [Assumption] Basic Info 中的資料為已脫敏狀態，後端回傳即為脫敏格式
- [Confirmed] 日期區間選擇器預設選項為「近六年」，下拉 combo 型態，可選項為：近六年、近五年、近三年
- [Confirmed] 數值欄位均為千分位格式化顯示，百分比欄位顯示至小數點一位
- [Confirmed] 分析範圍說明為固定文案，遵照 Figma 設計稿呈現

### Open Questions（需要人類決策）

- [Resolved] Tab 切換為同頁內容替換（不使用獨立路由）
- [Resolved] Header Menu 本次不實作（Figma 未設計）
- [Resolved] 日期區間選擇器可選項：近六年、近五年、近三年
- [Resolved] Metric 卡片 opacity:0 的「客戶數」「出險客戶數」遵照 Figma 呈現（opacity:0 不顯示），如需細節再提供 Figma node URL
- [Resolved] Alert icon 切版階段僅放置 icon，由 props 控制顯隱，觸發邏輯後續由 logic-coder 處理
- [Resolved] 表格不支援排序或篩選，遵照 Figma 設計稿
- [Resolved] 表格資料超出可視範圍時往下延伸，不需分頁
- [Resolved] Figma 未提供 Loading / Empty / Error 狀態畫面，本次不實作
- [Resolved] 分析範圍說明文字為固定文案，遵照 Figma 設計稿
- [Resolved] 「不可外流」警語遵照 Figma 設計稿直接呈現，不做角色/權限判斷
