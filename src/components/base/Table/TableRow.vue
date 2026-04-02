<template>
  <div :class="['table-row', { 'table-row--last': isLastRow }]">
    <div class="table-cell">{{ insuranceType }}</div>
    <div class="table-cell">{{ formatNumber(premium) }}</div>
    <div class="table-cell">{{ formatNumber(claimAmount) }}</div>
    <div class="table-cell">{{ formatPercentage(lossRatio) }}</div>
    <div class="table-cell">{{ policiesCount }}</div>
    <div class="table-cell">{{ customersCount }}</div>
    <div class="table-cell">{{ claimsCount }}</div>
    <div class="table-cell">{{ formatPercentage(customerClaimRate) }}</div>
  </div>
</template>

<script setup lang="ts">
import type { TableRowProps } from './types'

defineProps<TableRowProps>()

const formatNumber = (value: number | string) => {
  if (typeof value === 'string') return value
  return new Intl.NumberFormat('zh-TW').format(value)
}

const formatPercentage = (value: number | string) => {
  if (typeof value === 'string') return value
  return `${value.toFixed(1)}%`
}
</script>

<style scoped lang="scss">
.table-row {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0;
  border-bottom: 1px solid #e0e0e0;
  background: #ffffff;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f9f9f9;
  }

  &--last {
    border-bottom: 2px solid #05a0c0;
  }

  .table-cell {
    padding: 12px 16px;
    font-family: Noto Sans TC;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5em;
    color: #172122;
    text-align: center;
    border-right: 1px solid #f0f0f0;

    &:last-child {
      border-right: none;
    }
  }
}
</style>
