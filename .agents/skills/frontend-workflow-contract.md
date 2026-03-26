# Frontend AI Workflow Handoff Contract

本文件定義 `ai-pm → vue3-layout → api-enrichment → logic-coder` 的斷點與交接格式，確保多 Agent 可穩定串接。

## 1) Workflow 概覽

1. **Agent 1 (`ai-pm`)**：輸入 Figma（必填）+ User Story（可選），輸出 `draft-spec.md`
2. **斷點 A（人工）**：工程師審閱/修改草稿，Approve 後產生 `spec.md`
3. **Agent 2 (`vue3-layout`)**：依 `spec.md` + Figma 切出純展示元件
4. **斷點 B（人工）**：工程師預覽（Storybook/DevServer），確認後 Continue
5. **Agent 3 (`api-enrichment`)**：補充 OpenAPI、資料模型、State 結構，輸出 `enriched-spec.md` ⭐️ **新步驟**
6. **Agent 4 (`logic-coder`)**：注入狀態與 API 邏輯，輸出 diff 摘要並結束

## 2) 斷點 A 契約（Spec Handoff）

### A.1 暫停前必備輸出

- `draft-spec.md`（Markdown）— 基於 Figma 的規格，**不含 API 對應表/State 結構**
- `candidate_element_structure` — UI 元件樹（供 vue-layout 參考）
- `pending_data_model_items` — 待補充的資料結構清單（供 api-enrichment 參考）

### A.2 人工操作

- 工程師審閱 spec，確認元件拆分、互動行為、待補充數據模型清單
- 對 Open Questions 給出決策答案（如：狀態值、分頁每頁筆數等）
- 完成後觸發「Approve」

### A.3 交接 payload（A → vue-layout）

```json
{
  "spec_path": "spec.md",
  "figma_node_ids": ["..."],
  "component_structure_notes": ["..."],
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
- 確認後輸入 `Continue` 或聯繫 api-enrichment

### B.3 交接 payload（B → api-enrichment）

```json
{
  "spec_path": "spec.md",
  "component_paths": ["src/components/..."],
  "figma_node_ids": ["..."],
  "preview_verified": true,
  "approved_by": "human"
}
```

---

## 3.5) 斷點 B-C 契約（API Enrichment Handoff）⭐️ 新增

### B-C.1 觸發條件

- vue-layout 完成，工程師預覽確認無誤（斷點 B）
- 手動或自動觸發 api-enrichment Skill，傳入：
  - `spec.md`（來自斷點 A）
  - `api_documentation_url` 或 `api_schema_json`（新提供）
  - Figma 連結（同步設計稿版本）

### B-C.2 api-enrichment 暫停前必備輸出

- `enriched-spec.md`（完整規格，含 API 對應、State 結構、Error 處理）
- `api_mapping_summary` — API 對應表的摘要
- `open_questions_resolved` — 已解決的 Open Questions 清單

### B-C.3 交接 payload（api-enrichment → logic-coder）

```json
{
  "spec_path": "enriched-spec.md",
  "component_paths": ["src/components/..."],
  "figma_node_ids": ["..."],
  "api_endpoints_summary": [{...}],
  "status": "enriched"
}
```

---

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
