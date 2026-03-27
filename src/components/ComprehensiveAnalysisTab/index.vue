<script setup lang="ts">
// Figma: 9714:25874 | ComprehensiveAnalysisTab | column, gap:30px
// Contains: Title set + DateSelectSet, BulletPointScope, Metrics row, AnalysisTable
import { ref } from 'vue'
import DateSelectSet from './DateSelectSet.vue'
import BulletPointScope from './BulletPointScope.vue'
import MetricCard from './MetricCard.vue'
import AnalysisTable from './AnalysisTable/index.vue'
import type { MetricData, InsuranceGroup, DateRangeOption, ScopeDescription } from '../../types'
import { DATE_RANGE_OPTIONS } from '../../types'

const props = defineProps<{
  metrics: MetricData[]
  groups: InsuranceGroup[]
  scope: ScopeDescription
}>()

const emit = defineEmits<{
  (e: 'date-change', value: DateRangeOption): void
}>()

const selectedRange = ref<DateRangeOption>(DATE_RANGE_OPTIONS[0]!)

function onDateChange(val: DateRangeOption) {
  selectedRange.value = val
  emit('date-change', val)
}
</script>

<template>
  <!-- Figma: 9714:25874 | Agent outer div | column, gap:30px -->
  <div class="comprehensive-analysis-tab">
    <!-- Figma: 9714:25875 | Title set | row, space-between, width:1140, pb:20px -->
    <div class="comprehensive-analysis-tab__title-set">
      <!-- Figma: 9714:25876 | "整體綜合表現" | Title 24 #172122 -->
      <h2 class="comprehensive-analysis-tab__title">整體綜合表現</h2>
      <!-- Figma: 9714:25878 | DateSelectSet -->
      <DateSelectSet
        v-model="selectedRange"
        @change="onDateChange"
      />
    </div>

    <!-- Figma: 9714:25879 | BulletPointScope -->
    <BulletPointScope :scope="scope" />

    <!-- Figma: 9714:25880 | Metrics row | row, gap:16px, pb:20px -->
    <div class="comprehensive-analysis-tab__metrics">
      <MetricCard
        v-for="metric in metrics"
        :key="metric.mainLabel"
        :metric="metric"
      />
    </div>

    <!-- Figma: 9714:25883 | AnalysisTable -->
    <AnalysisTable :groups="groups" />
  </div>
</template>

<style lang="scss" scoped>
.comprehensive-analysis-tab {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  &__title-set {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1140px;
    padding-bottom: 20px;
    border-bottom: 1px solid #c4eae7; // visual separator below title row (Figma pb:20px implies spacing)
  }

  &__title {
    margin: 0;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5em;
    color: #172122;
  }

  &__metrics {
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding-bottom: 20px;
  }
}
</style>
