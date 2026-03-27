<script setup lang="ts">
// Figma: I9714:25943;5299:561 | AgentStatusBlock | Status component (System=業務員, Status=On)
const props = defineProps<{
  registeredYear: number
  recentOrderCount: number
  status: 'On' | 'Off'
}>()
</script>

<template>
  <!-- Figma: layout_CSED1L | row, align-center, gap:2px -->
  <div class="agent-status-block">
    <!-- Figma: text "登錄於 XXXX 年 ｜" | Body 16 | #172122 -->
    <span class="agent-status-block__text">登錄於 {{ registeredYear }} 年 ｜ </span>
    <!-- Figma: text "最近三個月有進單 XX 張" | Body 16 | #172122 -->
    <span class="agent-status-block__text">最近三個月有進單 {{ recentOrderCount }} 張</span>
    <!-- Figma: ic/status on | 24×24 | #47CF8E green circle checkmark -->
    <span
      class="agent-status-block__status-icon"
      :class="`agent-status-block__status-icon--${status.toLowerCase()}`"
      aria-label="`狀態：${status}`"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" :fill="status === 'On' ? '#47CF8E' : '#ADADAD'" />
        <path d="M8.3 12.3L10.8 14.8L15.7 9.8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.agent-status-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;

  &__text {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
    white-space: nowrap;
  }

  &__status-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-left: 2px;
  }
}
</style>
