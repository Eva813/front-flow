<script setup lang="ts">
import type { ScopeDescriptionProps } from './types'

defineProps<ScopeDescriptionProps>()
</script>

<template>
  <div class="scope-description">
    <div class="scope-description__row">
      <span class="scope-description__bullet"></span>
      <span class="scope-description__title">{{ title }}</span>
    </div>
    <div class="scope-description__row">
      <span class="scope-description__bullet scope-description__bullet--hidden"></span>
      <div class="scope-description__detail">
        <div class="scope-description__desc-row">
          <span
            v-for="(desc, index) in descriptions"
            :key="index"
            class="scope-description__text"
          >{{ desc }}</span>
        </div>
        <span class="scope-description__exclusion">{{ exclusions }}</span>
        <div class="scope-description__desc-row">
          <span class="scope-description__text">、住火、商火、工程險、公共意外、雇主責任、產品責任、營繕承包人意外。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scope-description {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 0 0 8px;

  &__row {
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

    &--hidden {
      opacity: 0;
    }
  }

  &__title {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
  }

  &__detail {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
  }

  &__desc-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__text {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
  }

  &__exclusion {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
  }
}
</style>
