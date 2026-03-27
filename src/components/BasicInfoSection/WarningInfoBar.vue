<script setup lang="ts">
// Figma: I9714:25943;5299:557 | WarningInfoBar | row, space-between, padding:0 30px 0 0
const props = defineProps<{
  lastUpdated: string
}>()
</script>

<template>
  <!-- Figma: layout_W1TWTB | row, justify-between, align-end, gap:12px, padding-right:30px -->
  <div class="warning-info-bar">
    <!-- Figma: I9714:25943;5299:557;5293:892 | Warning | row, align-end, gap:8px -->
    <div class="warning-info-bar__warning">
      <!-- Figma: 不可外流 | Title 20 | #CB4022 -->
      <span class="warning-info-bar__title">不可外流</span>
      <!-- Figma: 保密說明文字 | Title 16 | #CB4022 -->
      <span class="warning-info-bar__desc">本分析資料僅供內部使用，請同仁遵守公司資料保密及安全防範管理辦法。</span>
    </div>
    <!-- Figma: I9714:25943;5299:557;5293:888 | Body 16 | #172122 -->
    <span class="warning-info-bar__updated">最後更新時間：{{ lastUpdated }}</span>
  </div>
</template>

<style lang="scss" scoped>
.warning-info-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  padding: 0 30px 0 0;

  &__warning {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 8px;
  }

  &__title {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5em;
    color: #cb4022;
    white-space: nowrap;
  }

  &__desc {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;
    color: #cb4022;
  }

  &__updated {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
    white-space: nowrap;
    flex-shrink: 0;
  }
}
</style>
