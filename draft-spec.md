# Draft Spec：業務員全視圖 — 綜合分析頁

> 產生時間：2026-04-01  
> 狀態：Draft — 待工程師審閱  
> Figma：https://www.figma.com/design/Jkuzai47DvXzPZlh6hUkNM/%F0%9F%9F%A2-Final-UI?node-id=9714-25867  
> 說明：本規格基於 Figma 設計稿推導。API 對應與資料結構將由後續 api-enrichment Skill 補充。

---

## 1. 功能範圍與流程摘要

本頁面為「業務員全視圖」的**綜合分析**分頁，提供保險業務員的整體績效總覽，包含：

- 業務員基本資料（姓名、編號、所屬經紀人公司、管理人、登錄狀態）
- 特殊摘要提醒（申訴紀錄、特殊註記）
- 整體綜合表現指標（總保費、總理賠金額）
- 各險別明細表（含子險種展開，多層級樹狀結構）

**明確排除**：
- 「任意車險」分頁內容（另一個 Tab）
- 「個傷」分頁內容（另一個 Tab）
- Header 導覽選單功能（設計中 opacity: 0，本次不實作）

---

### 1.1 頁面結構順序

| 顯示順序 | 元件 / 區塊名稱 | Figma Node ID | 備註 |
|---|---|---|---|
| 1 | Header（Logo + 系統名稱） | `9714:25873` | 固定頂部，Style=No-menu |
| 2 | Basic Info — 警告 & 更新時間 | `I9714:25943;5299:557` | 紅字「不可外流」+ 最後更新時間 |
| 3 | Basic Info — 基本資料卡片 | `I9714:25943;5299:558` | 姓名/編號/公司/管理人/狀態 |
| 4 | Summary 摘要區 | `9714:25942` | 黃底提醒區：申訴、特殊註記 |
| 5 | Tab 群組 | `9714:25868` | 綜合分析(Active) / 任意車險 / 個傷 |
| 6 | Card 背景 | `9714:25872` | 白色底板 + drop-shadow |
| 7 | 標題列 + 日期篩選 | `9714:25875` | 「整體綜合表現」+ 日期區間選擇器 |
| 8 | 分析範圍說明 | `9714:25879` | Bullet point 說明納入/排除險別 |
| 9 | Metric 指標卡片組 | `9714:25880` | 總保費 + 總理賠金額，兩張並排 |
| 10 | 險別明細表格 | `9714:25883` | Table head + 多層級 rows |

---

### 1.2 Node Coverage Ledger

| Node ID | 名稱 | 層級 | 類型 | 狀態 | 備註 |
|---|---|---|---|---|---|
| `9714:25867` | 業務員 (root frame) | 一級 | 結構 | 已確認 | 整頁容器，1440×1698，背景 #E1F0FA |
| `9714:25873` | Header | 一級 | 元件 | 已確認 | Instance of Header (Style=No-menu) |
| `I9714:25873;4022:23291` | logo-tmnewa | 關鍵二級 | 資源 | 已確認 | SVG logo，需匯出 |
| `I9714:25873;4020:16361` | System 標題 | 關鍵二級 | 元件 | 已確認 | 文字：「業務員全視圖」 |
| `I9714:25873;4020:16363` | Nav / menu | 關鍵二級 | 元件 | 不在本次範圍 | opacity: 0，設計中隱藏 |
| `9714:25943` | Basic Info | 一級 | 元件 | 已確認 | Instance of Basic Info (業務員, 自然人) |
| `I9714:25943;5299:557` | Info / Warning | 關鍵二級 | 元件 | 已確認 | 紅色警告 + 更新時間 |
| `I9714:25943;5299:558` | Basic info card | 關鍵二級 | 骨架 | 已確認 | 白底卡片，border-radius: 20px，drop-shadow |
| `I9714:25943;5299:559` | Name 區塊 | 關鍵二級 | 元件 | 已確認 | 業務員姓名/編號 + 公司/管理人 |
| `I9714:25943;5299:560` | Divider | 關鍵二級 | 骨架 | 已確認 | 分隔線，stroke #C4EAE7 |
| `I9714:25943;5299:561` | Status | 關鍵二級 | 元件 | 已確認 | 登錄年份 + 近三月進單 + 狀態 icon |
| `6002:11973` | ic / status on | 關鍵二級 | 資源 | 已確認 | 綠色狀態 icon，需匯出 |
| `9714:25942` | Summary | 一級 | 元件 | 已確認 | Instance of Summary (業務員, 完整)，背景 #FFF6E0 |
| `6002:11875` | ic / summary | 關鍵二級 | 資源 | 已確認 | 摘要 icon，需匯出 |
| `9714:25868` | Group / Tab / 業務員 | 一級 | 元件 | 已確認 | Tab 群組容器 |
| `9714:25869` | Tab — 綜合分析 | 關鍵二級 | 元件 | 已確認 | State=Active_N2，含底部 indicator |
| `9714:25870` | Tab — 任意車險 | 關鍵二級 | 元件 | 已確認 | State=Inactive_N，含 alert_risk icon |
| `9714:25871` | Tab — 個傷 | 關鍵二級 | 元件 | 已確認 | State=Inactive，含 alert_risk icon |
| `6002:11458` | ic/alert_risk | 關鍵二級 | 資源 | 已確認 | 紅色警示 icon，需匯出 |
| `9714:25872` | card 背景 | 一級 | 骨架 | 已確認 | SVG 白色底板，drop-shadow-basic |
| `9714:25874` | Agent 主內容區 | 一級 | 結構 | 已確認 | 包含標題列、指標、表格 |
| `9714:25875` | Title set | 關鍵二級 | 元件 | 已確認 | 標題 + 日期選擇器 |
| `9714:25878` | Select set (Date_select) | 關鍵二級 | 元件 | 已確認 | 日期區間下拉：近六年 (2019/03/01 ~ 2025/02/28) |
| `I9714:25878;5307:447` | Select (Combo) | 關鍵二級 | 元件 | 已確認 | 下拉選擇器，border-radius: 8px，border #A3D6E0 |
| `6002:12323` | ic / expand | 關鍵二級 | 資源 | 已確認 | 展開/收合箭頭 icon |
| `9714:25879` | Bullet point / 範圍說明 | 關鍵二級 | 元件 | 已確認 | 分析範圍說明文字 |
| `9714:25880` | Metrics 容器 | 關鍵二級 | 結構 | 已確認 | 兩張 Metric 卡片並排，gap: 16px |
| `9714:25881` | Metric — 總保費 | 關鍵二級 | 元件 | 已確認 | 1,742,766 / 保單數 307 張 |
| `9714:25882` | Metric — 總理賠金額 | 關鍵二級 | 元件 | 已確認 | 1,389,222 / 賠案數 28 張 |
| `9714:25883` | Frame 227 (表格容器) | 關鍵二級 | 結構 | 已確認 | 含 Table head + rows |
| `9714:25884` | Table head | 關鍵二級 | 元件 | 已確認 | 8 欄表頭 |
| `9714:25885` | Table row — 任意車險 | 關鍵二級 | 元件 | 已確認 | 一級險別 row，含 alert icon |
| `9714:25886` | Table row — A&H | 關鍵二級 | 元件 | 已確認 | 一級險別 row |
| `9714:25887` | Row — 個傷 (子行) | 關鍵二級 | 元件 | 已確認 | 二級險種 sub-row，帶 alert icon |
| `9714:25900` | Table row — 個健 (子行) | 關鍵二級 | 元件 | 已確認 | 二級險種 sub-row (last variant) |
| `9714:25901` | Table row — 工程險 | 關鍵二級 | 元件 | 已確認 | 一級險別 row |
| `9714:25902` | Row — 責任保險 | 關鍵二級 | 元件 | 已確認 | 一級險別 row (非 Instance，手動 Frame) |
| `9714:25914` | Row — 公共意外 (子行) | 關鍵二級 | 元件 | 已確認 | 二級險種 sub-row |
| `9714:25927` | Row — 雇主責任 (子行) | 關鍵二級 | 元件 | 已確認 | 二級險種 sub-row |
| `9865:4038` | Row — 產品責任 (子行) | 關鍵二級 | 元件 | 已確認 | 二級險種 sub-row |
| `9714:25940` | 分隔線 | 關鍵二級 | 骨架 | 已確認 | 垂直分隔線 (absolute positioned) |
| `9865:3726` | Table row — 營繕承包人意外 | 關鍵二級 | 元件 | 已確認 | 二級險種 sub-row (last variant) |

---

## 2. 元件拆分建議  ← 工程師重點審閱

| 元件名稱 | Figma Node ID | 層級 | 可重用性 | 說明 |
|---|---|---|---|---|
| `AppHeader` | `9714:25873` | Base | 跨頁 | 含 Logo + 系統名稱。Nav menu 本次不實作 (opacity:0) |
| `WarningBanner` | `I9714:25943;5299:557` | Base | 跨頁 | 紅色警告文字 + 最後更新時間，layout: space-between |
| `AgentBasicInfoCard` | `I9714:25943;5299:558` | Feature | 頁面專屬 | 包含 AgentNameBlock + Divider + AgentStatusBlock |
| `AgentNameBlock` | `I9714:25943;5299:559` | Feature | 頁面專屬 | 業務員姓名/編號 + 公司名稱/編號 + 管理人 |
| `AgentStatusBlock` | `I9714:25943;5299:561` | Feature | 頁面專屬 | 登錄年份 + 近期進單數 + 狀態 icon |
| `SummaryAlert` | `9714:25942` | Base | 跨頁 | 黃底摘要區，含 icon + bullet point list |
| `TabGroup` | `9714:25868` | Base | 跨頁 | Tab 切換組，支援 Active/Inactive/Inactive_N 三種狀態 |
| `TabItem` | `9714:25869` | Base | 跨頁 | 單個 Tab，props: text, state, hasAlert |
| `DateRangeSelect` | `9714:25878` | Base | 跨頁 | 日期區間選擇器：Label + Combo Select |
| `ScopeDescription` | `9714:25879` | Feature | 頁面專屬 | 分析範圍說明 bullet points |
| `MetricCard` | `9714:25881` | Base | 跨頁 | 指標卡片：主數值 + 副數值描述，border-radius: 20px |
| `InsuranceTable` | `9714:25883` | Feature | 頁面專屬 | Container: 包含 TableHead + 多層級 rows |
| `InsuranceTableHead` | `9714:25884` | Feature | 頁面專屬 | 8 欄表頭 |
| `InsuranceTableRow` | `9714:25885` | Feature | 頁面專屬 | 一級險別行 (Type=險別)，含可選 alert icon |
| `InsuranceSubRow` | `9714:25887` | Feature | 頁面專屬 | 二級險種子行，左側有 placeholder indent |
| `AgentAnalysisPage` | `9714:25867` | Container | 頁面專屬 | 頁面容器，負責資料取得與分發 |

> 拆分原則：Container (`AgentAnalysisPage`) 負責資料與邏輯；所有 Feature/Base 元件只接收 props，不含 API 呼叫。

---

## 3. 互動行為說明  ← 工程師重點審閱

| 互動點 | 觸發條件 | 預期行為 | 對應 Figma Frame |
|---|---|---|---|
| 點擊 Tab「綜合分析」 | Tab 非 Active 時 | 切換至綜合分析內容，Tab 變為 Active_N2 狀態 | `9714:25869` |
| 點擊 Tab「任意車險」 | Tab 非 Active 時 | 切換至任意車險分頁，Tab 變為 Active 狀態，含 alert icon 邏輯 | `9714:25870` |
| 點擊 Tab「個傷」 | Tab 非 Active 時 | 切換至個傷分頁 | `9714:25871` |
| 點擊日期區間 Select | 使用者點擊下拉框 | 展開日期區間選項列表（Combo 型下拉），選項為：近六年、近五年、近三年 | `I9714:25878;5307:447` |
| 選擇不同日期區間 | 選取下拉選項 | 更新下方所有指標與表格數據 | `I9714:25878;5307:447` |
| 表格險別行帶 alert icon | 該險別有風險標記時 | 依 Figma 設計稿既有樣式呈現 alert_risk icon，不另做邏輯判斷 | `6002:11458` |
| 表格行呈現 | 靜態呈現 | 僅遵照 Figma 設計稿 layout 呈現，無點擊互動 | `9714:25885` |
| Metric 卡片 | 靜態呈現 | 不可點擊，僅顯示指標數據 | `9714:25881` |

---

## 4. 欄位與資料型別定義  ← 工程師重點審閱

### 4.1 推測的基本資料欄位（待 API 確認）

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| AgentNameBlock | `agent_name` | `string` | 業務員姓名（遮蔽顯示「徐*雯」） | ✅ 已確認：後端已遮蔽，前端直接顯示 |
| AgentNameBlock | `agent_no` | `string` | 業務員編號（遮蔽「E**C738183」） | ✅ 已確認：後端已遮蔽 |
| AgentNameBlock | `company_name` | `string` | 經紀人公司名稱（「威*保經」） | ✅ 已確認：後端已遮蔽 |
| AgentNameBlock | `company_no` | `string` | 公司編號（「BA1296****」） | ✅ 已確認：後端已遮蔽 |
| AgentNameBlock | `manager_info` | `string` | 管理人資訊（「940171 張巧勳」） | [Assumption] 可能拆為 id + name |
| AgentStatusBlock | `registration_year` | `number` | 登錄年份（2018） | [Assumption] |
| AgentStatusBlock | `recent_policies_count` | `number` | 近三月進單數（10） | [Assumption] |
| AgentStatusBlock | `status` | `string` | 狀態標記 | [Assumption] enum: 'on' / 'off' |
| WarningBanner | `last_update_time` | `string` | 最後更新時間（「2026 年 2 月」） | [Assumption] 日期格式待確認 |

### 4.2 推測的摘要欄位（待 API 確認）

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| SummaryAlert | `complaints_total` | `number` | 官方申訴總筆數（3） | [Assumption] |
| SummaryAlert | `complaints_recent` | `number` | 近三月申訴筆數（1） | [Assumption] |
| SummaryAlert | `special_notes` | `Array<{ text: string, date: string }>` | 特殊註記列表 | [Assumption] 可能多筆 |

### 4.3 推測的指標欄位（待 API 確認）

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| MetricCard #1 | `total_premium` | `number` | 總保費（1,742,766 元） | [Assumption] |
| MetricCard #1 | `total_policies` | `number` | 保單數（307 張） | [Assumption] |
| MetricCard #2 | `total_claim_amount` | `number` | 總理賠金額（1,389,222 元） | [Assumption] |
| MetricCard #2 | `total_claims` | `number` | 賠案數（28 張） | [Assumption] |

### 4.4 推測的日期區間選項（待 API 確認）

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| DateRangeSelect | `date_range_label` | `string` | 顯示標籤（「近六年」） | ✅ 已確認：選項為近六年、近五年、近三年 |
| DateRangeSelect | `date_range_start` | `string` | 起始日（「2019/03/01」） | [Assumption] 格式 YYYY/MM/DD |
| DateRangeSelect | `date_range_end` | `string` | 結束日（「2025/02/28」） | [Assumption] 格式 YYYY/MM/DD |

---

## 5. 待定數據模型清單

以下是根據 Figma 設計稿推敲出需要補充的資料結構。此清單將在 api-enrichment Skill 階段完善。

### 5.1 險別明細表格 — 完整 Row Inventory

**Table Head 欄位定義：**

| 欄位名稱 | 推測的 key | 推測的型別 | 備註 |
|---|---|---|---|
| 進單險別 | `category_name` | `string` | 待 API 確認 |
| 保費 | `premium` | `number` | 待 API 確認，顯示千分位 |
| 理賠金額 | `claim_amount` | `number` | 待 API 確認，顯示千分位 |
| 簽單損率 | `loss_ratio` | `number` | 待 API 確認，顯示為百分比 |
| 保單數 | `policy_count` | `number` | 待 API 確認 |
| 客戶數 | `customer_count` | `number` | 待 API 確認 |
| 賠案數 | `claim_count` | `number` | 待 API 確認 |
| 客戶出險率 | `customer_claim_rate` | `number` | 待 API 確認，顯示為百分比 |

**完整可見 Row Inventory（從 Figma 提取所有行）：**

| 行序 | 層級 | 險別名稱 | 保費 | 理賠金額 | 簽單損率 | 保單數 | 客戶數 | 賠案數 | 客戶出險率 | Node ID | 有 alert icon |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 一級 | 任意車險 | 1,114,665 | 1,165,918 | 105.0% | 101 | 41 | 17 | 22.0% | `9714:25885` | ✅ |
| 2 | 一級 | A&H | 577,560 | 199,924 | 34.6% | 180 | 43 | 9 | 20.9% | `9714:25886` | ❌ |
| 2-1 | 二級 | 個傷 | 576,258 | 199,924 | 34.7% | 174 | 42 | 9 | 21.4% | `9714:25887` | ✅ |
| 2-2 | 二級 | 個健 | 1,302 | 0 | 0% | 6 | 1 | 0 | 0% | `9714:25900` | ❌ |
| 3 | 一級 | 工程險 | 13,020 | 0 | 0% | 5 | 5 | 0 | 0% | `9714:25901` | ❌ |
| 4 | 一級 | 責任保險 | 37,521 | 23,380 | 62.3% | 21 | 19 | 2 | 10.5% | `9714:25902` | ❌ |
| 4-1 | 二級 | 公共意外 | 6,000 | 0 | 0% | 3 | 3 | 0 | 0% | `9714:25914` | ❌ |
| 4-2 | 二級 | 雇主責任 | 21,521 | 23,380 | 108.6% | 14 | 12 | 2 | 16.7% | `9714:25927` | ❌ |
| 4-3 | 二級 | 產品責任 | 10,000 | 0 | 0% | 4 | 4 | 0 | 0% | `9865:4038` | ❌ |
| 4-4 | 二級 | 營繕承包人意外 | 10,000 | 0 | 0% | 4 | 4 | 0 | 0% | `9865:3726` | ❌ |

> ✅ 已確認：表格為樹狀兩層結構，一級為險別大類，二級為險種明細。  
> ✅ 已確認：營繕承包人意外隸屬於「責任保險」子分類。  
> ✅ 已確認：alert_risk icon 先依 Figma 設計稿既有樣式呈現，不另做邏輯判斷。

### 5.2 推測的樹狀資料結構

```typescript
// [Assumption] 推測結構，待 API 確認
interface InsuranceCategory {
  category_name: string;       // 險別名稱
  premium: number;             // 保費
  claim_amount: number;        // 理賠金額
  loss_ratio: number;          // 簽單損率 (%)
  policy_count: number;        // 保單數
  customer_count: number;      // 客戶數
  claim_count: number;         // 賠案數
  customer_claim_rate: number; // 客戶出險率 (%)
  has_alert: boolean;          // 是否有風險警示
  sub_categories?: InsuranceCategory[]; // 子險種
}
```

### 5.3 推測的 Metric 資料結構

```typescript
// [Assumption] 推測結構，待 API 確認
interface MetricData {
  label: string;           // 「總保費 (元)」 or 「總理賠金額 (元)」
  value: number;           // 主數值
  sub_label: string;       // 「保單數：共」 or 「賠案數：共」
  sub_value: number;       // 副數值
  sub_unit: string;        // 「張」
}
```

---

## 6. 開放問題與假設  ← 工程師與 api-enrichment 的協商點

### Assumptions（推測，由 Figma 設計稿推導）

- [Assumption] Tab 切換為前端路由或 v-if 切換，不重新載入頁面
- [Resolved] 業務員姓名/編號等個資遮蔽由後端處理，前端直接顯示 API 回傳值
- [Resolved] 日期區間 Select 選項為：近六年、近五年、近三年
- [Resolved] 表格 alert_risk icon 先依 Figma 設計稿既有樣式呈現，不另做邏輯判斷
- [Resolved] 樹狀兩層結構正確，表格行僅遵照 Figma layout 靜態呈現，無展開/收合互動
- [Resolved] 營繕承包人意外隸屬於「責任保險」子分類
- [Assumption] MetricCard 的副描述區有第二行 (opacity: 0)，推測為不同 variant 的切換，本次以可見行為準
- [Assumption] 表格寬度固定 1140px，各欄位寬度分別為：險別 192px、保費/理賠/保單數/客戶數/賠案數各 92px、簽單損率 70px、客戶出險率 80px
- [Assumption] 一級 row 文字樣式為 Title 18、二級 sub-row 文字樣式為 Title 16 / Body 14

### Open Questions（需要人類決策）

- ~~[Resolved] 表格行僅遵照 Figma layout 靜態呈現，無點擊互動~~
- ~~[Resolved] MetricCard 不可點擊，僅顯示指標數據~~
- ~~[Resolved] 營繕承包人意外隸屬於「責任保險」子分類~~
- ~~[Resolved] 日期區間選項為：近六年、近五年、近三年~~
- ~~[Resolved] Tab 上的 alert_risk icon 先依 Figma 樣式呈現~~
- ~~[Resolved] Header 導覽選單先依 Figma 呈現 (opacity: 0，本次不實作)~~
- ~~[Resolved] 「管理人」欄位不可點擊~~
- ~~[Resolved] 表格無分頁~~
- ~~[Resolved] Summary 特殊註記先依 Figma 呈現~~

> ✅ 所有 Open Questions 已解決，規格可交接下游。
