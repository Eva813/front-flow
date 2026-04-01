<script setup lang="ts">
import type {
  WarningBannerProps,
  AgentBasicInfoCardProps,
  SummaryAlertProps,
  TabGroupProps,
  DateRangeSelectProps,
  ScopeDescriptionProps,
  MetricCardProps,
  InsuranceTableProps,
} from '@/components/types'

import AppHeader from '@/components/AppHeader.vue'
import WarningBanner from '@/components/WarningBanner.vue'
import AgentBasicInfoCard from '@/components/AgentBasicInfoCard.vue'
import SummaryAlert from '@/components/SummaryAlert.vue'
import TabGroup from '@/components/TabGroup.vue'
import DateRangeSelect from '@/components/DateRangeSelect.vue'
import ScopeDescription from '@/components/ScopeDescription.vue'
import MetricCard from '@/components/MetricCard.vue'
import InsuranceTable from '@/components/InsuranceTable.vue'
import { ref } from 'vue'

// ===== Mock Data =====

const warningData: WarningBannerProps = {
  warningText: '不可外流',
  warningDescription: '本分析資料僅供內部使用，請同仁遵守公司資料保密及安全防範管理辦法。',
  lastUpdateTime: '最後更新時間：2026 年 2 月',
}

const basicInfoData: AgentBasicInfoCardProps = {
  name: {
    agentName: '徐*雯',
    agentNo: 'E**C738183',
    companyName: '威*保經',
    companyNo: 'BA1296****',
    managerInfo: '管理人：940171  張巧勳',
  },
  status: {
    registrationYear: 2018,
    recentPoliciesCount: 10,
    status: 'on',
  },
}

const summaryData: SummaryAlertProps = {
  complaintsText: '客戶提出的官方申訴：共 3 筆  (近三個月： 1 筆)',
  specialNotes: [
    {
      text: '特殊註記：A&H 個傷 - 通路業務員招攬品質不良',
      date: '2019/06/06',
    },
  ],
}

const tabData = ref<TabGroupProps>({
  tabs: [
    { text: '綜合分析', state: 'active' },
    { text: '任意車險', state: 'inactive-alert' },
    { text: '個傷', state: 'inactive-alert' },
  ],
  activeIndex: 0,
})

const dateRangeData = ref<DateRangeSelectProps>({
  options: [
    { label: '近六年', startDate: '2019/03/01', endDate: '2025/02/28' },
    { label: '近五年', startDate: '2020/03/01', endDate: '2025/02/28' },
    { label: '近三年', startDate: '2022/03/01', endDate: '2025/02/28' },
  ],
  selectedIndex: 0,
})

const scopeData: ScopeDescriptionProps = {
  title: '分析範圍說明：',
  descriptions: ['目前已納入分析的險別包括：任意車險、A&H'],
  exclusions: '(不包含疫苗險、團險、旅平險)',
}

const metricPremium: MetricCardProps = {
  label: '總保費 (元)',
  value: '1,742,766',
  subLabel: '保單數：共',
  subValue: '307',
  subUnit: '張',
}

const metricClaim: MetricCardProps = {
  label: '總理賠金額 (元)',
  value: '1,389,222',
  subLabel: '賠案數：共',
  subValue: '28',
  subUnit: '張',
}

const tableData: InsuranceTableProps = {
  categories: [
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
      subCategories: undefined,
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
      subCategories: [
        {
          categoryName: '個傷',
          premium: '576,258',
          claimAmount: '199,924',
          lossRatio: '34.7%',
          policyCount: '174',
          customerCount: '42',
          claimCount: '9',
          customerClaimRate: '21.4%',
          hasAlert: true,
        },
        {
          categoryName: '個健',
          premium: '1,302',
          claimAmount: '0',
          lossRatio: '0%',
          policyCount: '6',
          customerCount: '1',
          claimCount: '0',
          customerClaimRate: '0%',
          hasAlert: false,
        },
      ],
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
      subCategories: undefined,
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
      subCategories: [
        {
          categoryName: '公共意外',
          premium: '6,000',
          claimAmount: '0',
          lossRatio: '0%',
          policyCount: '3',
          customerCount: '3',
          claimCount: '0',
          customerClaimRate: '0%',
          hasAlert: false,
        },
        {
          categoryName: '雇主責任',
          premium: '21,521',
          claimAmount: '23,380',
          lossRatio: '108.6%',
          policyCount: '14',
          customerCount: '12',
          claimCount: '2',
          customerClaimRate: '16.7%',
          hasAlert: false,
        },
        {
          categoryName: '產品責任',
          premium: '10,000',
          claimAmount: '0',
          lossRatio: '0%',
          policyCount: '4',
          customerCount: '4',
          claimCount: '0',
          customerClaimRate: '0%',
          hasAlert: false,
        },
        {
          categoryName: '營繕承包人意外',
          premium: '10,000',
          claimAmount: '0',
          lossRatio: '0%',
          policyCount: '4',
          customerCount: '4',
          claimCount: '0',
          customerClaimRate: '0%',
          hasAlert: false,
        },
      ],
    },
  ],
}

function onTabChange(index: number) {
  tabData.value.activeIndex = index
}

function onDateRangeChange(index: number) {
  dateRangeData.value.selectedIndex = index
}
</script>

<template>
  <div class="agent-analysis-page">
    <!-- Header -->
    <AppHeader />

    <!-- Basic Info Section -->
    <div class="agent-analysis-page__basic-info">
      <WarningBanner v-bind="warningData" />
      <AgentBasicInfoCard v-bind="basicInfoData" />
    </div>

    <!-- Summary Alert -->
    <SummaryAlert
      v-bind="summaryData"
      class="agent-analysis-page__summary"
    />

    <!-- Tab Group -->
    <TabGroup
      v-bind="tabData"
      class="agent-analysis-page__tabs"
      @update:active-index="onTabChange"
    />

    <!-- Content Card -->
    <div class="agent-analysis-page__card">
      <!-- Agent Content -->
      <div class="agent-analysis-page__content">
        <!-- Title + Date Range -->
        <div class="agent-analysis-page__title-set">
          <div class="agent-analysis-page__title-row">
            <h2 class="agent-analysis-page__title">整體綜合表現</h2>
          </div>
          <DateRangeSelect
            v-bind="dateRangeData"
            @update:selected-index="onDateRangeChange"
          />
        </div>

        <!-- Scope Description -->
        <ScopeDescription v-bind="scopeData" />

        <!-- Metrics -->
        <div class="agent-analysis-page__metrics">
          <MetricCard v-bind="metricPremium" />
          <MetricCard v-bind="metricClaim" />
        </div>

        <!-- Insurance Table -->
        <InsuranceTable v-bind="tableData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.agent-analysis-page {
  width: 1440px;
  min-height: 1698px;
  background: #e1f0fa;
  position: relative;

  &__basic-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 1260px;
    position: absolute;
    top: 90px;
    left: 90px;
  }

  &__summary {
    position: absolute;
    top: 298px;
    left: 90px;
  }

  &__tabs {
    position: absolute;
    top: 402px;
    left: 90px;
  }

  &__card {
    position: absolute;
    top: 452px;
    left: 90px;
    width: 1260px;
    min-height: 1156px;
    background: #ffffff;
    box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: absolute;
    top: 40px;
    left: 60px;
  }

  &__title-set {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding: 0 0 20px;
    width: 1140px;
  }

  &__title-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__title {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
    color: #172122;
    margin: 0;
  }

  &__metrics {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 0 20px;
  }
}
</style>
