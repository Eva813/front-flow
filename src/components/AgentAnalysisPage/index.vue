<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader/index.vue'
import BasicInfoCard from '@/components/BasicInfoCard/index.vue'
import SummaryAlert from '@/components/SummaryAlert/index.vue'
import TabGroup from '@/components/TabGroup/index.vue'
import DateRangeSelect from '@/components/DateRangeSelect/index.vue'
import ScopeDescription from '@/components/ScopeDescription/index.vue'
import MetricCard from '@/components/MetricCard/index.vue'
import AnalysisTable from '@/components/AnalysisTable/index.vue'
import logoSrc from '@/assets/icons/logo-tmnewa.svg'
import type { TabItemData } from '@/components/TabGroup/types'
import type { DateRangeOption } from '@/components/DateRangeSelect/types'
import type { SummaryItem } from '@/components/SummaryAlert/types'
import type { MetricCardProps } from '@/components/MetricCard/types'
import type { TableRowData } from '@/components/AnalysisTable/types'

// Tab state
const activeTab = ref(0)
const tabs: TabItemData[] = [
  { label: '綜合分析', hasAlert: false },
  { label: '任意車險', hasAlert: true },
  { label: '個傷', hasAlert: true }
]

// Date range state
const selectedDateRange = ref('6y')
const dateRangeOptions: DateRangeOption[] = [
  { value: '6y', label: '近六年', dateRange: '(2019/03/01 ~ 2025/02/28)' },
  { value: '5y', label: '近五年', dateRange: '(2020/03/01 ~ 2025/02/28)' },
  { value: '3y', label: '近三年', dateRange: '(2022/03/01 ~ 2025/02/28)' }
]

// Summary data
const summaryItems: SummaryItem[] = [
  { text: '客戶提出的官方申訴：共 3 筆  (近三個月： 1 筆)' },
  { text: '特殊註記：A&H 個傷 - 通路業務員招攬品質不良', subText: '(註記於2019/06/06)' }
]

// Metric cards data
const metrics: MetricCardProps[] = [
  {
    title: '總保費 (元)',
    value: 1742766,
    details: [{ label: '保單數：共', value: 307, unit: '張' }]
  },
  {
    title: '總理賠金額 (元)',
    value: 1389222,
    details: [{ label: '賠案數：共', value: 28, unit: '張' }]
  }
]

// Table data
const tableRows: TableRowData[] = [
  {
    categoryName: '任意車險',
    premium: '1,114,665',
    claimAmount: '1,165,918',
    lossRatio: '105.0%',
    policyCount: '101',
    customerCount: '41',
    claimCount: '17',
    customerClaimRate: '22.0%',
    hasAlert: true,
    subRows: []
  },
  {
    categoryName: 'A&H',
    premium: '577,560',
    claimAmount: '199,924',
    lossRatio: '34.6%',
    policyCount: '180',
    customerCount: '43',
    claimCount: '9',
    customerClaimRate: '20.9%',
    hasAlert: false,
    subRows: [
      {
        name: '個傷',
        premium: '576,258',
        claimAmount: '199,924',
        lossRatio: '34.7%',
        policyCount: '174',
        customerCount: '42',
        claimCount: '9',
        customerClaimRate: '21.4%',
        hasAlert: true,
        isLast: false
      },
      {
        name: '個健',
        premium: '1,302',
        claimAmount: '0',
        lossRatio: '0%',
        policyCount: '6',
        customerCount: '1',
        claimCount: '0',
        customerClaimRate: '0%',
        hasAlert: false,
        isLast: true
      }
    ]
  },
  {
    categoryName: '工程險',
    premium: '13,020',
    claimAmount: '0',
    lossRatio: '0%',
    policyCount: '5',
    customerCount: '5',
    claimCount: '0',
    customerClaimRate: '0%',
    hasAlert: false,
    subRows: []
  },
  {
    categoryName: '責任保險',
    premium: '37,521',
    claimAmount: '23,380',
    lossRatio: '62.3%',
    policyCount: '21',
    customerCount: '19',
    claimCount: '2',
    customerClaimRate: '10.5%',
    hasAlert: false,
    subRows: [
      {
        name: '公共意外',
        premium: '6,000',
        claimAmount: '0',
        lossRatio: '0%',
        policyCount: '3',
        customerCount: '3',
        claimCount: '0',
        customerClaimRate: '0%',
        hasAlert: false,
        isLast: false
      },
      {
        name: '雇主責任',
        premium: '21,521',
        claimAmount: '23,380',
        lossRatio: '108.6%',
        policyCount: '14',
        customerCount: '12',
        claimCount: '2',
        customerClaimRate: '16.7%',
        hasAlert: false,
        isLast: false
      },
      {
        name: '產品責任',
        premium: '10,000',
        claimAmount: '0',
        lossRatio: '0%',
        policyCount: '4',
        customerCount: '4',
        claimCount: '0',
        customerClaimRate: '0%',
        hasAlert: false,
        isLast: false
      },
      {
        name: '營繕承包人意外',
        premium: '10,000',
        claimAmount: '0',
        lossRatio: '0%',
        policyCount: '4',
        customerCount: '4',
        claimCount: '0',
        customerClaimRate: '0%',
        hasAlert: false,
        isLast: true
      }
    ]
  }
]
</script>

<template>
  <div class="agent-analysis-page">
    <!-- 1. Header -->
    <AppHeader
      system-title="業務員全視圖"
      :logo-src="logoSrc"
    />

    <!-- Page content -->
    <div class="agent-analysis-page__content">
      <!-- 2. Basic Info -->
      <BasicInfoCard
        warning-text="不可外流"
        warning-description="本分析資料僅供內部使用，請同仁遵守公司資料保密及安全防範管理辦法。"
        last-updated="2026 年 2 月"
        agent-name="徐*雯"
        agent-no="E**C738183"
        company-name="威*保經"
        company-no="BA1296****"
        manager="管理人：940171  張巧勳"
        :registered-year="2018"
        :recent-policy-count="10"
        status="on"
      />

      <!-- 3. Summary -->
      <SummaryAlert :items="summaryItems" />

      <!-- 4. Tab + Card area -->
      <div class="agent-analysis-page__tab-card">
        <TabGroup
          :tabs="tabs"
          v-model="activeTab"
        />
        <!-- 5. Card body (white background) -->
        <div class="agent-analysis-page__card">
          <!-- Agent content -->
          <div class="agent-analysis-page__agent-content">
            <!-- 6. Title + Date select -->
            <div class="agent-analysis-page__title-set">
              <div class="agent-analysis-page__title-wrap">
                <h2 class="agent-analysis-page__title">整體綜合表現</h2>
              </div>
              <DateRangeSelect
                label="資料區間為："
                v-model="selectedDateRange"
                :options="dateRangeOptions"
              />
            </div>

            <!-- 7. Scope description -->
            <ScopeDescription />

            <!-- 8. Metrics -->
            <div class="agent-analysis-page__metrics">
              <MetricCard
                v-for="(metric, index) in metrics"
                :key="index"
                v-bind="metric"
              />
            </div>

            <!-- 9. Table -->
            <AnalysisTable :rows="tableRows" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.agent-analysis-page {
  width: 1440px;
  min-height: 100vh;
  background: $page-bg;

  &__content {
    display: flex;
    flex-direction: column;
    padding: 46px 90px 80px;
    gap: 20px;
  }

  &__tab-card {
    display: flex;
    flex-direction: column;
    margin-top: 4px;
  }

  &__card {
    background: $white;
    box-shadow: $shadow-basic;
  }

  &__agent-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 60px;
  }

  &__title-set {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-bottom: 20px;
    width: 1140px;
  }

  &__title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__title {
    font-family: $font-family;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
    color: $text-primary;
    margin: 0;
  }

  &__metrics {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 20px;
  }
}
</style>
