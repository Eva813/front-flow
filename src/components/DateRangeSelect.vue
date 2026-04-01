<script setup lang="ts">
import type { DateRangeSelectProps, DateRangeSelectEmits } from './types'
import icExpand from '@/assets/icons/ic-expand.svg'

const props = defineProps<DateRangeSelectProps>()
const emit = defineEmits<DateRangeSelectEmits>()

const isOpen = defineModel<boolean>('open', { default: false })

function selectOption(index: number) {
  emit('update:selectedIndex', index)
  isOpen.value = false
}
</script>

<template>
  <div class="date-range-select">
    <span class="date-range-select__label">資料區間為：</span>
    <div class="date-range-select__combo" @click="isOpen = !isOpen">
      <div class="date-range-select__value">
        <span>{{ props.options[props.selectedIndex]?.label }}</span>
        <span>({{ props.options[props.selectedIndex]?.startDate }}</span>
        <span>~</span>
        <span>{{ props.options[props.selectedIndex]?.endDate }})</span>
      </div>
      <img
        :src="icExpand"
        alt=""
        class="date-range-select__icon"
        :class="{ 'date-range-select__icon--open': isOpen }"
      />
      <ul v-if="isOpen" class="date-range-select__dropdown">
        <li
          v-for="(option, index) in props.options"
          :key="index"
          class="date-range-select__option"
          :class="{ 'date-range-select__option--selected': index === props.selectedIndex }"
          @click.stop="selectOption(index)"
        >
          {{ option.label }} ({{ option.startDate }} ~ {{ option.endDate }})
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.date-range-select {
  display: flex;
  align-items: center;
  gap: 8px;

  &__label {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
    white-space: nowrap;
  }

  &__combo {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 192px;
    padding: 10px 10px 10px 12px;
    width: 340px;
    background: #ffffff;
    border: 1px solid #a3d6e0;
    border-radius: 8px;
    cursor: pointer;
  }

  &__value {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
    white-space: nowrap;
  }

  &__icon {
    width: 24px;
    height: 24px;
    transition: transform 0.2s;

    &--open {
      transform: rotate(180deg);
    }
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: #ffffff;
    border: 1px solid #a3d6e0;
    border-radius: 8px;
    list-style: none;
    margin: 0;
    padding: 4px 0;
    z-index: 10;
    box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.08);
  }

  &__option {
    padding: 8px 12px;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
    cursor: pointer;

    &:hover {
      background: #edf7f9;
    }

    &--selected {
      color: #05a0c0;
      font-weight: 500;
    }
  }
}
</style>
