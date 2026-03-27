<script setup lang="ts">
// Figma: 9714:25881/25882 | MetricCard | ComponentSet 9714:24869
// Outer: border #A3D6E0, br:20px, shadow
// Inner plate: bg #EDF7F9, padding:16px 20px, height:168px fixed
import type { MetricData } from '../../types'

const props = defineProps<{
  metric: MetricData
}>()

function formatNumber(n: number): string {
  return n.toLocaleString('zh-TW')
}
</script>

<template>
  <!-- Figma: 9714:25881 | Metric card outer | border:#A3D6E0, br:20px, shadow -->
  <div class="metric-card">
    <!-- Figma: Inner plate | bg:#EDF7F9, padding:16px 20px, height:168px -->
    <div class="metric-card__plate">
      <!-- Figma: I9714:25881;6222:375 | Number set | column, gap:4, width:250 -->
      <div class="metric-card__number-set">
        <!-- Figma: mainLabel | Title 16 #172122 -->
        <span class="metric-card__main-label">{{ metric.mainLabel }}</span>
        <!-- Figma: mainValue | Title 28 #172122 -->
        <span class="metric-card__main-value">{{ formatNumber(metric.mainValue) }}</span>
      </div>
      <!-- Figma: I9714:25881;6222:387 | Des set_multi | column gap:2 -->
      <div class="metric-card__des-set">
        <!-- Des set 1 (visible): subLabel + subCount + percentage -->
        <div class="metric-card__des-row">
          <!-- Figma: subLabel | Body 16 #172122 -->
          <span class="metric-card__sub-label">{{ metric.subLabel }}</span>
          <!-- Figma: subCount | Body 16 #172122 (理賠件數 confirmed) -->
          <span class="metric-card__sub-count">{{ formatNumber(metric.subCount) }}</span>
        </div>
        <div class="metric-card__des-row">
          <span class="metric-card__percentage">{{ metric.percentage }}</span>
        </div>
        <!-- Des set 2: opacity:0 in Figma → hidden -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.metric-card {
  border: 1px solid #a3d6e0;
  border-radius: 20px;
  box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);
  overflow: hidden;

  &__plate {
    background-color: #edf7f9;
    padding: 16px 20px;
    height: 168px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
  }

  &__number-set {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__main-label {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
  }

  &__main-value {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 1.5em;
    color: #172122;
  }

  &__des-set {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__des-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  &__sub-label,
  &__sub-count {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
  }

  &__percentage {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
  }
}
</style>
