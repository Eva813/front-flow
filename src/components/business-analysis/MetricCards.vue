<script setup lang="ts">
import type { MetricCardItem } from './types'

const props = defineProps<{
  cards: MetricCardItem[]
}>()
</script>

<template>
  <section class="metric-cards" aria-label="整體指標">
    <article v-for="card in props.cards" :key="card.title" class="metric-card">
      <div class="metric-card__body">
        <div class="metric-card__main">
          <p class="metric-card__title">{{ card.title }}</p>
          <p class="metric-card__value">{{ card.value }}</p>
        </div>

        <div class="metric-card__details">
          <div class="metric-card__detail">
            <span>{{ card.primaryLabel }}</span>
            <strong>{{ card.primaryValue }}</strong>
            <span>{{ card.primarySuffix }}</span>
          </div>

          <div
            class="metric-card__detail"
            :class="{ 'metric-card__detail--ghost': card.secondaryGhost }"
          >
            <span>{{ card.secondaryLabel }}</span>
            <strong>{{ card.secondaryValue }}</strong>
            <span>{{ card.secondarySuffix }}</span>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.metric-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 0 0 20px;
}

.metric-card {
  min-height: 168px;
  border-radius: 20px;
  background: #edf7f9;
}

.metric-card__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 20px;
  height: 100%;
}

.metric-card__main {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.metric-card__title {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #172122;
}

.metric-card__value {
  margin: 0;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.5;
  color: #172122;
}

.metric-card__details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.metric-card__detail {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 160px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #475354;
}

.metric-card__detail strong {
  font-size: 16px;
  font-weight: 500;
}

.metric-card__detail--ghost {
  opacity: 0;
}

@media (max-width: 960px) {
  .metric-cards {
    grid-template-columns: 1fr;
  }
}
</style>
