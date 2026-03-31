<script setup lang="ts">
</script>

<template>
  <div class="scope-description">
    <div class="scope-description__line">
      <span class="scope-description__dot" />
      <span class="scope-description__title">分析範圍說明：</span>
    </div>
    <div class="scope-description__line">
      <span class="scope-description__dot scope-description__dot--hidden" />
      <div class="scope-description__body">
        <div class="scope-description__text-wrap">
          <span class="scope-description__text">目前已納入分析的險別包括：任意車險、A&amp;H</span>
        </div>
        <span class="scope-description__bold">(不包含疫苗險、團險、旅平險)</span>
        <div class="scope-description__text-wrap">
          <span class="scope-description__text">、住火、商火、工程險、公共意外、雇主責任、產品責任、營繕承包人意外。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.scope-description {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2px;
  padding-left: 8px;

  &__line {
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
  }

  &__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: $text-primary;
    flex-shrink: 0;

    &--hidden {
      opacity: 0;
    }
  }

  &__title {
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__body {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
  }

  &__text-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__bold {
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
  }
}
</style>
