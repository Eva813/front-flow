<script setup lang="ts">
import type { AgentStatusBlockProps } from './types'
import icStatusOn from '@/assets/icons/ic-status-on.svg'

defineProps<AgentStatusBlockProps>()
</script>

<template>
  <div class="agent-status-block">
    <span class="agent-status-block__text">登錄於 {{ registrationYear }} 年 ｜ </span>
    <span class="agent-status-block__text">最近三個月有進單 {{ recentPoliciesCount }} 張</span>
    <img
      v-if="status === 'on'"
      :src="icStatusOn"
      alt="活躍狀態"
      class="agent-status-block__icon"
    />
  </div>
</template>

<style lang="scss" scoped>
.agent-status-block {
  display: flex;
  align-items: center;
  gap: 2px;

  &__text {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
  }

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>
