<script setup lang="ts">
// Figma: 9714:25883 | AnalysisTable (Frame 227)
// column, pb:60px, total width:1140px
// Contains: TableHead + rows (parent rows + optional sub-rows)
// Vertical divider line: absolute x:227, h:644px, stroke #C4EAE7
import AnalysisTableHead from './AnalysisTableHead.vue'
import AnalysisTableParentRow from './AnalysisTableParentRow.vue'
import AnalysisTableSubRow from './AnalysisTableSubRow.vue'
import AnalysisTableLastSubRow from './AnalysisTableLastSubRow.vue'
import type { InsuranceGroup } from '../../../types'

const props = defineProps<{
  groups: InsuranceGroup[]
}>()
</script>

<template>
  <!-- Figma: 9714:25883 | Frame 227 | column, pb:60px, width:1140px, position:relative -->
  <div class="analysis-table">
    <!-- Figma: 9714:25884 | Table head -->
    <AnalysisTableHead />

    <!-- Figma: 9714:25940 | 垂直骨架線 | absolute x:227, h:644px, stroke #C4EAE7 -->
    <!-- Positioned after head so it sits over the rows area -->
    <div class="analysis-table__v-line" aria-hidden="true" />

    <!-- Rows: iterate groups, each group = parent row (+ optional sub-rows) -->
    <template v-for="group in groups" :key="group.groupName">
      <!-- Parent row: withDivider=true if standalone (no sub-items), false otherwise -->
      <AnalysisTableParentRow
        :group="group"
        :withDivider="!group.items || group.items.length === 0"
      />
      <!-- Sub rows: only if group has children -->
      <template v-if="group.items && group.items.length > 0">
        <template v-for="item in group.items" :key="item.name">
          <!-- Last sub-row in group gets group-ending divider -->
          <AnalysisTableLastSubRow
            v-if="item.isLastInGroup"
            :item="item"
          />
          <AnalysisTableSubRow
            v-else
            :item="item"
          />
        </template>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.analysis-table {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1140px;
  padding-bottom: 60px;
  box-sizing: border-box;

  // Figma: 9714:25940 | 垂直骨架線 | absolute x:227, h:644px, stroke #C4EAE7
  &__v-line {
    position: absolute;
    top: 44px; // below table head (~44px: 12+1.5+12+... approx header height)
    left: 227px;
    width: 1px;
    height: 644px;
    background-color: #c4eae7;
    pointer-events: none;
    z-index: 1;
  }
}
</style>
