<script setup lang="ts">
// Figma: I9714:25943;5299:559 | AgentNameBlock | Name component
const props = defineProps<{
  agentName: string
  agencyName: string
  managerInfo: string
}>()
</script>

<template>
  <!-- Figma: layout_042N9R | row, justify-between, align-center, gap:60px, fill-width -->
  <div class="agent-name-block">
    <!-- Figma: layout_XEDI5P | Agent section | row, align-center, gap:100px -->
    <div class="agent-name-block__agent">
      <!-- Figma: layout_X08ADF | Agent name | row, gap:20px -->
      <div class="agent-name-block__name-slot">
        <!-- agentName typography matched to Figma Name component (System=業務員) -->
        <span class="agent-name-block__label">業務員姓名</span>
        <span class="agent-name-block__value">{{ agentName }}</span>
      </div>
      <!-- Figma: layout_583U50 | Agency name | row, gap:10px -->
      <div class="agent-name-block__agency-slot">
        <span class="agent-name-block__label">所屬公司</span>
        <span class="agent-name-block__value">{{ agencyName }}</span>
      </div>
    </div>
    <!-- Figma: layout_S783Z8 | 管理人 | row, justify-end, gap:8px -->
    <div class="agent-name-block__manager">
      <span class="agent-name-block__manager-text">管理人：{{ managerInfo }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.agent-name-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  width: 100%;

  &__agent {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 100px;
  }

  &__name-slot,
  &__agency-slot {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  &__agency-slot {
    gap: 10px;
  }

  &__label {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;
    color: #475354;
    white-space: nowrap;
  }

  &__value {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
  }

  &__manager {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  &__manager-text {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
    white-space: nowrap;
  }
}
</style>
