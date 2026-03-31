<script setup lang="ts">
import type { AnalysisTableProps } from './types'
import AnalysisTableHead from './AnalysisTableHead.vue'
import AnalysisTableRow from './AnalysisTableRow.vue'

defineProps<AnalysisTableProps>()
</script>

<template>
  <div class="analysis-table">
    <AnalysisTableHead />
    <div class="analysis-table__body">
      <AnalysisTableRow
        v-for="(row, index) in rows"
        :key="index"
        v-bind="row"
      />
    </div>
    <!-- Vertical separator line -->
    <div class="analysis-table__separator" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.analysis-table {
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  position: relative;

  &__body {
    display: flex;
    flex-direction: column;
  }

  &__separator {
    position: absolute;
    left: 227px;
    top: 0;
    bottom: 60px;
    width: 0;
    border-left: 1px solid $divider;
  }
}
</style>
