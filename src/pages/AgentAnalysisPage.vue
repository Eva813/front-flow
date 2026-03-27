<script setup lang="ts">
// Figma: 9714:25867 | AgentAnalysisPage | 1440×1698, bg:#E1F0FA
// Container: manages tab state, provides mock data (logic-coder will wire API later)
import { ref } from 'vue'
import AppHeader from '../components/AppHeader/index.vue'
import BasicInfoSection from '../components/BasicInfoSection/index.vue'
import SummaryAlertCard from '../components/SummaryAlertCard/index.vue'
import TabGroup from '../components/TabGroup/index.vue'
import ComprehensiveAnalysisTab from '../components/ComprehensiveAnalysisTab/index.vue'
import PlaceholderTab from '../components/PlaceholderTab/index.vue'
import type {
  AgentInfo,
  TabDef,
  MetricData,
  InsuranceGroup,
  ScopeDescription,
} from '../types'

// ── Mock data (from draft-spec.md Row Inventory + field definitions) ────────

const agentInfo: AgentInfo = {
  agentName: '— (待 API)',
  agencyName: '— (待 API)',
  managerInfo: '940171 張巧勳',
  registeredYear: 2018,
  recentOrderCount: 10,
  status: 'On',
  lastUpdatedAt: '2026 年 2 月',
}

const tabs: TabDef[] = [
  { key: 'comprehensive', label: '綜合分析', showAlert: false },
  { key: 'car',           label: '任意車險', showAlert: true },
  { key: 'personal',     label: '個傷',     showAlert: true },
]

const activeTab = ref('comprehensive')

const metrics: MetricData[] = [
  {
    mainLabel: '總保費 (元)',
    mainValue: 1742766,
    subLabel: '簽單損率',
    subCount: 187,      // 理賠件數 (confirmed Q4)
    percentage: '142.9%',
  },
  {
    mainLabel: '總理賠金額 (元)',
    mainValue: 1389222,
    subLabel: '簽單損率',
    subCount: 187,
    percentage: '142.9%',
  },
]

const scope: ScopeDescription = {
  title: '分析範圍說明：',
  mainText1: '目前已納入分析的險別包括：任意車險、A&H',
  excludeText: '(不包含疫苗險、團險、旅平險)',
  mainText2: '、住火、商火、工程險、公共意外、雇主責任、產品責任、營繕承包人意外。',
}

// Row Inventory (draft-spec.md Section 4.6)
const groups: InsuranceGroup[] = [
  {
    groupName: '任意車險',
    hasAlert: true,
    premium: 1114665,
    claimAmount: 1165918,
    lossRatio: '105.0%',
    policyCount: 101,
    customerCount: 41,
    claimCount: 17,
    claimRate: '22.0%',
    // No items → standalone parent with bottom divider
  },
  {
    groupName: 'A&H',
    hasAlert: false,
    premium: 577560,
    claimAmount: 199924,
    lossRatio: '34.6%',
    policyCount: 180,
    customerCount: 43,
    claimCount: 9,
    claimRate: '20.9%',
    items: [
      {
        name: '個傷',
        hasAlert: true,
        premium: 576258,
        claimAmount: 199924,
        lossRatio: '34.7%',
        policyCount: 174,
        customerCount: 42,
        claimCount: 9,
        claimRate: '21.4%',
        isLastInGroup: false,
      },
      {
        name: '個健',
        hasAlert: false,
        premium: 1302,   // corrected from 1.302 (confirmed Q5)
        claimAmount: 0,
        lossRatio: '0%',
        policyCount: 6,
        customerCount: 1,
        claimCount: 0,
        claimRate: '0%',
        isLastInGroup: true,
      },
    ],
  },
  {
    groupName: '工程險',
    hasAlert: false,
    premium: 13020,
    claimAmount: 0,
    lossRatio: '0%',
    policyCount: 5,
    customerCount: 5,
    claimCount: 0,
    claimRate: '0%',
  },
  {
    groupName: '責任保險',
    hasAlert: false,
    premium: 37521,
    claimAmount: 23380,
    lossRatio: '62.3%',
    policyCount: 21,
    customerCount: 19,
    claimCount: 2,
    claimRate: '10.5%',
    items: [
      {
        name: '公共意外',
        hasAlert: false,
        premium: 6000,
        claimAmount: 0,
        lossRatio: '0%',
        policyCount: 3,
        customerCount: 3,
        claimCount: 0,
        claimRate: '0%',
        isLastInGroup: false,
      },
      {
        name: '雇主責任',
        hasAlert: false,
        premium: 21521,
        claimAmount: 23380,
        lossRatio: '108.6%',
        policyCount: 14,
        customerCount: 12,
        claimCount: 2,
        claimRate: '16.7%',
        isLastInGroup: false,
      },
      {
        name: '產品責任',
        hasAlert: false,
        premium: 10000,
        claimAmount: 0,
        lossRatio: '0%',
        policyCount: 4,
        customerCount: 4,
        claimCount: 0,
        claimRate: '0%',
        isLastInGroup: false,
      },
      {
        name: '營繕承包人意外',
        hasAlert: false,
        premium: 10000,
        claimAmount: 0,
        lossRatio: '0%',
        policyCount: 4,
        customerCount: 4,
        claimCount: 0,
        claimRate: '0%',
        isLastInGroup: true,
      },
    ],
  },
]
</script>

<template>
  <!-- Figma: 9714:25867 | 業務員整頁 | 1440px, bg:#E1F0FA -->
  <div class="agent-analysis-page">
    <!-- Figma: 9714:25873 | Header -->
    <AppHeader systemName="業務員全視圖" />

    <!-- Page content: padded 90px each side -->
    <div class="agent-analysis-page__content">
      <!-- Figma: 9714:25943 | BasicInfoSection -->
      <BasicInfoSection :agentInfo="agentInfo" />

      <!-- Figma: 9714:25942 | SummaryAlertCard -->
      <SummaryAlertCard
        :complaintTotal="3"
        :complaintRecentCount="1"
        noteDate="2019/06/06"
      />

      <!-- Figma: 9714:25868 | TabGroup -->
      <TabGroup
        :tabs="tabs"
        :activeTab="activeTab"
        @tab-change="activeTab = $event"
      />

      <!-- Figma: 9714:25872 | Tab content white card -->
      <div class="agent-analysis-page__tab-card">
        <!-- Figma: Tab 1 綜合分析 -->
        <ComprehensiveAnalysisTab
          v-if="activeTab === 'comprehensive'"
          :metrics="metrics"
          :groups="groups"
          :scope="scope"
        />
        <!-- Figma: Tab 2 任意車險 (PlaceholderTab) -->
        <PlaceholderTab
          v-else-if="activeTab === 'car'"
          tabTitle="任意車險"
        />
        <!-- Figma: Tab 3 個傷 (PlaceholderTab) -->
        <PlaceholderTab
          v-else-if="activeTab === 'personal'"
          tabTitle="個傷"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.agent-analysis-page {
  min-width: 1440px;
  min-height: 1698px;
  background-color: #e1f0fa;

  &__content {
    width: 1260px; // 1440 - 90*2
    margin: 0 auto;
    padding: 24px 0 60px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__tab-card {
    // Figma: 9714:25872 | white card bg | x:90, y:452, w:1260, h:1156
    background-color: #ffffff;
    border-radius: 0 20px 20px 20px; // top-left aligns with active tab
    box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);
    padding: 40px 60px;
    min-height: 1156px;
    box-sizing: border-box;
  }
}
</style>
