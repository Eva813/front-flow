<template>
  <div :class="['bullet-point', { 'bullet-point--subtext': isSubtext }]">
    <span class="bullet-dot"></span>
    <div class="bullet-content">
      <span class="bullet-text">{{ text }}</span>
      <span v-if="date" class="bullet-date">(註記於{{ date }})</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BulletPointProps } from './types'

withDefaults(defineProps<BulletPointProps>(), {
  isSubtext: false,
})
</script>

<style scoped lang="scss">
.bullet-point {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;

  &--subtext {
    gap: 6px;
    align-items: flex-start;
  }

  .bullet-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #172122;
    flex-shrink: 0;
    margin-top: 8px;
  }

  .bullet-content {
    display: flex;
    flex-direction: column;
    gap: 0px;

    .bullet-text {
      font-family: Noto Sans TC;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5em;
      color: #172122;
    }

    .bullet-date {
      font-family: Noto Sans TC;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5em;
      color: #475354;
    }
  }
}
</style>
