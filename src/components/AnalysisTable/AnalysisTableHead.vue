<script setup lang="ts">
</script>

<template>
  <div class="analysis-table-head">
    <div class="analysis-table-head__row">
      <div class="analysis-table-head__cat">
        <span class="analysis-table-head__placeholder" />
        <span class="analysis-table-head__cat-text">進單險別</span>
      </div>
      <span class="analysis-table-head__col analysis-table-head__col--normal">保費</span>
      <span class="analysis-table-head__col analysis-table-head__col--normal">理賠金額</span>
      <span class="analysis-table-head__col analysis-table-head__col--ratio">簽單損率</span>
      <span class="analysis-table-head__col analysis-table-head__col--normal">保單數</span>
      <span class="analysis-table-head__col analysis-table-head__col--normal">客戶數</span>
      <span class="analysis-table-head__col analysis-table-head__col--normal">賠案數</span>
      <span class="analysis-table-head__col analysis-table-head__col--rate">客戶出險率</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.analysis-table-head {
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  width: 1140px;
  background: $surface-light;
  border: 1px solid $table-head-border;
  border-radius: 8px;

  &__row {
    display: flex;
    gap: 28px;
    padding: 0 22px;
  }

  &__cat {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 192px;
    flex-shrink: 0;
  }

  &__placeholder {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &__cat-text {
    width: 76px;
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: $text-secondary;
  }

  &__col {
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: $text-secondary;
    flex-shrink: 0;

    &--normal {
      width: 92px;
    }

    &--ratio {
      width: 70px;
    }

    &--rate {
      width: 80px;
    }
  }
}
</style>
