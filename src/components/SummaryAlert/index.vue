<script setup lang="ts">
import type { SummaryAlertProps } from './types'
import icSummary from '@/assets/icons/ic-summary.svg'

defineProps<SummaryAlertProps>()
</script>

<template>
  <section class="summary-alert">
    <div class="summary-alert__content">
      <img :src="icSummary" alt="Summary" class="summary-alert__icon" />
      <div class="summary-alert__bullets">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="summary-alert__bullet-item"
          :class="{ 'summary-alert__bullet-item--with-sub': item.subText }"
        >
          <div class="summary-alert__bullet-line">
            <span class="summary-alert__dot" />
            <span class="summary-alert__text">{{ item.text }}</span>
          </div>
          <span v-if="item.subText" class="summary-alert__sub-text">{{ item.subText }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.summary-alert {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 24px;
  width: 1260px;
  background: $summary-bg;
  border-radius: 12px;

  &__content {
    display: flex;
    gap: 20px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &__bullets {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__bullet-item {
    display: flex;
    flex-direction: column;

    &--with-sub {
      flex-direction: row;
      align-items: center;
      gap: 6px;
    }
  }

  &__bullet-line {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: $text-primary;
    flex-shrink: 0;
  }

  &__text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__sub-text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: $text-secondary;
  }
}
</style>
