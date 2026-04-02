<template>
  <div class="table-head">
    <div class="table-row table-header">
      <div class="table-cell header-cell">險別</div>
      <div class="table-cell header-cell">保費</div>
      <div class="table-cell header-cell">理賠金額</div>
      <div class="table-cell header-cell">簽單損率</div>
      <div class="table-cell header-cell">保單數</div>
      <div class="table-cell header-cell">客戶數</div>
      <div class="table-cell header-cell">賠案數</div>
      <div class="table-cell header-cell">客戶出險率</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableHeadProps } from './types'

withDefaults(defineProps<TableHeadProps>(), {
  columns: () => ['險別', '保費', '理賠金額', '簽單損率', '保單數', '客戶數', '賠案數', '客戶出險率'],
})
</script>

<style scoped lang="scss">
.table-head {
  width: 100%;
  border-top: 1px solid #d9d9d9;
  border-bottom: 2px solid #05a0c0;
  margin-bottom: 8px;

  .table-row {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 0;
  }

  .table-header {
    background: #f5f5f5;
  }

  .header-cell {
    padding: 12px 16px;
    font-family: Noto Sans TC;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5em;
    color: #172122;
    text-align: center;
    border-right: 1px solid #e0e0e0;

    &:last-child {
      border-right: none;
    }
  }
}

.table-cell {
  padding: 12px 16px;
}
</style>
