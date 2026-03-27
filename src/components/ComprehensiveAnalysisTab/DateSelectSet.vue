<script setup lang="ts">
// Figma: 9714:25878 | DateSelectSet | Type=Date_select
// Label:"資料區間為：" + dropdown width:340
import type { DateRangeOption } from '../../types'
import { DATE_RANGE_OPTIONS } from '../../types'
import { computed, ref } from 'vue'

const props = defineProps<{
  modelValue: DateRangeOption
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: DateRangeOption): void
  (e: 'change', value: DateRangeOption): void
}>()

const isOpen = ref(false)

const displayValue = computed(() => {
  const { rangeName, startDate, endDate } = props.modelValue
  return `${rangeName} (${startDate} ~ ${endDate})`
})

function select(option: DateRangeOption) {
  isOpen.value = false
  emit('update:modelValue', option)
  emit('change', option)
}
</script>

<template>
  <!-- Figma: 9714:25878 | Select set | row, align-center -->
  <div class="date-select-set">
    <!-- Figma: Label text "資料區間為：" | Body 16 | #172122 -->
    <span class="date-select-set__label">資料區間為：</span>

    <!-- Figma: I9714:25878;5307:447 | Select dropdown | bg:#FFFFFF, border:#A3D6E0, br:8px, padding:10 12 10 10, width:340 -->
    <div class="date-select-set__dropdown" :class="{ 'date-select-set__dropdown--open': isOpen }">
      <button
        type="button"
        class="date-select-set__trigger"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span class="date-select-set__value">{{ displayValue }}</span>
        <!-- expand chevron icon 24×24 -->
        <svg
          class="date-select-set__chevron"
          :class="{ 'date-select-set__chevron--up': isOpen }"
          width="24" height="24" viewBox="0 0 24 24" fill="none"
        >
          <path d="M6 9L12 15L18 9" stroke="#475354" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <ul v-if="isOpen" class="date-select-set__options" role="listbox">
        <li
          v-for="option in DATE_RANGE_OPTIONS"
          :key="option.rangeName"
          class="date-select-set__option"
          :class="{ 'date-select-set__option--selected': option.rangeName === modelValue.rangeName }"
          role="option"
          :aria-selected="option.rangeName === modelValue.rangeName"
          @click="select(option)"
        >
          {{ option.rangeName }} ({{ option.startDate }} ~ {{ option.endDate }})
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.date-select-set {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  &__label {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
    white-space: nowrap;
  }

  &__dropdown {
    position: relative;
    width: 340px;
  }

  &__trigger {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 10px 10px 12px;
    background-color: #ffffff;
    border: 1px solid #a3d6e0;
    border-radius: 8px;
    cursor: pointer;
    gap: 8px;

    &:hover {
      border-color: #16b7d9;
    }
  }

  &__value {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
    text-align: left;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__chevron {
    flex-shrink: 0;
    transition: transform 0.2s ease;

    &--up {
      transform: rotate(180deg);
    }
  }

  &__options {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #a3d6e0;
    border-radius: 8px;
    padding: 4px 0;
    list-style: none;
    margin: 0;
    z-index: 100;
    box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.08);
  }

  &__option {
    padding: 10px 12px;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
    cursor: pointer;

    &:hover {
      background-color: #edf7f9;
    }

    &--selected {
      color: #05a0c0;
      font-weight: 500;
    }
  }
}
</style>
