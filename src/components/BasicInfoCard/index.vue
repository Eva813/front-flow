<script setup lang="ts">
import type { BasicInfoCardProps } from './types'
import icStatusOn from '@/assets/icons/ic-status-on.svg'

const props = withDefaults(defineProps<BasicInfoCardProps>(), {
  status: 'on'
})
</script>

<template>
  <section class="basic-info">
    <!-- Warning and last update -->
    <div class="basic-info__warning-row">
      <div class="basic-info__warning">
        <span class="basic-info__warning-title">{{ props.warningText }}</span>
        <span class="basic-info__warning-desc">{{ props.warningDescription }}</span>
      </div>
      <span class="basic-info__last-updated">最後更新時間：{{ props.lastUpdated }}</span>
    </div>

    <!-- Basic info card -->
    <div class="basic-info__card">
      <!-- Name section -->
      <div class="basic-info__name-row">
        <div class="basic-info__agent">
          <div class="basic-info__agent-name">
            <span class="basic-info__name">{{ props.agentName }}</span>
            <span class="basic-info__no">{{ props.agentNo }}</span>
          </div>
          <div class="basic-info__agency">
            <span class="basic-info__company-name">{{ props.companyName }}</span>
            <span class="basic-info__company-no">{{ props.companyNo }}</span>
          </div>
        </div>
        <div class="basic-info__manager">
          <span class="basic-info__manager-text">{{ props.manager }}</span>
        </div>
      </div>

      <!-- Divider -->
      <hr class="basic-info__divider" />

      <!-- Status -->
      <div class="basic-info__status">
        <span class="basic-info__status-text">登錄於 {{ props.registeredYear }} 年 ｜ </span>
        <span class="basic-info__status-text">最近三個月有進單 {{ props.recentPolicyCount }} 張</span>
        <img
          v-if="props.status === 'on'"
          :src="icStatusOn"
          alt="Status On"
          class="basic-info__status-icon"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.basic-info {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
  width: 1260px;

  &__warning-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
    padding-right: 30px;
  }

  &__warning {
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }

  &__warning-title {
    font-family: $font-family;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
    color: $warning-text;
  }

  &__warning-desc {
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: $warning-text;
  }

  &__last-updated {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    gap: 10px;
    padding: 30px 40px 24px;
    background: $white;
    border-radius: 20px;
    box-shadow: $shadow-basic;
  }

  &__name-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    gap: 60px;
  }

  &__agent {
    display: flex;
    align-items: center;
    gap: 100px;
  }

  &__agent-name {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__name {
    font-family: $font-family;
    font-weight: 500;
    font-size: 32px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__no {
    font-family: $font-family;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__agency {
    display: flex;
    gap: 10px;
  }

  &__company-name {
    font-family: $font-family;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__company-no {
    font-family: $font-family;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__manager {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }

  &__manager-text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__divider {
    border: none;
    border-top: 1px solid $divider;
    margin: 0;
    width: 100%;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  &__status-text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: $text-primary;
  }

  &__status-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
