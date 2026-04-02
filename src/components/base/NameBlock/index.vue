<template>
  <div class="name-block">
    <div class="agent-section">
      <div class="agent-name-section">
        <h2 class="agent-name">{{ agentName }}</h2>
        <span class="agent-id">{{ agentId }}</span>
      </div>
      <div class="agency-name-section">
        <h3 class="agency-name">{{ companyName }}</h3>
        <span class="agency-id">{{ companyId }}</span>
      </div>
    </div>

    <div class="divider"></div>

    <div class="supervisor-section">
      <span class="supervisor-text">管理人：{{ supervisorId }}　{{ supervisorName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NameBlockProps } from './types'

withDefaults(defineProps<NameBlockProps>(), {
  agentName: '徐*雯',
  agentId: 'E**C738183',
  companyName: '威*保經',
  companyId: 'BA1296****',
  supervisorId: '940171',
  supervisorName: '張巧勳',
})
</script>

<style scoped lang="scss">
.name-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #172122;

  .agent-section {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .agent-name-section {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      gap: 8px;

      .agent-name {
        font-family: Noto Sans TC;
        font-size: 32px;
        font-weight: 500;
        line-height: 1.5em;
        margin: 0;
        padding: 0;
      }

      .agent-id {
        font-family: Noto Sans TC;
        font-size: 32px;
        font-weight: 400;
        line-height: 1.5em;
      }
    }

    .agency-name-section {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      gap: 8px;

      .agency-name {
        font-family: Noto Sans TC;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.5em;
        margin: 0;
        padding: 0;
      }

      .agency-id {
        font-family: Noto Sans TC;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5em;
      }
    }
  }

  .divider {
    height: 1px;
    background: #d9d9d9;
  }

  .supervisor-section {
    display: flex;

    .supervisor-text {
      font-family: Noto Sans TC;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5em;
    }
  }
}
</style>
