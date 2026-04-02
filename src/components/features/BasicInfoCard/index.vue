<template>
  <div class="basic-info-card">
    <InfoWarning
      :warning-title="warningTitle"
      :warning-message="warningMessage"
      :last-updated-date="lastUpdatedDate"
    />

    <div class="card-content">
      <NameBlock
        :agent-name="nameBlock?.agentName"
        :agent-id="nameBlock?.agentId"
        :company-name="nameBlock?.companyName"
        :company-id="nameBlock?.companyId"
        :supervisor-id="nameBlock?.supervisorId"
        :supervisor-name="nameBlock?.supervisorName"
      />

      <StatusBadge
        :registration-year="statusBadge?.registrationYear"
        :recent-policies-count="statusBadge?.recentPoliciesCount"
        :status="statusBadge?.status"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoWarning from '../../base/InfoWarning/index.vue'
import NameBlock from '../../base/NameBlock/index.vue'
import StatusBadge from '../../base/StatusBadge/index.vue'
import type { BasicInfoCardProps } from './types'

withDefaults(defineProps<BasicInfoCardProps>(), {
  warningTitle: '不可外流',
  warningMessage: '本分析資料僅供內部使用，請同仁遵守公司資料保密及安全防範管理辦法。',
  lastUpdatedDate: '最後更新時間：2026 年 2 月',
  nameBlock: () => ({}),
  statusBadge: () => ({}),
})
</script>

<style scoped lang="scss">
.basic-info-card {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 20px;

  .card-content {
    padding: 24px;
    background: #ffffff;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
