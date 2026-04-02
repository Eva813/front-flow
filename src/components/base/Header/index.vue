<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-logo-set">
        <!-- Logo -->
        <svg
          class="logo"
          viewBox="0 0 80 48"
          width="80"
          height="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <g fill="#CET9CD" fill-rule="nonzero">
              <path d="M10 10h20v20H10z" />
            </g>
          </g>
        </svg>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Title -->
        <h1 class="system-title">{{ title }}</h1>
      </div>

      <!-- Menu placeholder (hidden by default) -->
      <div v-if="showMenu" class="nav-menu"></div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { HeaderProps } from './types'

defineProps<Partial<HeaderProps>>()

const title = '業務員全視圖'
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 16px 32px;
  background: #ffffff;
  box-shadow: 0px 6px 16px 0px rgba(23, 33, 34, 0.04);

  .nav {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 16px;

    .nav-logo-set {
      display: flex;
      align-items: center;
      gap: 16px;

      .logo {
        width: 80px;
        height: 48px;
        flex-shrink: 0;
      }

      .divider {
        width: 1px;
        height: 24px;
        background: #d9d9d9;
      }

      .system-title {
        font-family: Noto Sans TC;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.5em;
        color: #172122;
        margin: 0;
        padding: 0;
      }
    }

    .nav-menu {
      margin-left: auto;
    }
  }
}
</style>
