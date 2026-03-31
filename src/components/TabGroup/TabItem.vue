<script setup lang="ts">
import type { TabItemProps, TabItemEmits } from './types'
import icAlertRisk from '@/assets/icons/ic-alert-risk.svg'

defineProps<TabItemProps>()
defineEmits<TabItemEmits>()
</script>

<template>
  <div class="tab-item" :class="{ 'tab-item--active': isActive }" @click="$emit('click')">
    <div class="tab-item__content">
      <span class="tab-item__label">{{ label }}</span>
      <img
        v-if="hasAlert"
        :src="icAlertRisk"
        alt="Alert"
        class="tab-item__alert-icon"
      />
    </div>
    <div v-if="isActive" class="tab-item__indicator" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  cursor: pointer;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 11px 24px;
    border-radius: 10px 10px 0 0;
    background: $tab-inactive-bg;
    box-shadow: $shadow-basic;
  }

  &--active &__content {
    background: $white;
  }

  &__label {
    font-family: $font-family;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: $tab-inactive-text;
  }

  &--active &__label {
    color: $tab-active;
  }

  &__alert-icon {
    width: 24px;
    height: 24px;
  }

  &__indicator {
    height: 5px;
    background: $tab-indicator;
    border-radius: 0;
  }
}
</style>
