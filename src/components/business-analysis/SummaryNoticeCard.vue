<script setup lang="ts">
const props = defineProps<{
  bullets: string[]
  note: string
}>()
</script>

<template>
  <section class="summary-card" aria-label="摘要提示">
    <div class="summary-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#fff" />
        <circle cx="12" cy="12" r="9" fill="#e08906" />
        <rect x="11" y="6.5" width="2" height="7" rx="1" fill="#fff" />
        <circle cx="12" cy="16.8" r="1.15" fill="#fff" />
      </svg>
    </div>

    <div class="summary-card__content">
      <div
        v-for="bullet in props.bullets"
        :key="bullet"
        class="summary-card__bullet"
      >
        <span class="summary-card__dot" aria-hidden="true" />
        <p class="summary-card__text">{{ bullet }}</p>
      </div>

      <p class="summary-card__note">{{ props.note }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.summary-card {
  display: flex;
  gap: 20px;
  padding: 16px 24px;
  border-radius: 12px;
  background: #fff6e0;
}

.summary-card__icon {
  width: 24px;
  height: 24px;
  flex: none;
}

.summary-card__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.summary-card__bullet {
  display: flex;
  align-items: center;
  gap: 12px;
}

.summary-card__dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #172122;
  flex: none;
  margin-top: 6px;
}

.summary-card__text,
.summary-card__note {
  margin: 0;
  color: #172122;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

.summary-card__note {
  color: #475354;
  font-size: 14px;
}
</style>
