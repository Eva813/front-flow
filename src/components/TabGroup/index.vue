<script setup lang="ts">
// Figma: 9714:25868 | TabGroup | row, gap:12px, hug
import TabItem from './TabItem.vue'
import type { TabDef } from '../../types'

const props = defineProps<{
  tabs: TabDef[]
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'tab-change', key: string): void
}>()
</script>

<template>
  <!-- Figma: layout_TFJH4F | row, align-center, gap:12px, hug -->
  <div class="tab-group" role="tablist">
    <TabItem
      v-for="tab in tabs"
      :key="tab.key"
      :tab="tab"
      :isActive="tab.key === activeTab"
      @click="emit('tab-change', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.tab-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}
</style>
