# Draft Spec：業務員全視圖 — 綜合分析

> 產生時間：2026年4月1日  
> 狀態：Draft — 待工程師審閱  
> Figma：https://www.figma.com/design/Jkuzai47DvXzPZlh6hUkNM/%F0%9F%9F%A2-Final-UI?node-id=9714-25867&t=0KcTZsOTYUktiQaP-4  
> 說明：本規格基於 Figma 設計稿推導。API 對應與資料結構將由後續 api-enrichment Skill 補充。

---

## 1. 功能範圍與流程摘要

本頁面為「業務員全視圖」系統中的核心分析頁面，提供對特定業務員 (Agent) 的整體業績分析與風險評估。

**主要功能**：
- 展示業務員的基本資訊（姓名、代理公司、管理人等）
- 按險別分類呈現業績指標（保費、理賠金額、簽單損率等）
- 提供危險信號預警（特殊註記、客戶申訴）
- 支援多標籤頁切換檢視不同險種分析

**範圍涵蓋**：
- 完整的業務員檔案頁面（包含防機密提示、更新時間）
- 多頁籤分析視圖（目前實現「個傷」、「任意車險」、「個傷」三個標籤）
- 險別明細表格（含 8 個指標欄位）
- 摘要區塊（官方申訴、特殊註記）

**明確排除**：
- API 詳細端點、驗證規則（由 api-enrichment 補充）
- 詳細的圖表/視覺化邏輯
- 權限控制機制

---

### 1.1 頁面結構順序（自上而下）

| 顯示順序 | 元件 / 區塊名稱 | Figma Node ID | 說明 |
|---|---|---|---|
| 1 | Header | 9714:25873 | 導航列，包含 Logo + 頁面標題「業務員全視圖」 |
| 2 | Basic Info Card | 9714:25943 | 基本資訊卡片（業務員名稱、代理公司、登錄狀態、權限提示） |
| 3 | Summary Section | 9714:25942 | 摘要卡片（官方申訴、特殊註記） |
| 4 | Tab Group | 9714:25868 | 標籤群組（個傷、任意車險、個傷），切換不同險種分析 |
| 5 | Tab Content Container | 9714:25874 | 第一個 Tab 內容容器 (含 Title set + 表格) |
| 5.1 | Analysis Table Head | 9714:25884 | 表格標頭行 |
| 5.2 | Analysis Table Rows | 9714:25885 ~ 9865:3726 | 表格資料行（多個險別） |

---

### 1.2 Node Coverage Ledger

| Node ID | 名稱 | 層級 | 類型 | 狀態 | 備註 |
|---|---|---|---|---|---|
| 9714:25867 | 業務員（主Frame） | 一級 | 結構 | 已確認 | 頁面容器，藍白背景 |
| 9714:25873 | Header | 一級 | 元件 Instance | 已確認 | Header 組件（Style=No-menu） |
| 9714:25943 | Basic Info | 一級 | 元件 Instance | 已確認 | 基本資訊卡片（含警告、業務員卡片、狀態） |
| 9714:25942 | Summary | 一級 | 元件 Instance | 已確認 | 摘要卡片（含 bullet points） |
| 9714:25868 | Group / Tab / 業務員 | 一級 | 結構 | 已確認 | tab 群組容器 |
| 9714:25869 | Tab (Active: 個傷) | 二級 | 元件 Instance | 已確認 | Active 狀態的 tab |
| 9714:25870 | Tab (Inactive: 任意車險) | 二級 | 元件 Instance | 已確認 | Inactive 狀態的 tab |
| 9714:25871 | Tab (Inactive: 個傷) | 二級 | 元件 Instance | 已確認 | Inactive 狀態的 tab |
| 9714:25872 | card (背景底板) | 一級 | 骨架 | 已確認 | 純背景 SVG，白色卡片底板 |
| 9714:25874 | Agent (Tab Content Container) | 一級 | 結構 | 已確認 | 第一個 Tab 內容容器，包含 Title set + 表格 |
| 9714:25884 | Table Head | 二級 | 元件 Instance | 已確認 | 表格標頭行 |
| 9714:25885 | Table row (任意車險) | 二級 | 元件 Instance | 已確認 | 資料行（險別= 任意車險） |
| 9714:25886 | Table row (A&H) | 二級 | 元件 Instance | 已確認 | 資料行（險別=A&H） |
| 9714:25887 | Row (個傷 - 自訂行) | 二級 | 結構 | 已確認 | 非 Instance 的個傷資料行 |
| 9714:25900 | Table row (險種_last: 個健) | 二級 | 元件 Instance | 已確認 | 最後一行險種（個健） |
| 9714:25901 | Table row (旅平險) | 二級 | 元件 Instance | 已確認 | 資料行（險別=旅平險） |
| 9865:3726 | Table row (營繕承包人意外) | 二級 | 元件 Instance | 已確認 | 最後一行險種資料 |

---

## 2. 元件拆分建議

| 元件名稱 | Figma Node ID | 層級 | 可重用性 | 說明 |
|---|---|---|---|---|
| `<Header>` | 6002:11741 | Base | 跨頁 | 共用導航列組件，System 組件庫 |
| `<Tab>` | 6002:11422 | Base | 跨頁 | Tab 組件（State=Active/Inactive），System 組件庫 |
| `<TableHead>` | 10460:5149 | Base | 跨頁 | 表格表頭，System=業務員, Page=分析 |
| `<TableRow>` | 10460:4881 | Base | 跨頁 | 險別表格行，Type=險別 |
| `<TableRowLast>` | 10460:4885 | Base | 跨頁 | 險別表格行（最後行），Type=險種_last |
| `<SummaryCard>` | 7790:15327 | Feature | 頁面專屬 | 摘要卡片（官方申訴 + 特殊註記）+ 情境選擇 |
| `<BulletPoint>` | 9865:3744 | Base | 跨頁 | 子彈點文字，用於摘要內 |
| `<BasicInfoCard>` | 6861:13595 | Feature | 頁面專屬 | 業務員資訊卡片，包含警告、姓名、公司、狀態 |
| `<InfoWarning>` | 6002:11924 | Base | 跨頁 | 警告 / 機密提示 |
| `<NameBlock>` | 6439:12480 | Base | 跨頁 | 業務員姓名 + 代理公司顯示 |
| `<StatusBadge>` | 6002:11966 | Base | 跨頁 | 狀態徽章（Status=On/Off） |
| `<AnalysisPageContainer>` | N/A | Container | 頁面專屬 | 整個分析頁面的容器 (Vue 頁面層級) |

### 拆分建議說明

- **Base Components**（基礎元件）：源自 Figma 的 System 設計庫，應單獨建立 Vue 檔案，props 驅動展示
- **Feature Components**（功能元件）：業務員頁面特定的合成元件，整合 Base 元件
- **Container**：接收 API 資料、管理狀態，分別傳遞 props 給 Feature / Base 元件
- **拆分原則**：Container 負責資料與邏輯，Presentational 僅接收 props 與 emits

---

## 3. 互動行為說明

| 互動點 | 觸發條件 | 預期行為 | 對應 Figma Frame | 備註 |
|---|---|---|---|---|
| 點擊 Tab (個傷) | 用戶點擊第一個標籤 | 切換至「個傷」分析視圖，表格更新，Tab 顯示 Active 狀態 | 9714:25869 | State=Active_N2，頁面初次載入時此為預設取值 |
| 點擊 Tab (任意車險) | 用戶點擊第二個標籤 | 切換至「任意車險」分析視圖，表格更新，Tab 顯示 Active 狀態 | 9714:25870 | State=Inactive_N，切換後變為 Active |
| 點擊 Tab (個傷) | 用戶點擊第三個標籤 | 切換至「個傷」分析視圖，表格更新 | 9714:25871 | State=Inactive |
| 表格顯示 | 頁面初始化或 Tab 切換時 | 顯示表格行，含 8 個欄位資料；每行代表不同險別，按 Figma 設計稿直接呈現 | 9714:25885, 9714:25886, 9714:25887 等 | 不支援排序、篩選、分頁功能 |

---

## 4. 欄位與資料型別定義

### 4.1 推測的表單 / 資料欄位（待 API 確認）

#### Header 區塊

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| Logo- tmnewa | (Icon/Image) | SVG / URL | 公司 Logo，固定顯示 | 是否需要動態載入？ |
| 頁面標題 | pageTitle | string | 「業務員全視圖」 | 固定文案或動態？ |

#### Tab 區塊

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| Tab 1 | category_1 | enum: 'personal_injury' | 個傷 | 後端 enum 值是什麼？ |
| Tab 2 | category_2 | enum: 'auto_insurance' | 任意車險 | 後端 enum 值是什麼？ |
| Tab 3 | category_3 | enum: 'personal_injury_2' | 個傷 | 後端 enum 值是什麼？ |

#### 表格列（險別表格）

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| 表格欄 1 | insuranceType | string | 險別名稱（如「任意車險」、「A&H」、「個傷」） | 是否與後端碼表對應？ |
| 表格欄 2 | premium | number (currency) | 保費 | 貨幣格式、小數位數？ |
| 表格欄 3 | claimAmount | number (currency) | 理賠金額 | 貨幣格式、小數位數？ |
| 表格欄 4 | lossRatio | number (percentage) | 簽單損率，百分比格式 | 計算方式？范圍上限？ |
| 表格欄 5 | policiesCount | number | 保單數 | 整數 |
| 表格欄 6 | customersCount | number | 客戶數 | 整數 |
| 表格欄 7 | claimsCount | number | 賠案數 | 整數 |
| 表格欄 8 | customerClaimRate | number (percentage) | 客戶出險率，百分比格式 | 計算方式？范圍上限？ |

#### 業務員基本資訊卡片

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| 業務員姓名 | agentName | string | 「徐*雯」（脫敏顯示） | 按 Figma 原有格式呈現，具體脫敏規則由後端決定 |
| 業務員代號 | agentId | string | 「E**C738183」（脫敏） | 按 Figma 原有格式呈現，具體脫敏規則由後端決定 |
| 代理公司名稱 | companyName | string | 「威*保經」（脫敏） | 按 Figma 原有格式呈現，具體脫敏規則由後端決定 |
| 代理公司代號 | companyId | string | 「BA1296****」（脫敏） | 按 Figma 原有格式呈現，具體脫敏規則由後端決定 |
| 管理人代號 & 姓名 | supervisorId, supervisorName | string, string | 「940171 張巧勳」 | 是分開的欄位還是一個欄位？ |
| 登錄年份 | registrationYear | number | 2018 | 年份格式、是否需要月份？ |
| 近三月進單數 | recentPoliciesCount | number | 「近三個月有進單 10 張」 | 固定為 3 個月或可配置？ |
| 活動狀態 | status | enum | 「On」(Active) | 後端 enum 值？ |

#### 摘要區塊

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| 官方申訴 | officialComplaints | object { count: number, recent: number, timeRange: string } | 「共 3 筆 (近三個月： 1 筆)」 | 時間範圍如何定義？ |
| 特殊註記 | specialRemarks | array | 特殊註記清單 | 註記是否可編輯？歷史紀錄如何管理？ |
| 特殊註記日期 | remarks.recordedDate | date | 「2019/06/06」 | 日期格式？ |

#### 其他

| UI 位置 | 推測的欄位名稱 | 推測的型別 | 說明 | 待確認項目 |
|---|---|---|---|---|
| 資料保密警告 | (Not a field) | (Static UI) | 「不可外流」、「本分析資料僅供內部使用...」 | 固定文案或可配置？ |
| 最後更新時間 | lastUpdatedDate | date | 「最後更新時間：2026 年 2 月」 | 是月份粒度還是精確時間？ |

---

## 5. 待定數據模型清單

以下是根據 Figma 設計稿推敲出需要補充的資料結構。此清單將在 api-enrichment Skill 階段完善。

| UI 元件位置 | 推測的欄位名稱 | 推測的型別 | 備註 |
|---|---|---|---|
| 整個頁面容器 | agentProfile | object | [Assumption] 業務員主要檔案物件 |
| → 基本資訊 | agentProfile.basicInfo | object | 包含姓名、代號、公司等 |
| → 分析資料 | agentProfile.analysisData | object | 包含表格資料、摘要等 |
| → 表格列 (陣列) | analysisData.tableRows | array<TableRow> | 每個 TableRow 包含 8 個欄位 |
| → 摘要 (物件) | analysisData.summary | object | 含 officialComplaints、specialRemarks |
| → 特殊註記 (陣列) | summary.specialRemarks | array<Remark> | 每個 Remark 含文字、日期 |
| Panel 標籤切換 | selectedCategory | enum | [Assumption] 用戶選擇的保險類別 |
| 表格更新觸發 | (Derived) | trigger | [Open Question] 切換 tab 時，表格是否重新請求 API？ |

---

## 6. 開放問題與假設

### Assumptions（推測，由 Figma 設計稿推導）

- **[Assumption]** Tab 切換會導致表格資料更新，個別保險類別有各自的險別明細
- **[Assumption]** 每個 Tab 對應不同的表格資料集（由 API 返回）
- **[Assumption]** 業務員姓名、公司名稱按 Figma 設計稿的脫敏格式顯示（具體規則由後端 API 決定）
- **[Assumption]** 摘要 Bullet 點（官方申訴、特殊註記）由 API 動態返回
- **[Assumption]** 最後更新時間粒度為「月份」（「2026 年 2 月」）

### Open Questions（需要人類決策）

- **[Open Question]** 如果用戶沒有檢視權限（基於角色 / 部門），此頁面應顯示什麼？
- **[Open Question]** 表格資料加載失敗時，應顯示什麼 Error State？
- **[Open Question]** 摘要區塊中「特殊註記」是否支援編輯 / 新增註記？歷史版本如何管理？
- **[Open Question]** 是否有其他 Tab 類別（目前設計稿僅展示 3 個 Tab）？
- **[Open Question]** 表格內的「資料區間為」日期選擇（Select set）是否用於篩選表格資料？

---

## 7. 下一步 (Next Steps)

✅ **已完成**：  
- 頁面結構順序與 Node Coverage Ledger 已列出（Section 1.1, 1.2）
- 元件拆分建議已規劃（Section 2）
- 互動行為與欄位定義已推敲（Section 3-4）
- 待補充項與 Open Questions 已標記（Section 5-6）

🔄 **待決策**（審閱重點）：  
- Section 6 中的 8 個 Open Questions 是否確認或有新增需求？
- 元件拆分是否合符現有 repo 慣例（如命名、目錄結構）？
- 欄位命名是否與後端 API 契約一致？

📋 **Approve 後流程**：  
1. 整理 handoff payload，包含已批准的 Node ID 清單
2. 交接給 **api-enrichment Skill**，補充完整 API 對應表、State 結構、Error 處理方案
3. 交接給 **vue3-layout Agent**，開始 UI 切版與組件實現

---

## 附錄：Figma 資源清單

| 資源類型 | 名稱 | Node ID | 用途 |
|---|---|---|---|
| Icon | ic/alert_risk | 6002:11458 | 險別旁邊的警告圖示 |
| Icon | ic/summary | 6002:11875 | 摘要區塊的圖示 |
| Icon | ic / status on | 6002:11973 | 業務員狀態指示器 |
| Logo | logo-tmnewa | 6002:11760 | Header 中的公司 Logo |
| Typography | Title/Title 18, 20, 24, 32 | (System) | 各類標題與文字大小 |
| Color Palette | (自 Fill 變數推導) | (System) | 白色 (#FFFFFF), 藍色 (#05A0C0), 灰色等 |

---

> 📌 **狀態**：Draft  
> 📌 **要求審閱章節**：Section 2 (元件拆分), Section 3 (互動行為), Section 6 (Open Questions)  
> 📌 **審閱完成後**：回覆「Approve」，待交接給下游 Agent
