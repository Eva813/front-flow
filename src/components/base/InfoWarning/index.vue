<template>
  <div class="info-warning">
    <div class="warning-section">
      <h2 class="warning-title">{{ warningTitle }}</h2>
      <p class="warning-message">{{ warningMessage }}</p>
    </div>
    <div class="last-update-section">
      <p class="last-update-text">{{ lastUpdatedDate }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoWarningProps } from './types'

withDefaults(defineProps<InfoWarningProps>(), {
  warningTitle: '不可外流',
  warningMessage: '本分析資料僅供內部使用，請同仁遵守公司資料保密及安全防範管理辦法。',
  lastUpdatedDate: '最後更新時間：2026 年 2 月',
})
</script>

<style scoped lang="scss">
.info-warning {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 24px;
  background: #e8f4f8;
  border-radius: 12px;
  margin-bottom: 16px;

  .warning-section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .warning-title {
      font-family: Noto Sans TC;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.5em;
      color: #d9534f;
      margin: 0;
      padding: 0;
    }

    .warning-message {
      font-family: Noto Sans TC;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5em;
      color: #d9534f;
      margin: 0;
      padding: 0;
    }
  }

  .last-update-section {
    display: flex;

    .last-update-text {
      font-family: Noto Sans TC;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5em;
      color: #475354;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
