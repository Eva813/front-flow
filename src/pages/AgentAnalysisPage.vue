<template>
  <div class="agent-analysis-page">
    <!-- Header -->
    <Header />

    <!-- Page Content -->
    <div class="page-container">
      <!-- Basic Info Card -->
      <BasicInfoCard
        :warning-title="'不可外流'"
        :warning-message="'本分析資料僅供內部使用，請同仁遵守公司資料保密及安全防範管理辦法。'"
        :last-updated-date="'最後更新時間：2026 年 2 月'"
        :name-block="{
          agentName: '徐*雯',
          agentId: 'E**C738183',
          companyName: '威*保經',
          companyId: 'BA1296****',
          supervisorId: '940171',
          supervisorName: '張巧勳',
        }"
        :status-badge="{
          registrationYear: 2018,
          recentPoliciesCount: 10,
          status: 'on',
        }"
      />

      <!-- Summary Card -->
      <SummaryCard
        :complaints="{ text: '客戶提出的官方申訴：共 3 筆 (近三個月： 1 筆)' }"
        :remarks="[
          {
            text: '特殊註記：A&H 個傷 - 通路業務員招攬品質不良',
            date: '2019/06/06',
          },
        ]"
      />

      <!-- Tab Navigation -->
      <div class="tab-group">
        <Tab
          v-for="(tab, index) in tabs"
          :key="index"
          :label="tab.label"
          :is-active="activeTabIndex === index"
          :show-alert="tab.showAlert"
          @click="activeTabIndex = index"
        />
      </div>

      <!-- Tab Content -->
      <div class="content-wrapper">
        <AnalysisTabContent
          v-if="activeTabIndex === 0"
          :title="'整體綜合表現'"
          :table-rows="tableRowsPersonalInjury"
          :show-range-explanation="true"
        />
        <AnalysisTabContent
          v-if="activeTabIndex === 1"
          :title="'整體綜合表現'"
          :table-rows="tableRowsAutoInsurance"
          :show-range-explanation="true"
        />
        <AnalysisTabContent
          v-if="activeTabIndex === 2"
          :title="'整體綜合表現'"
          :table-rows="tableRowsPersonalInjury2"
          :show-range-explanation="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '../components/base/Header/index.vue'
import Tab from '../components/base/Tab/index.vue'
import BasicInfoCard from '../components/features/BasicInfoCard/index.vue'
import SummaryCard from '../components/features/SummaryCard/index.vue'
import AnalysisTabContent from '../components/features/AnalysisTabContent/index.vue'

const activeTabIndex = ref(0)

const tabs = [
  { label: '個傷', showAlert: false },
  { label: '任意車險', showAlert: true },
  { label: '個傷', showAlert: false },
]

const tableRowsPersonalInjury = [
  {
    insuranceType: '任意車險',
    premium: 1742766,
    claimAmount: 1389222,
    lossRatio: '142.9%',
    policiesCount: 307,
    customersCount: 98,
    claimsCount: 28,
    customerClaimRate: '28.6%',
  },
  {
    insuranceType: 'A&H',
    premium: 500000,
    claimAmount: 250000,
    lossRatio: '50.0%',
    policiesCount: 100,
    customersCount: 80,
    claimsCount: 10,
    customerClaimRate: '12.5%',
  },
  {
    insuranceType: '個傷',
    premium: 300000,
    claimAmount: 150000,
    lossRatio: '50.0%',
    policiesCount: 60,
    customersCount: 50,
    claimsCount: 5,
    customerClaimRate: '10.0%',
  },
  {
    insuranceType: '個健',
    premium: 200000,
    claimAmount: 100000,
    lossRatio: '50.0%',
    policiesCount: 40,
    customersCount: 35,
    claimsCount: 3,
    customerClaimRate: '8.6%',
  },
  {
    insuranceType: '旅平險',
    premium: 150000,
    claimAmount: 75000,
    lossRatio: '50.0%',
    policiesCount: 30,
    customersCount: 28,
    claimsCount: 2,
    customerClaimRate: '7.1%',
  },
  {
    insuranceType: '營繕承包人意外',
    premium: 100000,
    claimAmount: 50000,
    lossRatio: '50.0%',
    policiesCount: 20,
    customersCount: 18,
    claimsCount: 1,
    customerClaimRate: '5.6%',
  },
]

const tableRowsAutoInsurance = [
  {
    insuranceType: '任意車險',
    premium: 2000000,
    claimAmount: 1500000,
    lossRatio: '75.0%',
    policiesCount: 350,
    customersCount: 120,
    claimsCount: 35,
    customerClaimRate: '29.2%',
  },
  {
    insuranceType: 'A&H',
    premium: 600000,
    claimAmount: 300000,
    lossRatio: '50.0%',
    policiesCount: 120,
    customersCount: 100,
    claimsCount: 12,
    customerClaimRate: '12.0%',
  },
  {
    insuranceType: '個傷',
    premium: 350000,
    claimAmount: 175000,
    lossRatio: '50.0%',
    policiesCount: 70,
    customersCount: 60,
    claimsCount: 6,
    customerClaimRate: '10.0%',
  },
]

const tableRowsPersonalInjury2 = [
  {
    insuranceType: '任意車險',
    premium: 1500000,
    claimAmount: 1000000,
    lossRatio: '66.7%',
    policiesCount: 280,
    customersCount: 90,
    claimsCount: 25,
    customerClaimRate: '27.8%',
  },
  {
    insuranceType: 'A&H',
    premium: 450000,
    claimAmount: 225000,
    lossRatio: '50.0%',
    policiesCount: 90,
    customersCount: 75,
    claimsCount: 8,
    customerClaimRate: '10.7%',
  },
]
</script>

<style scoped lang="scss">
.agent-analysis-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #e1f0fa;

  .page-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;

    .tab-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      margin: 20px 0 0 0;
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      padding: 24px;
      background: #ffffff;
      border-radius: 0 0 20px 20px;
      box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);
      margin-top: 8px;
    }
  }
}
</style>
