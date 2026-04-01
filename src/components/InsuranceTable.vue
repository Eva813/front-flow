<script setup lang="ts">
import type { InsuranceTableProps } from './types'
import icAlertRisk from '@/assets/icons/ic-alert-risk.svg'

defineProps<InsuranceTableProps>()
</script>

<template>
  <div class="insurance-table">
    <!-- Table Head -->
    <div class="insurance-table__head">
      <div class="insurance-table__head-row">
        <span class="insurance-table__head-cell insurance-table__head-cell--category">進單險別</span>
        <span class="insurance-table__head-cell insurance-table__head-cell--number">保費</span>
        <span class="insurance-table__head-cell insurance-table__head-cell--number">理賠金額</span>
        <span class="insurance-table__head-cell insurance-table__head-cell--ratio">簽單損率</span>
        <span class="insurance-table__head-cell insurance-table__head-cell--number">保單數</span>
        <span class="insurance-table__head-cell insurance-table__head-cell--number">客戶數</span>
        <span class="insurance-table__head-cell insurance-table__head-cell--number">賠案數</span>
        <span class="insurance-table__head-cell insurance-table__head-cell--rate">客戶出險率</span>
      </div>
    </div>

    <!-- Table Body -->
    <template v-for="(cat, catIdx) in categories" :key="catIdx">
      <!-- Primary Row (一級險別) -->
      <div class="insurance-table__row insurance-table__row--primary">
        <div class="insurance-table__row-inner">
          <div class="insurance-table__cell insurance-table__cell--category">
            <span class="insurance-table__category-name insurance-table__category-name--primary">{{ cat.categoryName }}</span>
            <img
              v-if="cat.hasAlert"
              :src="icAlertRisk"
              alt=""
              class="insurance-table__alert-icon"
            />
          </div>
          <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--primary">{{ cat.premium }}</span>
          <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--primary">{{ cat.claimAmount }}</span>
          <span class="insurance-table__cell insurance-table__cell--ratio insurance-table__cell--primary">{{ cat.lossRatio }}</span>
          <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--primary">{{ cat.policyCount }}</span>
          <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--primary">{{ cat.customerCount }}</span>
          <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--primary">{{ cat.claimCount }}</span>
          <span class="insurance-table__cell insurance-table__cell--rate insurance-table__cell--primary">{{ cat.customerClaimRate }}</span>
        </div>
        <hr class="insurance-table__divider" />
      </div>

      <!-- Sub Rows (二級險種) -->
      <template v-if="cat.subCategories">
        <div
          v-for="(sub, subIdx) in cat.subCategories"
          :key="`${catIdx}-${subIdx}`"
          class="insurance-table__row insurance-table__row--sub"
        >
          <div class="insurance-table__row-inner insurance-table__row-inner--sub">
            <div class="insurance-table__cell insurance-table__cell--category">
              <span class="insurance-table__placeholder"></span>
              <span class="insurance-table__category-name insurance-table__category-name--sub">{{ sub.categoryName }}</span>
              <img
                v-if="sub.hasAlert"
                :src="icAlertRisk"
                alt=""
                class="insurance-table__alert-icon"
              />
            </div>
            <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--sub">{{ sub.premium }}</span>
            <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--sub">{{ sub.claimAmount }}</span>
            <span class="insurance-table__cell insurance-table__cell--ratio insurance-table__cell--sub">{{ sub.lossRatio }}</span>
            <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--sub">{{ sub.policyCount }}</span>
            <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--sub">{{ sub.customerCount }}</span>
            <span class="insurance-table__cell insurance-table__cell--number insurance-table__cell--sub">{{ sub.claimCount }}</span>
            <span class="insurance-table__cell insurance-table__cell--rate insurance-table__cell--sub">{{ sub.customerClaimRate }}</span>
          </div>
          <hr
            v-if="subIdx < cat.subCategories.length - 1"
            class="insurance-table__divider"
          />
        </div>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.insurance-table {
  display: flex;
  flex-direction: column;
  padding: 0 0 60px;

  &__head {
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    width: 1140px;
    background: #edf7f9;
    border: 1px solid #e3f6fa;
    border-radius: 8px;
  }

  &__head-row {
    display: flex;
    gap: 28px;
    padding: 0 22px;
  }

  &__head-cell {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #475354;

    &--category {
      width: 192px;
    }

    &--number {
      width: 92px;
    }

    &--ratio {
      width: 70px;
    }

    &--rate {
      width: 80px;
    }
  }

  &__row {
    display: flex;
    flex-direction: column;
    width: 1140px;

    &--primary {
      .insurance-table__row-inner {
        padding: 20px 22px;
      }
    }

    &--sub {
      .insurance-table__row-inner {
        padding: 12px 22px 20px;
      }
    }
  }

  &__row-inner {
    display: flex;
    align-items: center;
    gap: 28px;

    &--sub {
      // sub-row specific styles
    }
  }

  &__cell {
    font-family: 'Noto Sans TC', sans-serif;
    line-height: 1.5;

    &--category {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 192px;
    }

    &--number {
      width: 92px;
    }

    &--ratio {
      width: 70px;
    }

    &--rate {
      width: 80px;
    }

    &--primary {
      font-weight: 400;
      font-size: 16px;
      color: #172122;
    }

    &--sub {
      font-weight: 400;
      font-size: 14px;
      color: #475354;
    }
  }

  &__category-name {
    &--primary {
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 500;
      font-size: 18px;
      line-height: 1.5;
      color: #172122;
      width: 76px;
    }

    &--sub {
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.5;
      color: #475354;
    }
  }

  &__placeholder {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &__alert-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &__divider {
    border: none;
    border-top: 1px solid #c4eae7;
    margin: 0;
    width: 100%;
  }
}
</style>
