<script setup lang="ts">
// Figma: 9714:25885/25886/25901/25902 | AnalysisTableParentRow
// ComponentSet 10460:4871, Type=険別
// height:63px fixed, padding:20px 22px, gap:28px
// Title 18 #172122, Body 16 #172122
// showAlert: right ic/alert_risk visible; left ic/alert_risk opacity:0 (padding placeholder)
// withDivider: true for 任意車險/工程險 (standalone parents), false for A&H (has sub-rows)
import type { InsuranceGroup } from '../../../types'

const props = defineProps<{
  group: InsuranceGroup
  withDivider?: boolean
}>()

function formatNumber(n: number): string {
  return n.toLocaleString('zh-TW')
}
</script>

<template>
  <!-- Figma: layout_FZXQLT | column, height:63px fixed (Row + optional Divider) -->
  <div class="analysis-table-parent-row">
    <!-- Figma: Row | padding:20px 22px, gap:28px -->
    <div class="analysis-table-parent-row__row">
      <!-- Figma: cat frame | w:192, gap:8 -->
      <div class="analysis-table-parent-row__cat">
        <!-- Figma: left ic/alert_risk | opacity:0 when no alert (padding placeholder) -->
        <span class="analysis-table-parent-row__alert-placeholder" aria-hidden="true">
          <svg v-if="group.hasAlert" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L2 20H22L12 3Z" stroke="#E03636" stroke-width="1.5" fill="none"/>
            <rect x="11" y="8.5" width="2" height="7" rx="1" fill="#E03636"/>
            <rect x="11" y="17" width="2" height="2" rx="1" fill="#E03636"/>
          </svg>
          <span v-else style="display:inline-block;width:24px;height:24px;" />
        </span>
        <!-- Figma: category name | Title 18 #172122 | w:76 -->
        <span class="analysis-table-parent-row__name">{{ group.groupName }}</span>
      </div>
      <!-- Figma: 保費 | w:92 | Body 16 #172122 -->
      <span class="analysis-table-parent-row__cell analysis-table-parent-row__cell--w92">
        {{ formatNumber(group.premium) }}
      </span>
      <!-- 理賠金額 -->
      <span class="analysis-table-parent-row__cell analysis-table-parent-row__cell--w92">
        {{ formatNumber(group.claimAmount) }}
      </span>
      <!-- 簽單損率 -->
      <span class="analysis-table-parent-row__cell analysis-table-parent-row__cell--w70">
        {{ group.lossRatio }}
      </span>
      <!-- 保單數 -->
      <span class="analysis-table-parent-row__cell analysis-table-parent-row__cell--w92">
        {{ formatNumber(group.policyCount) }}
      </span>
      <!-- 客戶數 -->
      <span class="analysis-table-parent-row__cell analysis-table-parent-row__cell--w92">
        {{ formatNumber(group.customerCount) }}
      </span>
      <!-- 賠案數 -->
      <span class="analysis-table-parent-row__cell analysis-table-parent-row__cell--w92">
        {{ formatNumber(group.claimCount) }}
      </span>
      <!-- 客戶出險率 -->
      <span class="analysis-table-parent-row__cell analysis-table-parent-row__cell--w80">
        {{ group.claimRate }}
      </span>
    </div>
    <!-- Figma: Divider | LINE stroke:#C4EAE7 | shown for standalone parent rows (任意車險, 工程險) -->
    <div v-if="withDivider" class="analysis-table-parent-row__divider" aria-hidden="true" />
  </div>
</template>

<style lang="scss" scoped>
.analysis-table-parent-row {
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 22px;
    gap: 28px;
    min-height: 63px; // Figma: height:63px fixed
    box-sizing: border-box;
  }

  &__cat {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 192px;
    flex-shrink: 0;
  }

  &__alert-placeholder {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &__name {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500; // Title 18
    font-size: 18px;
    line-height: 1.5em;
    color: #172122;
    width: 76px;
    flex-shrink: 0;
  }

  &__cell {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400; // Body 16
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
    flex-shrink: 0;
    text-align: right;

    &--w92 { width: 92px; }
    &--w70 { width: 70px; }
    &--w80 { width: 80px; }
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: #c4eae7;
  }
}
</style>
