<script setup lang="ts">
import type { AgentBasicInfoCardProps } from './types'
import AgentNameBlock from './AgentNameBlock.vue'
import AgentStatusBlock from './AgentStatusBlock.vue'

defineProps<AgentBasicInfoCardProps>()
</script>

<template>
  <div class="agent-basic-info-card">
    <AgentNameBlock v-bind="name" />
    <hr class="agent-basic-info-card__divider" />
    <AgentStatusBlock v-bind="status" />
  </div>
</template>

<style lang="scss" scoped>
.agent-basic-info-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 40px 24px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);

  &__divider {
    border: none;
    border-top: 1px solid #c4eae7;
    margin: 0;
  }
}
</style>
