<script setup lang="ts">
import type { TableSubRowData } from './types'
import icAlertRisk from '@/assets/icons/ic-alert-risk.svg'

defineProps<TableSubRowData>()
</script>

<template>
  <div class="analysis-sub-row" :class="{ 'analysis-sub-row--last': isLast }">
    <div class="analysis-sub-row__row">
      <div class="analysis-sub-row__cat">
        <img
          :src="icAlertRisk"
          alt=""
          class="analysis-sub-row__alert-icon"
          :class="{ 'analysis-sub-row__alert-icon--hidden': !hasAlert }"
        />
        <span class="analysis-sub-row__indent" />
        <span class="analysis-sub-row__name">{{ name }}</span>
        <img
          v-if="hasAlert"
          :src="icAlertRisk"
          alt="Alert"
          class="analysis-sub-row__alert-icon"
        />
      </div>
      <span class="analysis-sub-row__col analysis-sub-row__col--normal analysis-sub-row__col--premium">{{ premium }}</span>
      <span class="analysis-sub-row__col analysis-sub-row__col--normal">{{ claimAmount }}</span>
      <span class="analysis-sub-row__col analysis-sub-row__col--ratio">{{ lossRatio }}</span>
      <span class="analysis-sub-row__col analysis-sub-row__col--normal">{{ policyCount }}</span>
      <span class="analysis-sub-row__col analysis-sub-row__col--normal">{{ customerCount }}</span>
      <span class="analysis-sub-row__col analysis-sub-row__col--normal">{{ claimCount }}</span>
      <span class="analysis-sub-row__col analysis-sub-row__col--rate">{{ customerClaimRate }}</span>
    </div>
    <hr v-if="isLast" class="analysis-sub-row__divider" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.analysis-sub-row {
  display: flex;
  flex-direction: column;
  width: 1140px;

  &__row {
    display: flex;
    align-items: center;
    gap: 28px;
    padding: 12px 22px 20px;
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

  &__indent {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &__name {
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: $text-secondary;
  }

  &__col {
    font-family: $font-family;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: $text-secondary;
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

    &--premium {
      color: $text-primary;
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
