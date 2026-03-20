<template>
  <header class="business-header">
    <div class="business-header__inner">
      <div class="business-header__brand">
        <div class="business-header__brand-mark" aria-hidden="true">
          <span class="business-header__brand-dot" />
          <span class="business-header__brand-word">tmnewa</span>
        </div>
        <span class="business-header__divider" aria-hidden="true" />
        <h1 class="business-header__title">業務員全視圖</h1>
      </div>

      <nav class="business-header__menu" aria-label="頁首導覽">
        <button class="business-header__menu-item business-header__menu-item--active" type="button">
          我的名單
        </button>
        <button class="business-header__menu-item" type="button">
          查詢企業
        </button>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.business-header {
  width: 100%;
  background: var(--surface);
  box-shadow: 0 6px 10px rgba(23, 33, 34, 0.03);
}

.business-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(var(--page-width), calc(100vw - (var(--page-gutter) * 2)));
  margin: 0 auto;
  padding: 0 var(--page-gutter);
  min-height: 44px;
}

.business-header__brand {
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
}

.business-header__brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 240px;
  min-width: 240px;
  height: 44px;
}

.business-header__brand-dot {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, #172122 0%, #475354 100%);
  flex: none;
}

.business-header__brand-word {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #172122;
}

.business-header__divider {
  width: 16px;
  height: 1px;
  background: #172122;
  flex: none;
}

.business-header__title {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: #172122;
}

.business-header__menu {
  display: flex;
  align-items: center;
  gap: 40px;
  opacity: 0;
}

.business-header__menu-item {
  padding: 17px 0 12px;
  border: 0;
  background: transparent;
  color: #172122;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
}

.business-header__menu-item--active {
  color: #05a0c0;
}

@media (max-width: 1439px) {
  .business-header__inner {
    width: calc(100vw - (var(--page-gutter) * 2));
  }
}
</style>
