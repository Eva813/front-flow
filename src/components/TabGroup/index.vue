<script setup lang="ts">
import type { TabGroupProps, TabGroupEmits } from './types'
import TabItem from './TabItem.vue'

const props = defineProps<TabGroupProps>()
const emit = defineEmits<TabGroupEmits>()
</script>

<template>
  <nav class="tab-group">
    <TabItem
      v-for="(tab, index) in props.tabs"
      :key="index"
      :label="tab.label"
      :is-active="index === props.modelValue"
      :has-alert="tab.hasAlert"
      @click="emit('update:modelValue', index)"
    />
  </nav>
</template>

<style lang="scss" scoped>
.tab-group {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
