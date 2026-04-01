<script setup lang="ts">
import type { TabGroupProps, TabGroupEmits } from './types'
import icAlertRisk from '@/assets/icons/ic-alert-risk.svg'

const props = defineProps<TabGroupProps>()
const emit = defineEmits<TabGroupEmits>()
</script>

<template>
  <div class="tab-group">
    <div
      v-for="(tab, index) in props.tabs"
      :key="index"
      class="tab-item"
      :class="{
        'tab-item--active': index === props.activeIndex,
        'tab-item--inactive': index !== props.activeIndex,
      }"
      @click="emit('update:activeIndex', index)"
    >
      <div class="tab-item__content">
        <span class="tab-item__text">{{ tab.text }}</span>
        <img
          v-if="tab.state === 'inactive-alert'"
          :src="icAlertRisk"
          alt=""
          class="tab-item__alert-icon"
        />
      </div>
      <div v-if="index === props.activeIndex" class="tab-item__indicator"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tab-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 11px 24px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);
  }

  &--active &__content {
    background: #ffffff;
  }

  &--inactive &__content {
    background: #e7e7e7;
  }

  &__text {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
  }

  &--active &__text {
    color: #05a0c0;
  }

  &--inactive &__text {
    color: #adadad;
  }

  &__alert-icon {
    width: 24px;
    height: 24px;
  }

  &__indicator {
    width: 100%;
    height: 5px;
    background: #16b7d9;
    border-radius: 10px 10px 0 0;
  }
}
</style>
