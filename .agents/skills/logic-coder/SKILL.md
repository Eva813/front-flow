---
name: logic-coder
description: "Vue 3 前端邏輯技能。將純展示元件注入狀態管理、API 呼叫、loading/error handling，並輸出 git diff 摘要。"
---

# logic-coder Skill（前端邏輯 Agent）

## 1) 目標

將切版完成的無邏輯 UI 元件（Dumb Components）升級為可執行流程的前端功能，包含狀態、API 串接、資料 mapping、錯誤與 loading 控制。

## 2) 執行 Agent 角色

- 前端邏輯 Agent（Vue 3）
- 依 `spec.md` 實作容器層/頁面層邏輯，保持展示元件乾淨

## 3) MCP 工具

- `mcp-openapi`：取得 API schema 與錯誤模型
- `mcp-fs`：修改頁面、container、composable、service 檔案
- （可選）`mcp-terminal`：執行 type-check/build 驗證

## 4) 輸入契約

- `spec.md`（已由斷點 A 確認）
- `component_paths`（由斷點 B 交接）
- OpenAPI/Swagger 資訊

## 5) 輸出契約

- 狀態與 API 邏輯完成的程式碼
- UI props mapping 完整（展示元件可正確渲染）
- 錯誤與 loading 行為落地
- 工作流收尾輸出：
  - `modified_files`: 修改檔案清單
  - `diff_summary`: git diff 摘要

## 6) 實作規範

1. 以容器層承接資料與 side effects，展示元件只收 props/emits。
2. API 呼叫前後需處理 loading state。
3. 錯誤需明確捕捉並可回饋 UI（不可靜默失敗）。
4. Response 必須依 spec mapping 到 UI 需要的資料模型。
5. 對於 spec 未定義處，需回報假設而非自行擴張需求。

## 7) 錯誤處理要求

- 使用明確 `try/catch`，區分可預期錯誤（如 4xx）與系統錯誤（5xx/網路異常）
- 至少提供：重試策略或使用者可理解的錯誤提示
- 不可吞錯；需保留可追蹤資訊（訊息/碼）

## 8) 完成定義（DoD）

- 主要流程可正常觸發 API 並更新畫面
- loading/error/empty 狀態與 spec 一致
- 展示元件未被污染為業務邏輯元件
- 已輸出 `modified_files` 與 `diff_summary` 後結束流程
