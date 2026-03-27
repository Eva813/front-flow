<script setup lang="ts">
// Figma: 9714:25879 | BulletPointScope | ComponentSet 9865:3744
// 分析範圍說明文字（含 Bold 括號段落）
import type { ScopeDescription } from '../../types'

const props = defineProps<{
  scope: ScopeDescription
}>()
</script>

<template>
  <!-- Figma: 9714:25879 | BulletPoint component | column layout -->
  <div class="bullet-point-scope">
    <!-- Figma: I9714:25879;6222:821 | 標籤行 "分析範圍說明：" | Title 16 Bold #172122 -->
    <span class="bullet-point-scope__title">{{ scope.title }}</span>
    <!-- Figma: Inline text with bold segment -->
    <p class="bullet-point-scope__body">
      <!-- Figma: I9714:25879;6222:827 | Body 16 #172122 -->
      <span class="bullet-point-scope__text">{{ scope.mainText1 }}</span>
      <!-- Figma: I9714:25879;6222:828 | Title 16 Bold #172122 -->
      <strong class="bullet-point-scope__bold">{{ scope.excludeText }}</strong>
      <!-- Figma: I9714:25879;6222:831 | Body 16 #172122 -->
      <span class="bullet-point-scope__text">{{ scope.mainText2 }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.bullet-point-scope {
  display: flex;
  flex-direction: column;
  gap: 0;

  &__title {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500; // Title 16 Bold
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
    display: block;
  }

  &__body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
  }

  &__text {
    font-weight: 400; // Body 16
  }

  &__bold {
    font-weight: 500; // Title 16 = Medium weight in Noto Sans TC
  }
}
</style>
