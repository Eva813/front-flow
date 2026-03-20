<script setup lang="ts">
import type { MetricRow } from './types'

const props = defineProps<{
  rows: MetricRow[]
}>()

const columns = [
  { key: 'category', label: '進單險別' },
  { key: 'premium', label: '保費' },
  { key: 'claimAmount', label: '理賠金額' },
  { key: 'signLossRatio', label: '簽單損率' },
  { key: 'policyCount', label: '保單數' },
  { key: 'customerCount', label: '客戶數' },
  { key: 'claimCaseCount', label: '賠案數' },
  { key: 'customerLossRatio', label: '客戶出險率' },
] as const
</script>

<template>
  <section class="metrics-table" aria-label="業務員分析表格">
    <div class="metrics-table__head" role="row">
      <div
        v-for="column in columns"
        :key="column.key"
        class="metrics-table__cell metrics-table__cell--head"
      >
        {{ column.label }}
      </div>
    </div>

    <div class="metrics-table__body">
      <article
        v-for="(row, index) in props.rows"
        :key="`${row.category}-${index}`"
        class="metrics-table__row"
        :class="{ 'metrics-table__row--compact': row.compact }"
      >
        <div class="metrics-table__cell metrics-table__cell--category">
          <span v-if="row.leadingPlaceholder" class="metrics-table__placeholder" aria-hidden="true" />

          <span class="metrics-table__category">{{ row.category }}</span>

          <svg
            v-if="row.trailingAlert"
            class="metrics-table__alert"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" fill="#fff" />
            <path d="M12 6.5a1.2 1.2 0 0 1 1.2 1.2v5.8a1.2 1.2 0 0 1-2.4 0V7.7A1.2 1.2 0 0 1 12 6.5Z" fill="#E03636" />
            <circle cx="12" cy="16.9" r="1.15" fill="#E03636" />
          </svg>
        </div>

        <div class="metrics-table__cell">{{ row.premium }}</div>
        <div class="metrics-table__cell">{{ row.claimAmount }}</div>
        <div class="metrics-table__cell metrics-table__cell--ratio">{{ row.signLossRatio }}</div>
        <div class="metrics-table__cell">{{ row.policyCount }}</div>
        <div class="metrics-table__cell">{{ row.customerCount }}</div>
        <div class="metrics-table__cell">{{ row.claimCaseCount }}</div>
        <div class="metrics-table__cell metrics-table__cell--ratio">{{ row.customerLossRatio }}</div>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.metrics-table {
  width: 100%;
  padding-bottom: 60px;
}

.metrics-table__head,
.metrics-table__row {
  display: grid;
  grid-template-columns: minmax(220px, 1.8fr) repeat(7, minmax(80px, 1fr));
  column-gap: 28px;
  align-items: center;
}

.metrics-table__head {
  padding: 12px 22px;
  border: 1px solid #e3f6fa;
  border-radius: 8px;
  background: #edf7f9;
}

.metrics-table__cell {
  min-width: 0;
  color: #475354;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
}

.metrics-table__cell--head {
  font-weight: 500;
}

.metrics-table__body {
  position: relative;
}

.metrics-table__row {
  padding: 20px 22px;
  border-bottom: 1px solid #c4eae7;
}

.metrics-table__row--compact {
  padding-top: 12px;
  padding-bottom: 20px;
}

.metrics-table__row--compact .metrics-table__cell {
  font-size: 14px;
}

.metrics-table__row--compact .metrics-table__cell--category .metrics-table__category {
  font-size: 16px;
}

.metrics-table__cell--category {
  display: flex;
  align-items: center;
  gap: 8px;
}

.metrics-table__category {
  font-size: 18px;
  font-weight: 500;
  color: #172122;
}

.metrics-table__placeholder {
  width: 14px;
  height: 10px;
  border-radius: 2px;
  background: transparent;
  flex: none;
}

.metrics-table__alert {
  width: 24px;
  height: 24px;
  flex: none;
}

.metrics-table__cell--ratio {
  font-weight: 500;
}

@media (max-width: 960px) {
  .metrics-table__head,
  .metrics-table__row {
    min-width: 1140px;
  }

  .metrics-table {
    overflow-x: auto;
  }
}
</style>
