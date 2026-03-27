<script setup lang="ts">
// Figma: PlaceholderTab | — | Tab 2/3 空白佔位
// Displays only the tab title as a heading. Placeholder for 任意車險/個傷 tabs.
const props = defineProps<{
  tabTitle: string
}>()
</script>

<template>
  <!-- Placeholder content for tabs without full spec yet -->
  <div class="placeholder-tab">
    <h2 class="placeholder-tab__title">{{ tabTitle }}</h2>
    <p class="placeholder-tab__note">（此頁籤內容待後續規格補充）</p>
  </div>
</template>

<style lang="scss" scoped>
.placeholder-tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 40px 0;

  &__title {
    margin: 0;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5em;
    color: #172122;
  }

  &__note {
    margin: 0;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #adadad;
  }
}
</style>
