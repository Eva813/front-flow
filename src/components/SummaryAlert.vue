<script setup lang="ts">
import type { SummaryAlertProps } from './types'
import icSummary from '@/assets/icons/ic-summary.svg'

defineProps<SummaryAlertProps>()
</script>

<template>
  <div class="summary-alert">
    <div class="summary-alert__content">
      <img :src="icSummary" alt="" class="summary-alert__icon" />
      <div class="summary-alert__list">
        <div class="summary-alert__item">
          <span class="summary-alert__bullet"></span>
          <span class="summary-alert__text">{{ complaintsText }}</span>
        </div>
        <div
          v-for="(note, index) in specialNotes"
          :key="index"
          class="summary-alert__note-pack"
        >
          <div class="summary-alert__note-item">
            <span class="summary-alert__bullet"></span>
            <span class="summary-alert__text">{{ note.text }}</span>
          </div>
          <span class="summary-alert__note-date">(註記於{{ note.date }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summary-alert {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 24px;
  width: 1260px;
  background: #fff6e0;
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

  &__list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__note-pack {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__note-item {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #172122;
    flex-shrink: 0;
  }

  &__text {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
  }

  &__note-date {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #475354;
  }
}
</style>
