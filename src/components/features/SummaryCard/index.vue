<template>
  <div class="summary-card">
    <div class="summary-icon-wrapper">
      <svg class="summary-icon" viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="11" fill="none" stroke="#172122" stroke-width="1" />
        <path d="M12 7v5" stroke="#172122" stroke-width="2" stroke-linecap="round" />
        <circle cx="12" cy="18" r="1" fill="#172122" />
      </svg>
    </div>

    <div class="summary-content">
      <BulletPoint
        v-if="complaints"
        :text="complaints.text"
        :date="complaints.date"
        :is-subtext="false"
      />
      <BulletPoint
        v-for="(remark, index) in remarks"
        :key="index"
        :text="remark.text"
        :date="remark.date"
        :is-subtext="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BulletPoint from '../../base/BulletPoint/index.vue'
import type { SummaryCardProps } from './types'

withDefaults(defineProps<SummaryCardProps>(), {
  complaints: () => ({
    text: '客戶提出的官方申訴：共 3 筆 (近三個月： 1 筆)',
  }),
  remarks: () => [
    {
      text: '特殊註記：A&H 個傷 - 通路業務員招攬品質不良',
      date: '2019/06/06',
    },
  ],
})
</script>

<style scoped lang="scss">
.summary-card {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 16px 24px;
  background: #fff6e0;
  border-radius: 12px;
  margin-bottom: 20px;

  .summary-icon-wrapper {
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
    padding-top: 2px;

    .summary-icon {
      width: 24px;
      height: 24px;
      color: #172122;
    }
  }

  .summary-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
