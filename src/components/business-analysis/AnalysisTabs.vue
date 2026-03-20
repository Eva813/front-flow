<script setup lang="ts">
import type { AnalysisTab, AnalysisTabKey } from './types'

const props = defineProps<{
  tabs: AnalysisTab[]
  modelValue: AnalysisTabKey
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: AnalysisTabKey): void
}>()

const selectTab = (key: AnalysisTabKey) => {
  emit('update:modelValue', key)
}
</script>

<template>
  <nav class="analysis-tabs" aria-label="分析分頁">
    <button
      v-for="tab in props.tabs"
      :key="tab.key"
      class="analysis-tabs__tab"
      :class="{
        'analysis-tabs__tab--active': props.modelValue === tab.key,
        'analysis-tabs__tab--risk': tab.variant === 'inactive-risk',
      }"
      type="button"
      :aria-selected="props.modelValue === tab.key"
      @click="selectTab(tab.key)"
    >
      <span class="analysis-tabs__content">
        <span class="analysis-tabs__label">{{ tab.label }}</span>

        <svg
          v-if="tab.variant === 'inactive-risk'"
          class="analysis-tabs__risk"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" fill="#fff" />
          <path d="M12 6.5a1.2 1.2 0 0 1 1.2 1.2v5.8a1.2 1.2 0 0 1-2.4 0V7.7A1.2 1.2 0 0 1 12 6.5Z" fill="#E03636" />
          <circle cx="12" cy="16.9" r="1.15" fill="#E03636" />
        </svg>
      </span>

      <span v-if="props.modelValue === tab.key" class="analysis-tabs__indicator" aria-hidden="true" />
    </button>
  </nav>
</template>

<style lang="scss" scoped>
.analysis-tabs {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  width: 100%;
}

.analysis-tabs__tab {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 120px;
  min-width: 120px;
  padding: 0;
  border: 0;
  border-radius: 10px 10px 0 0;
  background: #e7e7e7;
  box-shadow: 0 6px 16px rgba(23, 33, 34, 0.04);
  overflow: hidden;
}

.analysis-tabs__tab--active {
  background: #fff;
}

.analysis-tabs__content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 50px;
  padding: 11px 24px 12px;
}

.analysis-tabs__label {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #adadad;
}

.analysis-tabs__tab--active .analysis-tabs__label {
  color: #05a0c0;
}

.analysis-tabs__risk {
  width: 24px;
  height: 24px;
  flex: none;
}

.analysis-tabs__indicator {
  position: absolute;
  inset: auto 1.34px 0;
  height: 5px;
  background: #16b7d9;
}

@media (max-width: 720px) {
  .analysis-tabs {
    overflow-x: auto;
    padding-bottom: 4px;
  }
}
</style>
