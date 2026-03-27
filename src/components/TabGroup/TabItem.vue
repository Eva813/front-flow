<script setup lang="ts">
// Figma: 9714:25869~25871 | Tab items | ComponentSet 6002:11422
// States: Active_N2 / Inactive_N / Inactive
import type { TabDef } from '../../types'

const props = defineProps<{
  tab: TabDef
  isActive: boolean
}>()

const emit = defineEmits<{
  (e: 'click', key: string): void
}>()
</script>

<template>
  <!-- Figma: layout_MSJQRQ | column, gap:8px, hug -->
  <!-- Outer wrapper is position:relative to allow absolute indicator -->
  <div
    class="tab-item"
    :class="{ 'tab-item--active': isActive }"
    role="tab"
    :aria-selected="isActive"
    @click="emit('click', tab.key)"
  >
    <!-- Figma: layout_OPH51M | row, justify-center, align-center, padding:11px 24px, br:10px 10px 0 0 -->
    <div class="tab-item__button">
      <!-- Figma: Title 18 | Active:#05A0C0 | Inactive:#ADADAD -->
      <span class="tab-item__label">{{ tab.label }}</span>
      <!-- Figma: ic/alert_risk | 24×24 | Inactive_N / Inactive に表示 -->
      <span v-if="tab.showAlert" class="tab-item__alert-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Figma ic/alert_risk: red exclamation, #E03636 -->
          <path d="M12 3L2 20H22L12 3Z" stroke="#E03636" stroke-width="1.5" fill="none"/>
          <rect x="11" y="8.5" width="2" height="7" rx="1" fill="#E03636"/>
          <rect x="11" y="17" width="2" height="2" rx="1" fill="#E03636"/>
        </svg>
      </span>
    </div>
    <!-- Figma: tab-indicator | absolute, bottom, height:5px, #16B7D9 | Active only -->
    <div v-if="isActive" class="tab-item__indicator" aria-hidden="true" />
  </div>
</template>

<style lang="scss" scoped>
.tab-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  cursor: pointer;

  &__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 11px 24px;
    border-radius: 10px 10px 0px 0px;
    background-color: #e7e7e7; // Inactive default
    box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);
    transition: background-color 0.15s ease;
  }

  &__label {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5em;
    color: #adadad; // Inactive default
    white-space: nowrap;
    transition: color 0.15s ease;
  }

  &__alert-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  // Indicator strip below active tab
  &__indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #16b7d9;
    border-radius: 0 0 0 0;
  }

  // ── Active state ─────────────────────────────────────────
  &--active {
    .tab-item__button {
      background-color: #ffffff;
    }

    .tab-item__label {
      color: #05a0c0;
    }
  }
}
</style>
