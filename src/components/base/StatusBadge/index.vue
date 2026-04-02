<template>
  <div class="status-badge">
    <span class="status-text">登錄於 {{ registrationYear }} 年 ｜</span>
    <span class="status-detail">最近三個月有進單 {{ recentPoliciesCount }} 張</span>
  </div>
</template>

<script setup lang="ts">
import type { StatusBadgeProps } from './types'

withDefaults(defineProps<StatusBadgeProps>(), {
  registrationYear: 2018,
  recentPoliciesCount: 10,
  status: 'on',
})
</script>

<style scoped lang="scss">
.status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: Noto Sans TC;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  color: #172122;

  .status-text {
    white-space: nowrap;
  }

  .status-detail {
    white-space: nowrap;
  }
}
</style>
