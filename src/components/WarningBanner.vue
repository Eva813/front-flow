<script setup lang="ts">
import type { WarningBannerProps } from './types'

defineProps<WarningBannerProps>()
</script>

<template>
  <div class="warning-banner">
    <div class="warning-banner__warning">
      <span class="warning-banner__warning-title">{{ warningText }}</span>
      <span class="warning-banner__warning-desc">{{ warningDescription }}</span>
    </div>
    <span class="warning-banner__update-time">{{ lastUpdateTime }}</span>
  </div>
</template>

<style lang="scss" scoped>
.warning-banner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  padding: 0 30px 0 0;

  &__warning {
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }

  &__warning-title {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
    color: #cb4022;
  }

  &__warning-desc {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #cb4022;
  }

  &__update-time {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
  }
}
</style>
