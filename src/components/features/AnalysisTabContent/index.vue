<template>
  <div class="analysis-tab-content">
    <!-- Title Section -->
    <div class="title-section">
      <div class="title-set">
        <h2 class="tab-title">{{ title }}</h2>
      </div>

      <!-- Date Range Selector -->
      <div class="date-range-selector">
        <span class="range-label">{{ dataRangeLabel }}</span>
        <div class="range-value">
          <span class="range-text">{{ dataRangeValue }}</span>
          <svg class="expand-icon" viewBox="0 0 24 24" width="12" height="12">
            <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Range Explanation -->
    <div v-if="showRangeExplanation" class="range-explanation">
      <BulletPoint text="分析範圍說明：" :is-subtext="false" />
      <BulletPoint
        text="目前已納入分析的險別包括：任意車險、A&H (不包含疫苗險、團險、旅平險)、住火、商火、工程險、公共意外、雇主責任、產品責任、營繕承包人意外。"
        :is-subtext="true"
      />
    </div>

    <!-- Analysis Table -->
    <div class="table-section">
      <TableHead />
      <div class="table-body">
        <TableRow
          v-for="(row, index) in tableRows"
          :key="index"
          :insurance-type="row.insuranceType"
          :premium="row.premium"
          :claim-amount="row.claimAmount"
          :loss-ratio="row.lossRatio"
          :policies-count="row.policiesCount"
          :customers-count="row.customersCount"
          :claims-count="row.claimsCount"
          :customer-claim-rate="row.customerClaimRate"
          :is-last-row="index === tableRows.length - 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BulletPoint from '../../base/BulletPoint/index.vue'
import TableHead from '../../base/Table/TableHead.vue'
import TableRow from '../../base/Table/TableRow.vue'
import type { AnalysisTabContentProps, AnalysisTabContentEmits } from './types'

withDefaults(defineProps<AnalysisTabContentProps>(), {
  title: '整體綜合表現',
  dataRangeLabel: '資料區間為：',
  dataRangeValue: '近六年 (2019/03/01 ~ 2025/02/28)',
  rangeNotes: () => [],
  tableRows: () => [
    {
      insuranceType: '任意車險',
      premium: 500000,
      claimAmount: 250000,
      lossRatio: 50.0,
      policiesCount: 100,
      customersCount: 80,
      claimsCount: 10,
      customerClaimRate: 12.5,
    },
    {
      insuranceType: 'A&H',
      premium: 300000,
      claimAmount: 150000,
      lossRatio: 50.0,
      policiesCount: 50,
      customersCount: 45,
      claimsCount: 5,
      customerClaimRate: 11.1,
    },
    {
      insuranceType: '個傷',
      premium: 200000,
      claimAmount: 100000,
      lossRatio: 50.0,
      policiesCount: 30,
      customersCount: 28,
      claimsCount: 2,
      customerClaimRate: 7.1,
    },
  ],
  showRangeExplanation: true,
})

defineEmits<AnalysisTabContentEmits>()
</script>

<style scoped lang="scss">
.analysis-tab-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 0;

  .title-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    .title-set {
      display: flex;
      flex-direction: column;

      .tab-title {
        font-family: Noto Sans TC;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.5em;
        color: #172122;
        margin: 0;
        padding: 0;
      }
    }

    .date-range-selector {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;

      .range-label {
        font-family: Noto Sans TC;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5em;
        color: #172122;
        white-space: nowrap;
      }

      .range-value {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
        background: #ffffff;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          border-color: #05a0c0;
          background: #f9f9f9;
        }

        .range-text {
          font-family: Noto Sans TC;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5em;
          color: #172122;
          white-space: nowrap;
        }

        .expand-icon {
          width: 12px;
          height: 12px;
          color: #172122;
          transition: transform 0.2s ease;
        }
      }
    }
  }

  .range-explanation {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .table-section {
    display: flex;
    flex-direction: column;
    gap: 0;
    overflow-x: auto;

    .table-body {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  }
}
</style>
