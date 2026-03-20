<script setup lang="ts">
const props = defineProps<{
  title: string
  lines: string[]
}>()
</script>

<template>
  <section class="analysis-scope-note" aria-label="分析範圍說明">
    <div class="analysis-scope-note__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#fff6e0" />
        <circle cx="12" cy="12" r="9" fill="#e08906" />
        <rect x="11" y="6.5" width="2" height="7" rx="1" fill="#fff6e0" />
        <circle cx="12" cy="16.8" r="1.15" fill="#fff6e0" />
      </svg>
    </div>

    <div class="analysis-scope-note__content">
      <div class="analysis-scope-note__row">
        <span class="analysis-scope-note__bullet" aria-hidden="true" />
        <p class="analysis-scope-note__title">{{ props.title }}</p>
      </div>

      <div class="analysis-scope-note__stack">
        <div
          v-for="(line, index) in props.lines"
          :key="line"
          class="analysis-scope-note__row"
          :class="{
            'analysis-scope-note__row--muted': index > 0,
            'analysis-scope-note__row--tight': index > 0,
          }"
        >
          <span
            class="analysis-scope-note__bullet"
            :class="{ 'analysis-scope-note__bullet--hidden': index === 1 }"
            aria-hidden="true"
          />
          <p class="analysis-scope-note__text">{{ line }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.analysis-scope-note {
  display: flex;
  gap: 20px;
  padding: 16px 24px;
  border-radius: 12px;
  background: #fff6e0;
}

.analysis-scope-note__icon {
  width: 24px;
  height: 24px;
  flex: none;
}

.analysis-scope-note__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.analysis-scope-note__row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.analysis-scope-note__row--tight {
  align-items: flex-start;
}

.analysis-scope-note__bullet {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #172122;
  flex: none;
  margin-top: 6px;
}

.analysis-scope-note__bullet--hidden {
  opacity: 0;
}

.analysis-scope-note__title {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #172122;
}

.analysis-scope-note__text {
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #172122;
}

.analysis-scope-note__row--muted .analysis-scope-note__text {
  color: #475354;
}
</style>
