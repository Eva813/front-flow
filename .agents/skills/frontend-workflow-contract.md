# Frontend AI Workflow Handoff Contract

本文件定義 `ai-pm -> vue3-layout -> logic-coder` 的斷點與交接格式，確保多 Agent 可穩定串接。

## 1) Workflow 概覽

1. **Agent 1 (`ai-pm`)**：輸入 User Story + Figma + OpenAPI，輸出 `draft-spec.md`
2. **斷點 A（人工）**：工程師審閱/修改草稿，Approve 後產生 `spec.md`
3. **Agent 2 (`vue3-layout`)**：依 `spec.md` + Figma 切出純展示元件
4. **斷點 B（人工）**：工程師預覽（Storybook/DevServer），確認後 Continue
5. **Agent 3 (`logic-coder`)**：注入狀態與 API 邏輯，輸出 diff 摘要並結束

## 2) 斷點 A 契約（Spec Handoff）

### A.1 暫停前必備輸出

- `draft-spec.md`（Markdown）
- `candidate_figma_node_ids`（陣列）
- `open_questions`（陣列）

### A.2 人工操作

- 工程師可增刪改內容（例如略過驗證、改用既有元件）
- 完成後觸發 `Approve`

### A.3 交接 payload（A -> B）

```json
{
  "spec_path": "spec.md",
  "figma_node_ids": ["..."],
  "scope_notes": ["..."],
  "approved_by": "human"
}
```

## 3) 斷點 B 契約（UI Handoff）

### B.1 暫停前必備輸出

- `component_paths`（本次新增/修改的 UI 元件路徑）
- `figma_node_ids`（已對應）
- 預覽提示訊息（Storybook 或 DevServer 指令）

### B.2 人工操作

- 工程師檢查畫面/互動是否符合設計
- 確認後輸入 `Continue`

### B.3 交接 payload（B -> C）

```json
{
  "spec_path": "spec.md",
  "component_paths": ["src/components/..."],
  "figma_node_ids": ["..."],
  "preview_verified": true,
  "approved_by": "human"
}
```

## 4) 最終收尾契約（logic-coder output）

`logic-coder` 結束前必須輸出：

```json
{
  "modified_files": ["src/..."],
  "diff_summary": "human-readable summary",
  "status": "completed"
}
```

## 5) 失敗與重試規則

- 任一 Agent 失敗時，不得靜默；必須輸出 `status: failed` 與 `reason`
- 缺少必要輸入（例如 `spec.md`、`component_paths`）時，狀態標記為 `blocked`
- 重試必須帶上前次失敗上下文（失敗步驟、檔案、錯誤訊息）

## 6) Guardrails

- `vue3-layout` 禁止 API/業務邏輯
- `logic-coder` 不應破壞展示元件純度
- 所有不確定需求都需標記假設，交由人工確認
