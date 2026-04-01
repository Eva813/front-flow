<script setup lang="ts">
import type { MetricCardProps } from './types'

defineProps<MetricCardProps>()
</script>

<template>
  <div class="metric-card">
    <div class="metric-card__inner">
      <div class="metric-card__content">
        <div class="metric-card__number-set">
          <span class="metric-card__label">{{ label }}</span>
          <span class="metric-card__value">{{ value }}</span>
        </div>
        <div class="metric-card__desc-set">
          <div class="metric-card__desc-row">
            <span class="metric-card__desc-label">{{ subLabel }}</span>
            <span class="metric-card__desc-value">{{ subValue }}</span>
            <span class="metric-card__desc-unit">{{ subUnit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.metric-card {
  display: flex;
  padding: 10px;
  border: 1px solid #a3d6e0;
  border-radius: 20px;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px 20px;
    height: 168px;
    background: #edf7f9;
    border-radius: 20px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 250px;
  }

  &__number-set {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__label {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
  }

  &__value {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 1.5;
    color: #172122;
  }

  &__desc-set {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__desc-row {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 160px;
  }

  &__desc-label {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #475354;
  }

  &__desc-value {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #475354;
  }

  &__desc-unit {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #475354;
  }
}
</style>
