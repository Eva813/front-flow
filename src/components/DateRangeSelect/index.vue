<script setup lang="ts">
import { computed, ref } from 'vue'
import type { DateRangeSelectProps, DateRangeSelectEmits } from './types'
import icExpand from '@/assets/icons/ic-expand.svg'

const props = defineProps<DateRangeSelectProps>()
const emit = defineEmits<DateRangeSelectEmits>()

const isOpen = ref(false)

const selectedOption = computed(() =>
  props.options.find(o => o.value === props.modelValue)
)

function selectOption(value: string) {
  emit('update:modelValue', value)
  isOpen.value = false
}
</script>

<template>
  <div class="date-range-select">
    <span class="date-range-select__label">{{ label }}</span>
    <div class="date-range-select__select" @click="isOpen = !isOpen">
      <div class="date-range-select__value">
        <span class="date-range-select__text">{{ selectedOption?.label }}</span>
        <span class="date-range-select__text">{{ selectedOption?.dateRange }}</span>
      </div>
      <img
        :src="icExpand"
        alt="Expand"
        class="date-range-select__icon"
        :class="{ 'date-range-select__icon--open': isOpen }"
      />
    </div>
    <ul v-if="isOpen" class="date-range-select__dropdown">
      <li
        v-for="option in options"
        :key="option.value"
        class="date-range-select__option"
        :class="{ 'date-range-select__option--active': option.value === modelValue }"
        @click="selectOption(option.value)"
      >
        {{ option.label }} {{ option.dateRange }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.date-range-select {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  &__label {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
    white-space: nowrap;
  }

  &__select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    padding: 10px 10px 10px 12px;
    background: $white;
    border: 1px solid $border-select;
    border-radius: 8px;
    cursor: pointer;
  }

  &__value {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
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
    top: 100%;
    right: 0;
    width: 340px;
    margin: 4px 0 0;
    padding: 0;
    list-style: none;
    background: $white;
    border: 1px solid $border-select;
    border-radius: 8px;
    box-shadow: $shadow-basic;
    z-index: 10;
  }

  &__option {
    padding: 10px 12px;
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
    cursor: pointer;

    &:hover {
      background: $surface-light;
    }

    &--active {
      font-weight: 500;
      color: $tab-active;
    }
  }
}
</style>
