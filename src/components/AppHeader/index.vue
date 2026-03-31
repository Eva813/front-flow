<script setup lang="ts">
import type { AppHeaderProps } from './types'

withDefaults(defineProps<AppHeaderProps>(), {
  systemTitle: '業務員全視圖',
  logoSrc: ''
})
</script>

<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <div class="app-header__logo-set">
        <img
          v-if="logoSrc"
          :src="logoSrc"
          alt="Logo"
          class="app-header__logo"
        />
        <span class="app-header__separator" />
        <h1 class="app-header__system-title">{{ systemTitle }}</h1>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.app-header {
  width: 1440px;
  display: flex;
  align-items: center;
  padding: 0 90px;
  background: $white;
  box-shadow: $shadow-header;
  border-bottom: 1px solid rgba(23, 33, 34, 0.06);
  position: relative;
  z-index: 10;

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
    display: block;
  }

  &__separator {
    display: inline-block;
    width: 16px;
    height: 0;
    border-top: 1px solid $text-primary;
  }

  &__system-title {
    font-family: $font-family;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
    color: $text-primary;
    margin: 0;
    white-space: nowrap;
  }
}
</style>
