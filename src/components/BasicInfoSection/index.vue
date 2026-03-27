<script setup lang="ts">
import WarningInfoBar from './WarningInfoBar.vue'
import AgentNameBlock from './AgentNameBlock.vue'
import AgentStatusBlock from './AgentStatusBlock.vue'
import type { AgentInfo } from '../../types'

const props = defineProps<{
  agentInfo: AgentInfo
}>()
</script>

<template>
  <!-- Figma: 9714:25943 | Basic Info | column, gap:12px, width:1260 -->
  <section class="basic-info-section">
    <!-- Figma: I9714:25943;5299:557 | WarningInfoBar -->
    <WarningInfoBar :lastUpdated="agentInfo.lastUpdatedAt" />

    <!-- Figma: I9714:25943;5299:558 | Basic info card | br:20px, padding:30px 40px 24px, shadow -->
    <div class="basic-info-section__card">
      <!-- Figma: I9714:25943;5299:559 | Name block -->
      <AgentNameBlock
        :agentName="agentInfo.agentName"
        :agencyName="agentInfo.agencyName"
        :managerInfo="agentInfo.managerInfo"
      />
      <!-- Figma: I9714:25943;5299:560 | Divider | LINE, stroke #C4EAE7 -->
      <div class="basic-info-section__divider" aria-hidden="true" />
      <!-- Figma: I9714:25943;5299:561 | Status block -->
      <AgentStatusBlock
        :registeredYear="agentInfo.registeredYear"
        :recentOrderCount="agentInfo.recentOrderCount"
        :status="agentInfo.status"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.basic-info-section {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
  width: 1260px;

  &__card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 40px 24px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: #c4eae7;
  }
}
</style>
