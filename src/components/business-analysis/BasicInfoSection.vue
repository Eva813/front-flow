<script setup lang="ts">
import type { BasicInfo } from './types'

const props = defineProps<{
  info: BasicInfo
}>()
</script>

<template>
  <section class="basic-info">
    <div class="basic-info__warning">
      <div class="basic-info__warning-copy">
        <p class="basic-info__warning-title">不可外流</p>
        <p class="basic-info__warning-text">
          本分析資料僅供內部使用，請同仁遵守公司資料保密及安全防範管理辦法。
        </p>
      </div>

      <p class="basic-info__updated">{{ props.info.lastUpdated }}</p>
    </div>

    <article class="basic-info__card">
      <div class="basic-info__top">
        <div class="basic-info__identity">
          <div class="basic-info__name-row">
            <h2 class="basic-info__name">{{ props.info.agentName }}</h2>
            <span class="basic-info__number">{{ props.info.agentNo }}</span>
          </div>

          <div class="basic-info__company-row">
            <h3 class="basic-info__company">{{ props.info.companyName }}</h3>
            <span class="basic-info__company-number">{{ props.info.companyNo }}</span>
          </div>
        </div>

        <p class="basic-info__manager">{{ props.info.managerInfo }}</p>
      </div>

      <div class="basic-info__divider" aria-hidden="true" />

      <div class="basic-info__status">
        <span class="basic-info__status-text">{{ props.info.registrationInfo }}</span>
        <span class="basic-info__status-text">{{ props.info.recentPerformanceInfo }}</span>

        <svg class="basic-info__status-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#47CF8E" />
          <path d="M8 12.5l2.4 2.4L16.5 9" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.basic-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.basic-info__warning {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  padding-right: 30px;
}

.basic-info__warning-copy {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.basic-info__warning-title {
  margin: 0;
  color: #cb4022;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
}

.basic-info__warning-text {
  margin: 0;
  color: #cb4022;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}

.basic-info__updated {
  margin: 0;
  color: #475354;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

.basic-info__card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 40px 24px;
  border-radius: 20px;
  background: var(--surface);
  box-shadow: 0 6px 16px rgba(23, 33, 34, 0.04);
}

.basic-info__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.basic-info__identity {
  display: flex;
  align-items: center;
  gap: 100px;
  min-width: 0;
}

.basic-info__name-row,
.basic-info__company-row {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
}

.basic-info__name {
  margin: 0;
  color: #172122;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.5;
}

.basic-info__number {
  color: #172122;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.5;
}

.basic-info__company {
  margin: 0;
  color: #172122;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
}

.basic-info__company-number {
  color: #172122;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
}

.basic-info__manager {
  margin: 0;
  color: #172122;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
}

.basic-info__divider {
  height: 1px;
  background: #c4eae7;
}

.basic-info__status {
  display: flex;
  align-items: center;
  gap: 2px;
  color: #172122;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

.basic-info__status-text {
  color: #172122;
}

.basic-info__status-icon {
  width: 24px;
  height: 24px;
  margin-left: 2px;
}

@media (max-width: 960px) {
  .basic-info__warning,
  .basic-info__top,
  .basic-info__identity {
    flex-direction: column;
    align-items: flex-start;
  }

  .basic-info__manager {
    white-space: normal;
  }

  .basic-info__name,
  .basic-info__number {
    font-size: 24px;
  }
}
</style>
