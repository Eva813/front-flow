<script setup lang="ts">
import { ref } from 'vue'

import AnalysisHeader from './components/business-analysis/AnalysisHeader.vue'
import AnalysisScopeNote from './components/business-analysis/AnalysisScopeNote.vue'
import AnalysisTabs from './components/business-analysis/AnalysisTabs.vue'
import BasicInfoSection from './components/business-analysis/BasicInfoSection.vue'
import BusinessHeader from './components/business-analysis/BusinessHeader.vue'
import MetricCards from './components/business-analysis/MetricCards.vue'
import MetricsTable from './components/business-analysis/MetricsTable.vue'
import SummaryNoticeCard from './components/business-analysis/SummaryNoticeCard.vue'
import {
  analysisTabs,
  basicInfo,
  dateRangeOptions,
  metricCards,
  metricRows,
  scopeLines,
  summaryBullets,
  summaryNote,
} from './components/business-analysis/mockData'
import type { AnalysisTabKey } from './components/business-analysis/types'

const activeTab = ref<AnalysisTabKey>('summary')
const selectedDateRange = ref(dateRangeOptions[0].value)
</script>

<template>
  <div class="business-page">
    <BusinessHeader />

    <main class="business-page__content">
      <div class="business-page__stack">
        <BasicInfoSection :info="basicInfo" />
        <SummaryNoticeCard :bullets="summaryBullets" :note="summaryNote" />
        <AnalysisTabs v-model="activeTab" :tabs="analysisTabs" />

        <section class="analysis-panel" aria-labelledby="analysis-title">
          <div class="analysis-panel__inner">
            <AnalysisHeader
              id="analysis-title"
              v-model="selectedDateRange"
              label="資料區間為："
              title="整體綜合表現"
              :options="dateRangeOptions"
            />

            <AnalysisScopeNote title="分析範圍說明：" :lines="scopeLines" />

            <MetricCards :cards="metricCards" />

            <MetricsTable :rows="metricRows" />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.business-page {
  min-height: 100vh;
  background: var(--page-bg);
}

.business-page__content {
  padding: 46px 0 60px;
}

.business-page__stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: min(var(--page-width), calc(100vw - (var(--page-gutter) * 2)));
  margin: 0 auto;
}

.analysis-panel {
  margin-top: 30px;
}

.analysis-panel__inner {
  width: min(var(--analysis-width), 100%);
  margin: 0 auto;
}

@media (max-width: 1439px) {
  .business-page__stack {
    width: calc(100vw - (var(--page-gutter) * 2));
  }
}
</style>
