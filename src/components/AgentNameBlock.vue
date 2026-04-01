<script setup lang="ts">
import type { AgentNameBlockProps } from './types'

defineProps<AgentNameBlockProps>()
</script>

<template>
  <div class="agent-name-block">
    <div class="agent-name-block__agent">
      <div class="agent-name-block__name-row">
        <span class="agent-name-block__name">{{ agentName }}</span>
        <span class="agent-name-block__no">{{ agentNo }}</span>
      </div>
      <div class="agent-name-block__company-row">
        <span class="agent-name-block__company-name">{{ companyName }}</span>
        <span class="agent-name-block__company-no">{{ companyNo }}</span>
      </div>
    </div>
    <div class="agent-name-block__manager">
      <span class="agent-name-block__manager-text">{{ managerInfo }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.agent-name-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  &__agent {
    display: flex;
    align-items: center;
    gap: 100px;
  }

  &__name-row {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__name {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 1.5;
    color: #172122;
  }

  &__no {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.5;
    color: #172122;
  }

  &__company-row {
    display: flex;
    gap: 10px;
  }

  &__company-name {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #172122;
  }

  &__company-no {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: #172122;
  }

  &__manager {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }

  &__manager-text {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #172122;
  }
}
</style>
