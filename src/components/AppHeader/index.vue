<script setup lang="ts">
import logoUrl from '../../assets/logo-tmnewa.svg'

const props = defineProps<{
  systemName: string
}>()
</script>

<template>
  <!-- Figma: 9714:25873 | Header | 1440×80 | bg #FFFFFF | shadow 0px 6px 10px 0px rgba(23,33,34,0.03) -->
  <header class="app-header">
    <div class="app-header__inner">
      <div class="app-header__logo-set">
        <!-- Figma: I9714:25873;4022:23291 | logo-tmnewa | 240×44 | fallback SVG -->
        <img :src="logoUrl" alt="TMNEWA" class="app-header__logo" width="240" height="44" />
        <div class="app-header__divider" aria-hidden="true" />
        <!-- Figma: I9714:25873;4020:16361 | System text | Title 24 #172122 -->
        <span class="app-header__system-name">{{ systemName }}</span>
      </div>
      <!-- Figma: I9714:25873;4020:16363 | Nav/menu | opacity:0 此頁不顯示 -->
      <!-- menu slot intentionally hidden for this page (Assumption: controlled by route) -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(23, 33, 34, 0.03);

  &__inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1260px;
    margin: 0 auto;
    padding: 0 0;
    height: 80px;
  }

  &__logo-set {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 70px; // Figma: Header gap logo to system name = 70px
  }

  &__logo {
    width: 240px;
    height: 44px;
    display: block;
    flex-shrink: 0;
  }

  &__divider {
    width: 1px;
    height: 32px;
    background-color: #c4eae7;
    flex-shrink: 0;
    // Part of logo-set visual, between logo and system name
    // Note: gap:70px covers logo→divider→name; actual position approximated
    margin: 0 -35px; // center within the 70px gap
  }

  &__system-name {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5em;
    color: #172122;
    white-space: nowrap;
  }
}
</style>
