<script setup lang="ts">
import type { DateRangeOption } from './types'

const props = defineProps<{
  title: string
  label: string
  options: DateRangeOption[]
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const updateValue = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <section class="analysis-header">
    <div class="analysis-header__title-group">
      <h2 class="analysis-header__title">{{ props.title }}</h2>
    </div>

    <label class="analysis-header__picker">
      <span class="analysis-header__label">{{ props.label }}</span>

      <span class="analysis-header__select-wrap">
        <select class="analysis-header__select" :value="props.modelValue" @change="updateValue">
          <option v-for="option in props.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </span>
    </label>
  </section>
</template>

<style lang="scss" scoped>
.analysis-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 0 0 20px;
}

.analysis-header__title {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: #172122;
}

.analysis-header__picker {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #172122;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

.analysis-header__select-wrap {
  position: relative;
  display: inline-flex;
}

.analysis-header__select-wrap::after {
  content: '';
  position: absolute;
  right: 12px;
  top: 50%;
  width: 8px;
  height: 8px;
  border-right: 2px solid #117eb1;
  border-bottom: 2px solid #117eb1;
  transform: translateY(-60%) rotate(45deg);
  pointer-events: none;
}

.analysis-header__select {
  width: 340px;
  min-height: 40px;
  padding: 10px 32px 10px 12px;
  border: 1px solid #a3d6e0;
  border-radius: 8px;
  background: #fff;
  color: #172122;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  appearance: none;
}

@media (max-width: 720px) {
  .analysis-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .analysis-header__select {
    width: min(100%, 340px);
  }
}
</style>
