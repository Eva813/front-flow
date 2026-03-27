<script setup lang="ts">
// Figma: 9714:25942 | Summary | bg:#FFF6E0, br:12px, padding:16px 24px, width:1260
// layout_8S94AJ: column, gap:10px

const props = defineProps<{
  complaintTotal: number
  complaintRecentCount: number
  noteDate: string
}>()
</script>

<template>
  <!-- Figma: 9714:25942 | Summary card | bg:#FFF6E0, borderRadius:12px, padding:16px 24px -->
  <div class="summary-alert-card">
    <!-- Figma: I9714:25942;5201:485 | summary row | row, gap:20px -->
    <div class="summary-alert-card__row">
      <!-- Figma: I9714:25942;5201:486 | ic/summary | 24×24 | fill:#E08906 -->
      <span class="summary-alert-card__icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.5L2 20.5H22L12 2.5Z" fill="#E08906" />
          <rect x="11" y="9" width="2" height="7" rx="1" fill="#FFFFFF" />
          <rect x="11" y="17" width="2" height="2" rx="1" fill="#FFFFFF" />
        </svg>
      </span>
      <!-- Figma: I9714:25942;5201:487 | Set/Bullet point | column, gap:4px -->
      <div class="summary-alert-card__bullets">
        <!-- Figma: I9714:25942;5201:488 | Bullet point | row, gap:12px -->
        <div class="summary-alert-card__bullet-row">
          <span class="summary-alert-card__dot" aria-hidden="true" />
          <!-- Figma: Body 16 | #172122 -->
          <span class="summary-alert-card__text">
            客戶提出的官方申訴：共 {{ complaintTotal }} 筆 (近三個月：{{ complaintRecentCount }} 筆)
          </span>
        </div>
        <!-- Figma: I9714:25942;5201:491 | Bullet point pack | row, gap:6px -->
        <div class="summary-alert-card__note-row">
          <!-- empty bullet placeholder keeps alignment -->
          <span class="summary-alert-card__dot summary-alert-card__dot--hidden" aria-hidden="true" />
          <!-- Figma: Body 14 | #475354 -->
          <span class="summary-alert-card__note">(註記於{{ noteDate }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summary-alert-card {
  width: 1260px;
  background-color: #fff6e0;
  border-radius: 12px;
  padding: 16px 24px;

  &__row {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  &__icon {
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  &__bullets {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__bullet-row,
  &__note-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  &__note-row {
    gap: 6px;
  }

  &__dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #172122;
    flex-shrink: 0;

    &--hidden {
      // keeps alignment; dot in Figma note row exists but has indented text gap
      visibility: hidden;
    }
  }

  &__text {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #172122;
  }

  &__note {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5em;
    color: #475354;
  }
}
</style>
