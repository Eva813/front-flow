<script setup lang="ts">
import logoTmnewa from '@/assets/icons/logo-tmnewa.svg'
</script>

<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <div class="app-header__logo-set">
        <img :src="logoTmnewa" alt="新安東京海上" class="app-header__logo" />
        <span class="app-header__divider"></span>
        <span class="app-header__system-name">業務員全視圖</span>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 0 90px;
  background: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(23, 33, 34, 0.03);
  width: 1440px;

  &__nav {
    display: flex;
    align-items: center;
    gap: 70px;
  }

  &__logo-set {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__logo {
    width: 240px;
    height: 44px;
  }

  &__divider {
    display: inline-block;
    width: 16px;
    height: 0;
    border-top: 1px solid #172122;
  }

  &__system-name {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
    color: #172122;
    white-space: nowrap;
  }
}
</style>
