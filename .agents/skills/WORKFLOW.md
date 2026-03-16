# Frontend AI Workflow 操作手冊

> 適用對象：操作 `ai-pm → vue3-layout → logic-coder` 工作流的前端工程師
> 版本：v1.0

---

## 整體流程一覽

```
[你] 提供 User Story + Figma + OpenAPI
        ↓
[ai-pm]  逆向推導規格，產出 draft-spec.md
        ↓
[斷點 A] 你審閱草稿，回覆「Approve」
        ↓
[vue3-layout]  依 spec.md + Figma 切出純展示元件
        ↓
[斷點 B] 你預覽畫面，回覆「Continue」
        ↓
[logic-coder]  注入 API 邏輯、狀態管理
        ↓
[你] 取得 diff 摘要，進行 code review
```

一次完整執行大約涉及 **2 個人工確認點**（斷點 A / B）。每個斷點都是你可以修正方向的機會，不需要一次給完美的輸入。

---

## 事前準備

在啟動 workflow 前，確認以下三項是否就緒：

| 項目 | 說明 | 若沒有… |
|---|---|---|
| **User Story** | 一段口語描述即可，不需正式格式 | 先用一句話描述「使用者要做什麼」 |
| **Figma 連結** | 需包含主要流程的畫面，Node ID 最好能對應到元件 | 先提供設計稿，ai-pm 會告訴你缺什麼 |
| **OpenAPI / Swagger URL** | 可存取的 API 文件網址 | 若無 API，logic-coder 有 mock 模式可替代 |

> **Figma 或 OpenAPI 缺少其中一項**：ai-pm 會輸出 `blocked` 狀態並明確告知缺少什麼，等你補齊後重新提供即可，不會亂推導。

---

## Step 1：啟動 ai-pm

**你要做的事**：把 User Story、Figma 連結、OpenAPI URL 貼給 Claude。

**觸發範例**：

```
我要做「理賠紀錄列表」功能，目前 PM 沒給規格。

User Story：保戶可以在個人專區查看所有歷史理賠紀錄，包含狀態與金額。
Figma：https://www.figma.com/file/AbCdEf/insurance-portal?node-id=123:456
Swagger：https://api.example.com/swagger/v1/swagger.json
```

**ai-pm 會做的事**：

1. 解析 Figma 畫面結構（元件、Node ID、互動線索）
2. 解析 OpenAPI 文件（endpoint、欄位型別、錯誤碼）
3. 對齊畫面與 API，標記無法確認的部分
4. 產出 `draft-spec.md`（共 8 個章節）
5. **暫停，等你 Approve**

---

## 斷點 A：審閱 draft-spec.md

這是整個 workflow 最重要的人工介入點。你在這裡確認的內容，會直接影響後續兩個 Agent 的產出品質。

### 重點審閱四個章節

**Section 2 — 元件拆分建議**

確認 AI 建議的元件切分是否符合你的 repo 慣例：

- Base Component 的命名是否與現有元件衝突？
- Container / Presentational 的切分點合理嗎？
- 有沒有建議新建但其實可以複用現有元件的情況？

**Section 3 — 互動行為說明**

確認所有互動點都有被涵蓋：

- Loading / Empty / Error 三種狀態的 UI 呈現是否完整？
- 有沒有 Figma 中明確標示但 AI 漏掉的互動？
- Edge case（例如同時發多個 request、快速切換）是否需要在這裡說明？

**Section 4 — 欄位與資料型別定義**

這是最容易出錯的地方，務必對照後端 API 文件確認：

- 欄位命名是 camelCase 還是 snake_case？（AI 會直接照 OpenAPI 格式，但要確認）
- Enum 值是否與後端一致？（AI 通常會標記 `[Assumption]`）
- 有沒有前端需要格式化的欄位？（例如日期、金額千分位）

**Section 8 — Open Questions**

逐一處理 AI 列出的待決策項目。常見問題：

- 分頁是否需要？每頁幾筆？
- 某個操作需要二次確認 Modal 嗎？
- 某個 UI 行為是前端控制還是 API 回傳？

### 如何回覆

**確認沒問題**：

```
Approve
```

**需要修改再繼續**：

```
Section 4 的 claim_status enum 值要改：
- pending → PENDING
- approved → APPROVED
- rejected → REJECTED

Section 8 的分頁問題：需要分頁，每頁 20 筆。

修改後請繼續。
```

**需要重新推導**：

```
Figma 連結有誤，重新提供：https://...
```

收到你的 Approve 後，ai-pm 會輸出交接 payload，你接著啟動 vue3-layout。

---

## Step 2：啟動 vue3-layout

**你要做的事**：把斷點 A 的 payload 貼給 Claude，或直接說「請繼續切版」。

**觸發範例**：

```
請根據 spec.md 開始切版。
```

或貼上 ai-pm 輸出的 payload：

```json
{
  "spec_path": "spec.md",
  "figma_node_ids": ["123:456", "123:470"],
  "approved_by": "human",
  "status": "approved"
}
```

**vue3-layout 會做的事**：

1. 讀取 spec.md 與 Figma 設計稿
2. 解讀版面結構、色彩、間距、互動點
3. 輸出解讀摘要（讓你確認理解是否正確）
4. 建立 Vue 3 + SCSS 純展示元件（Dumb Components）
5. **暫停，輸出預覽指令，等你 Continue**

**vue3-layout 的限制**（它不會做的事）：

- 不會加入 API 呼叫
- 不會加入 Pinia store 或 composable 邏輯
- 不會做資料 mapping

這些都留給 logic-coder。

---

## 斷點 B：視覺預覽確認

vue3-layout 完成後會輸出：

```
元件切版完成，請查看本地預覽。
建議命令：npm run storybook
（若未建置 Storybook，改用 npm run dev 指定路由）

確認後請輸入 Continue，以交接 UI 元件路徑給下一個 Agent。
```

### 你要做的事

1. 執行建議的預覽指令
2. 對照 Figma 確認以下項目：

| 確認項目 | 說明 |
|---|---|
| 版面結構 | 元件排列是否與設計稿一致？ |
| 響應式斷點 | Mobile / Tablet / Desktop 是否都正確？ |
| 互動點 | 按鈕、表單等互動元素是否有對應的 props / emits？ |
| 命名規範 | 元件命名是否符合 repo 現有慣例？ |

### 如何回覆

**確認沒問題**：

```
Continue
```

**需要調整**：

```
ClaimCard 的金額欄位要靠右對齊，請修正後再 Continue。
```

**元件命名需修改**：

```
StatusBadge 在我們 repo 裡已有同名元件，請改名為 ClaimStatusBadge。
```

收到你的 Continue 後，vue3-layout 會輸出交接 payload，你接著啟動 logic-coder。

---

## Step 3：啟動 logic-coder

**你要做的事**：把斷點 B 的 payload 貼給 Claude，或直接說「請繼續實作邏輯」。

**觸發範例**：

```
請根據以下 payload 繼續實作 API 邏輯：
```

```json
{
  "spec_path": "spec.md",
  "component_paths": [
    "src/components/ClaimCard/index.vue",
    "src/components/ClaimRecordsList/index.vue"
  ],
  "figma_node_ids": ["123:456"],
  "preview_verified": true,
  "approved_by": "human"
}
```

**若沒有 API 可串**，直接說：

```
目前沒有 API，請用 mock 資料實作，我之後再替換。
```

logic-coder 會推導 mock 資料結構並等你確認（這是一個小型的內嵌斷點，見下方）。

**logic-coder 會做的事**：

1. 建立 TypeScript 型別定義（`types/`）
2. 建立 Service 層（`services/`）或 Mock Service
3. 建立 Composable（`composables/`）含 loading / error 處理
4. 建立 Container 元件（注入邏輯，傳 props 給展示元件）
5. 輸出 `modified_files` 與 `diff_summary`

### 無 API 時的資料結構確認（內嵌斷點）

若你沒有提供 API，logic-coder 會推導候選資料結構並暫停：

```
⏸ 斷點：資料結構確認

我推導出以下 API Response 結構，請確認或修正：
...
確認後請輸入 OK，或直接修正欄位。
```

回覆 `OK` 或修正欄位後繼續。

---

## Step 4：Code Review

logic-coder 完成後會輸出：

```json
{
  "modified_files": ["src/types/claim.ts", "src/services/claimService.ts", ...],
  "diff_summary": {
    "new_files": [...],
    "modified_files": [...],
    "untouched_files": ["ClaimCard/index.vue（展示元件，未動）"]
  },
  "status": "completed"
}
```

### Code Review 重點

| 確認項目 | 說明 |
|---|---|
| 展示元件未被污染 | `untouched_files` 中的展示元件 template / SCSS 不應有修改 |
| 錯誤處理完整 | `catch` 區塊不能是空的，4xx / 5xx 要分開處理 |
| Loading / Empty 狀態 | Container 中三個狀態都有對應 `v-if` / `v-else` |
| Type 覆蓋率 | 不應有 `any`，API response 需有對應 interface |
| Mock 可切換 | 若使用 mock，`VITE_MOCK_MODE=true` 應可快速切換 |

---

## 常見問題

**Q：我可以跳過斷點 A 直接讓 ai-pm 繼續嗎？**

不建議。斷點 A 的目的是讓你確認 Assumption 和 Open Questions，跳過的話後續兩個 Agent 可能基於錯誤假設建立程式碼，修改成本反而更高。

**Q：vue3-layout 切出來的元件命名跟我 repo 慣例不同怎麼辦？**

在斷點 B 時直接告知，vue3-layout 會調整後再輸出 Continue payload。不需要手動改檔案。

**Q：logic-coder 修改了展示元件的 template，正常嗎？**

不正常。展示元件（Dumb Components）的 template / SCSS 應該保持不動。若有修改，在 code review 時標記並請 logic-coder 還原。

**Q：整個 workflow 跑到一半，我想改 spec 怎麼辦？**

- 若還在斷點 A：直接修改並重新 Approve
- 若已過斷點 B：告知 logic-coder 你的修改，它會更新 diff_summary
- 若已完成：視修改範圍決定要重跑哪個 Agent

**Q：沒有 Figma，只有口頭描述可以跑嗎？**

ai-pm 需要 Figma 作為輸入之一，會輸出 `blocked`。但你可以先跳過 ai-pm，直接手寫一份簡化的 spec.md，再從 vue3-layout 開始。

---

## 快速觸發詞彙對照

| 你想做的事 | 說這個 |
|---|---|
| 從頭開始，沒有 spec | 「PM 沒給規格，幫我從 Figma 推」 |
| 只要切版，已有 spec | 「請根據 spec.md 開始切版」 |
| 只要加邏輯，已有元件 | 「幫我串 API，元件在 component_paths」 |
| 沒有 API，先用 mock | 「目前沒有 API，請用 mock 資料實作」 |
| 重新推導資料結構 | 「請重新推導 mock 結構，上次的有誤」 |

---

> 文件對應 Skill 版本：`ai-pm v1.0`、`vue3-layout v1.0`、`logic-coder v1.0`
> 如 Skill 有更新，請確認斷點格式是否仍一致。