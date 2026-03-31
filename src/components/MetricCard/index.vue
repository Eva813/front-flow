<script setup lang="ts">
import type { MetricCardProps } from './types'

const props = defineProps<MetricCardProps>()

function formatNumber(value: number): string {
  return value.toLocaleString('en-US')
}
</script>

<template>
  <div class="metric-card">
    <div class="metric-card__inner">
      <div class="metric-card__content">
        <div class="metric-card__number-set">
          <span class="metric-card__title">{{ props.title }}</span>
          <span class="metric-card__value">{{ formatNumber(props.value) }}</span>
        </div>
        <div class="metric-card__details">
          <div
            v-for="(detail, index) in props.details"
            :key="index"
            class="metric-card__detail"
          >
            <span class="metric-card__detail-label">{{ detail.label }}</span>
            <span class="metric-card__detail-value">{{ formatNumber(detail.value) }}</span>
            <span class="metric-card__detail-unit">{{ detail.unit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.metric-card {
  display: flex;
  gap: 30px;
  padding: 10px;
  border: 1px solid $border-select;
  border-radius: 20px;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px 20px;
    height: 168px;
    background: $surface-light;
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
    align-self: stretch;
    gap: 4px;
  }

  &__title {
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__value {
    font-family: $font-family;
    font-weight: 500;
    font-size: 28px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__detail {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 160px;
  }

  &__detail-label {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-secondary;
  }

  &__detail-value {
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: $text-secondary;
  }

  &__detail-unit {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-secondary;
  }
}
</style>
