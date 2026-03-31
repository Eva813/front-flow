<script setup lang="ts">
import type { TableRowData } from './types'
import icAlertRisk from '@/assets/icons/ic-alert-risk.svg'
import AnalysisTableSubRow from './AnalysisTableSubRow.vue'

defineProps<TableRowData>()
</script>

<template>
  <div class="analysis-row">
    <div class="analysis-row__main">
      <div class="analysis-row__content">
        <div class="analysis-row__cat">
          <img
            :src="icAlertRisk"
            alt=""
            class="analysis-row__alert-icon"
            :class="{ 'analysis-row__alert-icon--hidden': !hasAlert }"
          />
          <span class="analysis-row__name">{{ categoryName }}</span>
          <img
            :src="icAlertRisk"
            alt="Alert"
            class="analysis-row__alert-icon"
            :class="{ 'analysis-row__alert-icon--hidden': !hasAlert }"
          />
        </div>
        <span class="analysis-row__col analysis-row__col--normal">{{ premium }}</span>
        <span class="analysis-row__col analysis-row__col--normal">{{ claimAmount }}</span>
        <span class="analysis-row__col analysis-row__col--ratio">{{ lossRatio }}</span>
        <span class="analysis-row__col analysis-row__col--normal">{{ policyCount }}</span>
        <span class="analysis-row__col analysis-row__col--normal">{{ customerCount }}</span>
        <span class="analysis-row__col analysis-row__col--normal">{{ claimCount }}</span>
        <span class="analysis-row__col analysis-row__col--rate">{{ customerClaimRate }}</span>
      </div>
      <hr class="analysis-row__divider" />
    </div>

    <!-- Sub rows -->
    <AnalysisTableSubRow
      v-for="(subRow, index) in subRows"
      :key="index"
      v-bind="subRow"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.analysis-row {
  display: flex;
  flex-direction: column;
  width: 1140px;

  &__main {
    display: flex;
    flex-direction: column;
    width: 1140px;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 28px;
    padding: 20px 22px;
  }

  &__cat {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 192px;
    flex-shrink: 0;
  }

  &__alert-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;

    &--hidden {
      opacity: 0;
    }
  }

  &__name {
    width: 76px;
    font-family: $font-family;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__col {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
    flex-shrink: 0;

    &--normal {
      width: 92px;
    }

    &--ratio {
      width: 70px;
    }

    &--rate {
      width: 80px;
    }
  }

  &__divider {
    border: none;
    border-top: 1px solid $divider;
    margin: 0;
    width: 100%;
  }
}
</style>
