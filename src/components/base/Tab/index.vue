<template>
  <div class="tab-wrapper">
    <button
      :class="['tab', { 'tab--active': isActive }]"
      @click="$emit('click')"
    >
      <span class="tab-label">{{ label }}</span>
      <svg
        v-if="showAlert"
        class="tab-alert-icon"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <circle cx="12" cy="12" r="11" fill="none" stroke="#E03636" stroke-width="1" />
        <rect x="11" y="8" width="2" height="10" fill="#E03636" />
        <circle cx="12" cy="19" r="1.5" fill="#E03636" />
      </svg>
    </button>
    <div v-if="isActive" class="tab-indicator"></div>
  </div>
</template>

<script setup lang="ts" generic="T extends string = string">
import type { TabProps, TabEmits } from './types'

withDefaults(defineProps<TabProps>(), {
  isActive: false,
  showAlert: false,
})

defineEmits<TabEmits>()
</script>

<style scoped lang="scss">
.tab-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
}

.tab {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 11px 24px;
  border: none;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);

  &--active {
    background: #ffffff;

    .tab-label {
      color: #05a0c0;
      font-weight: 500;
    }
  }

  &:not(.tab--active) {
    background: #e7e7e7;

    .tab-label {
      color: #adadad;
      font-weight: 500;
    }
  }

  .tab-label {
    font-family: Noto Sans TC;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5em;
    text-align: center;
  }

  .tab-alert-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
}

.tab-indicator {
  height: 5px;
  width: 120px;
  background: #16b7d9;
  border-radius: 0px 0px 0px 0px;
}
</style>
