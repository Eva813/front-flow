<script setup lang="ts">
// Figma: 9714:25900/9865:3726 | AnalysisTableLastSubRow
// ComponentSet 10460:4871, Type=険種_last
// Same as SubRow but WITH group-ending divider (群組分隔線)
import type { InsuranceItem } from '../../../types'

const props = defineProps<{
  item: InsuranceItem
}>()

function formatNumber(n: number): string {
  return n.toLocaleString('zh-TW')
}
</script>

<template>
  <!-- Figma: Type=険種_last | SubRow content + group-ending Divider LINE -->
  <div class="analysis-table-last-sub-row">
    <div class="analysis-table-last-sub-row__row">
      <!-- cat frame | w:192 -->
      <div class="analysis-table-last-sub-row__cat">
        <span class="analysis-table-last-sub-row__indent" aria-hidden="true">
          <span style="display:inline-block;width:24px;height:24px;" />
        </span>
        <span class="analysis-table-last-sub-row__name">{{ item.name }}</span>
      </div>
      <span class="analysis-table-last-sub-row__cell analysis-table-last-sub-row__cell--w92">
        {{ formatNumber(item.premium) }}
      </span>
      <span class="analysis-table-last-sub-row__cell analysis-table-last-sub-row__cell--w92">
        {{ formatNumber(item.claimAmount) }}
      </span>
      <span class="analysis-table-last-sub-row__cell analysis-table-last-sub-row__cell--w70">
        {{ item.lossRatio }}
      </span>
      <span class="analysis-table-last-sub-row__cell analysis-table-last-sub-row__cell--w92">
        {{ formatNumber(item.policyCount) }}
      </span>
      <span class="analysis-table-last-sub-row__cell analysis-table-last-sub-row__cell--w92">
        {{ formatNumber(item.customerCount) }}
      </span>
      <span class="analysis-table-last-sub-row__cell analysis-table-last-sub-row__cell--w92">
        {{ formatNumber(item.claimCount) }}
      </span>
      <span class="analysis-table-last-sub-row__cell analysis-table-last-sub-row__cell--w80">
        {{ item.claimRate }}
      </span>
    </div>
    <!-- Figma: 群組分隔線 | LINE stroke:#C4EAE7 | marks end of a sub-row group -->
    <div class="analysis-table-last-sub-row__group-divider" aria-hidden="true" />
  </div>
</template>

<style lang="scss" scoped>
.analysis-table-last-sub-row {
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
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &__name {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;
    color: #475354;
    width: 76px;
    flex-shrink: 0;
  }

  &__cell {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5em;
    color: #475354;
    flex-shrink: 0;
    text-align: right;

    &--w92 { width: 92px; }
    &--w70 { width: 70px; }
    &--w80 { width: 80px; }
  }

  // GROUP-ending divider (thicker visual separation between groups)
  &__group-divider {
    width: 100%;
    height: 1px;
    background-color: #c4eae7;
  }
}
</style>
