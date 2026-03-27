<script setup lang="ts">
// Figma: 9714:25887/25914/25927/9865:4038 | AnalysisTableSubRow (自訂FRAME)
// Title 16 #475354 (name), Body 14 #475354 (data) — fixed sub-row style (confirmed Q6)
// padding: 12px 22px 20px, gap:28px
// hasAlert: whether right ic/alert_risk is visible
import type { InsuranceItem } from '../../../types'

const props = defineProps<{
  item: InsuranceItem
}>()

function formatNumber(n: number): string {
  return n.toLocaleString('zh-TW')
}
</script>

<template>
  <!-- Figma: Sub row | padding:12px 22px 20px, gap:28px | ALL cells #475354 (fixed sub-row style) -->
  <div class="analysis-table-sub-row">
    <div class="analysis-table-sub-row__row">
      <!-- Figma: cat frame | w:192 | 24px placeholder (indentation) + name w:76 -->
      <div class="analysis-table-sub-row__cat">
        <!-- Indent placeholder: 24px (left ic/alert_risk space = visual indent) -->
        <span class="analysis-table-sub-row__indent" aria-hidden="true">
          <!-- alert icon if present — sub-rows can show alert (e.g. 個傷) -->
          <svg v-if="item.hasAlert" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L2 20H22L12 3Z" stroke="#E03636" stroke-width="1.5" fill="none"/>
            <rect x="11" y="8.5" width="2" height="7" rx="1" fill="#E03636"/>
            <rect x="11" y="17" width="2" height="2" rx="1" fill="#E03636"/>
          </svg>
          <span v-else style="display:inline-block;width:24px;height:24px;" />
        </span>
        <span class="analysis-table-sub-row__name">{{ item.name }}</span>
      </div>
      <!-- Figma: all data cells | Body 14 #475354 -->
      <span class="analysis-table-sub-row__cell analysis-table-sub-row__cell--w92">
        {{ formatNumber(item.premium) }}
      </span>
      <span class="analysis-table-sub-row__cell analysis-table-sub-row__cell--w92">
        {{ formatNumber(item.claimAmount) }}
      </span>
      <span class="analysis-table-sub-row__cell analysis-table-sub-row__cell--w70">
        {{ item.lossRatio }}
      </span>
      <span class="analysis-table-sub-row__cell analysis-table-sub-row__cell--w92">
        {{ formatNumber(item.policyCount) }}
      </span>
      <span class="analysis-table-sub-row__cell analysis-table-sub-row__cell--w92">
        {{ formatNumber(item.customerCount) }}
      </span>
      <span class="analysis-table-sub-row__cell analysis-table-sub-row__cell--w92">
        {{ formatNumber(item.claimCount) }}
      </span>
      <span class="analysis-table-sub-row__cell analysis-table-sub-row__cell--w80">
        {{ item.claimRate }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.analysis-table-sub-row {
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 22px 20px;
    gap: 28px;
  }

  &__cat {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 192px;
    flex-shrink: 0;
  }

  &__indent {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &__name {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500; // Title 16
    font-size: 16px;
    line-height: 1.5em;
    color: #475354; // Fixed sub-row style (confirmed Q6)
    width: 76px;
    flex-shrink: 0;
  }

  &__cell {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400; // Body 14
    font-size: 14px;
    line-height: 1.5em;
    color: #475354; // Fixed sub-row style (confirmed Q6)
    flex-shrink: 0;
    text-align: right;

    &--w92 { width: 92px; }
    &--w70 { width: 70px; }
    &--w80 { width: 80px; }
  }
}
</style>
