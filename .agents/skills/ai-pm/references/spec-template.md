# Spec Template 填寫範例

以下是一份完整的 `draft-spec.md` 範例，以「理賠紀錄列表」功能為例。
ai-pm Agent 在產出時應以此為格式對照基準。

---

# Draft Spec：理賠紀錄列表（ClaimRecords）

> 產生時間：2024-01-20
> 狀態：Draft — 待工程師審閱
> Figma：https://www.figma.com/file/AbCdEf/insurance-portal?node-id=123:456
> OpenAPI：https://api.example.com/swagger/v1/swagger.json

---

## 1. 功能範圍與流程摘要

**功能目標**：保戶可以在個人專區查看所有歷史理賠申請紀錄，包含狀態追蹤與金額資訊。

**涵蓋頁面**：
- `/claims` — 理賠紀錄列表頁

**明確排除**：
- 新增理賠申請（另有獨立流程）
- 理賠詳情頁（本次 spec 只處理列表）
- 管理後台的理賠審核操作

**主要流程**：進入頁面 → API 取得列表 → 顯示卡片列表 → 點擊「查看詳情」導至詳情頁

---

## 2. 元件拆分建議  ← 工程師重點審閱

| 元件名稱 | Figma Node ID | 層級 | 可重用性 | 說明 |
|---|---|---|---|---|
| ClaimRecordsContainer | — | Container | 頁面專屬 | 負責 API 呼叫、loading/error 控制，傳 props 給列表 |
| ClaimRecordsList | 123:460 | Feature | 頁面專屬 | 接收 items 陣列，渲染卡片清單 |
| ClaimCard | 123:470 | Base | 跨頁可重用 | 單筆理賠紀錄展示，含狀態 badge 與金額 |
| StatusBadge | 123:480 | Base | 跨頁可重用 | 狀態標籤（pending/approved/rejected），可獨立抽出 |
| EmptyState | 123:490 | Base | 跨頁可重用 | 空資料提示元件，接收 message prop |

> 拆分原則：Container 負責資料與邏輯，Presentational 只接收 props。

---

## 3. 互動行為說明  ← 工程師重點審閱

| 互動點 | 觸發條件 | 預期行為 | 對應 Figma Frame |
|---|---|---|---|
| 進入頁面 | 路由 mounted | 自動呼叫 GET /claims，顯示 loading skeleton | 123:456 |
| 點擊「查看詳情」 | 使用者點擊 ClaimCard 的詳情按鈕 | 導向 `/claims/:id` 詳情頁 | 123:500 |
| 點擊「取消申請」 | 使用者點擊 ClaimCard 的取消按鈕（僅 pending 狀態可見）| [Open Question] 是否需確認 Modal？ | 123:510 |
| 載入失敗 | API 回傳 5xx 或網路異常 | 顯示錯誤提示 + 重試按鈕 | 123:520 |
| 無理賠紀錄 | Response data 為空陣列 | 顯示 EmptyState 元件 | 123:530 |

---

## 4. 欄位與資料型別定義  ← 工程師重點審閱

### 4.1 列表欄位（Response → UI 對應）

| 欄位名稱（API） | 顯示名稱（UI） | 型別 | 說明 | 備註 |
|---|---|---|---|---|
| id | — | string | 理賠紀錄主鍵 | 用於導頁 `/claims/:id` |
| claim_title | 理賠標題 | string | 顯示於卡片標題 | |
| claim_status | 狀態 | enum | 顯示於 StatusBadge | [Assumption] enum 值見下方 |
| claim_amount | 申請金額 | number | 單位：元，顯示時加千分位 | |
| created_at | 申請日期 | string (ISO 8601) | 格式化為 YYYY/MM/DD | |

**claim_status enum 對應**：

| API 值 | UI 顯示文字 | Badge 顏色 |
|---|---|---|
| pending | 審核中 | 黃色 |
| approved | 已核准 | 綠色 |
| rejected | 已拒絕 | 紅色 |

> [Assumption] 以上 enum 值推測與 API 一致，需後端確認。

---

## 5. API 對應表

| 功能 | Method | Endpoint | Request Params | Response 關鍵欄位 | 錯誤碼處理 |
|---|---|---|---|---|---|
| 取得理賠列表 | GET | /v1/claims | page (int), page_size (int) | data: ClaimRecord[], total: int | 401: 重新登入 / 403: 無權限提示 / 5xx: 通用錯誤 |
| 取消理賠申請 | DELETE | /v1/claims/:id | — | — | 400: 狀態不允許取消 / 404: 找不到紀錄 |

---

## 6. State 結構草案

### 6.1 頁面 State

```typescript
interface ClaimListPageState {
  isLoading: boolean      // API 呼叫中
  error: string | null    // 錯誤訊息
  currentPage: number     // 當前分頁（預設 1）
  pageSize: number        // 每頁筆數（預設 20）
  total: number           // 總筆數（來自 API）
}
```

### 6.2 列表資料 State

```typescript
interface ClaimListDataState {
  records: ClaimRecord[]  // 當前頁的理賠紀錄
}
```

### 6.3 衍生 State

```typescript
// 是否顯示空狀態
const isEmpty = computed(() => !isLoading.value && records.value.length === 0)

// 總頁數
const totalPages = computed(() => Math.ceil(total.value / pageSize.value))
```

---

## 7. Loading / Empty / Error 狀態

| 狀態 | 觸發條件 | UI 呈現 | 對應 Figma Node |
|---|---|---|---|
| Loading | API 呼叫中（isLoading: true） | Skeleton 卡片列表（3 筆） | 123:540 |
| Empty | Response data 為空陣列 | EmptyState：「目前沒有理賠紀錄」 | 123:530 |
| Error (401) | 未登入或 token 過期 | 重新導向登入頁（不顯示在列表頁） | — |
| Error (403) | 無查看權限 | 「您沒有查看此資料的權限」提示 | 123:520 |
| Error (5xx) | 系統異常 | 「系統暫時無法使用，請稍後再試」+ 重試按鈕 | 123:520 |

---

## 8. 開放問題與假設  ← 工程師重點審閱

### Assumptions（推測，需確認）

- [Assumption] `claim_status` 的 enum 值（pending/approved/rejected）與 API 文件一致
- [Assumption] 金額單位為新台幣元，無需幣別轉換
- [Assumption] `created_at` 為 ISO 8601 格式字串

### Open Questions（需要人類決策）

- [Open Question] 列表是否需要分頁控制（Pagination）？若是，預設每頁幾筆？
- [Open Question] 「取消申請」操作是否需要二次確認 Modal？還是直接呼叫 API？
- [Open Question] Figma 中 Node 123:510「取消按鈕」只在 `pending` 狀態顯示，這個判斷由前端控制還是 API 回傳？
- [Open Question] 是否需要支援篩選（依狀態）或排序功能？Figma 中未見相關 UI。