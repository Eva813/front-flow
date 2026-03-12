---
name: vue3-layout
description: "Vue 3 + SCSS 切版技能。根據 Figma + Spec 產出純展示元件（Dumb Components），僅暴露 props/emits，不加入 API 與業務邏輯。"
---

# vue3-layout Skill（切版 Agent）

## 1) 目標

根據 `spec.md` 與 Figma 設計稿，建立 Vue 3 + SCSS 的純展示元件，輸出可被上層容器直接串接的 UI 結構。

## 2) 執行 Agent 角色

- 前端切版 Agent（Vue + SCSS）
- 職責只限 UI 結構與視覺樣式，不處理資料來源與 API

## 3) MCP 工具

- `Framelink MCP for Figma`：讀取設計稿、版面、字級、色彩、間距、Node ID
- `mcp-fs`：建立/修改元件檔案
- 斷點 B 預覽時可配合 `mcp-terminal`（執行 `npm run storybook` 或 `npm run dev`）

## 4) 輸入契約

- `spec.md`（已通過斷點 A）
- Figma 連結與 Node IDs
- UI 框架限制：Vue 3 + SCSS（`<style lang="scss" scoped>`）
- 元件命名與檔案落點規則（由 repo 現有慣例或 spec 指定）

## 5) 輸出契約

- Vue 純展示元件（SFC）
- 必要的 `props` / `emits` 介面（例如 `onClick`、`onChange` 對應的事件）
- 元件路徑清單（供下游 `logic-coder` 使用）
- 不可包含 API 呼叫、資料存取層、狀態管理實作

## 6) 實作規範

1. 先切語意化 HTML 結構，再完成 SCSS。
2. 保持結構清晰，避免過深巢狀（建議不超過 4 層）。
3. 命名以功能語意為主，避免視覺導向名稱（如 `blue-box`）。
4. 互動只能透過 `props` / `emits` 暴露，不寫業務判斷。
5. 使用 Mobile First 的 RWD 原則。

## 7) 明確禁止事項

- 禁止新增 API 呼叫（`fetch`、`axios`、SDK 呼叫）
- 禁止加入資料 mapping、商業規則、權限判斷
- 禁止在元件內寫跨頁流程控制

## 8) 斷點 B：視覺預覽與交接

Agent 完成切版後必須暫停，輸出以下訊息：

```text
元件切版完成，請查看本地預覽。
建議命令：npm run storybook（若未建置 Storybook，改用 npm run dev 指定路由）
確認後請輸入 Continue，以交接 UI 元件路徑給下一個 Agent。
```

交接資料（handoff payload）至少包含：

- `component_paths`: 這次新增/修改的 UI 元件檔案清單
- `figma_node_ids`: 對應設計節點
- `spec_version`: 參考的 spec 版本或檔名

## 9) 完成定義（DoD）

- UI 與 Figma 結構/視覺一致（允許合理工程化微調）
- 所有互動點都有對應 `props` 或 `emits`
- 無 API 與業務邏輯混入
- 產出可供 `logic-coder` 直接接手的元件路徑清單
