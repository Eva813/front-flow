<script setup lang="ts">
// Figma: 9714:25884 | Table head | ComponentSet 10460:5139
// bg:#EDF7F9, border:#E3F6FA, br:8px, padding:12px 0
// Row: gap:28px, padding:0 22px
// 8 columns with exact widths
</script>

<template>
  <!-- Figma: 9714:25884 | Table head | bg:#EDF7F9, border:#E3F6FA 1px, br:8px, padding:12px 0 -->
  <div class="analysis-table-head">
    <div class="analysis-table-head__row">
      <!-- Figma: 進單險別 | w:192px | placeholder(24×24) + text(w:76) | Title 16 #475354 -->
      <div class="analysis-table-head__cell analysis-table-head__cell--category">
        <span class="analysis-table-head__placeholder" aria-hidden="true" />
        <span class="analysis-table-head__label">進單險別</span>
      </div>
      <!-- Figma: 保費 | w:92px -->
      <div class="analysis-table-head__cell analysis-table-head__cell--w92">
        <span class="analysis-table-head__label">保費</span>
      </div>
      <!-- Figma: 理賠金額 | w:92px -->
      <div class="analysis-table-head__cell analysis-table-head__cell--w92">
        <span class="analysis-table-head__label">理賠金額</span>
      </div>
      <!-- Figma: 簽單損率 | w:70px -->
      <div class="analysis-table-head__cell analysis-table-head__cell--w70">
        <span class="analysis-table-head__label">簽單損率</span>
      </div>
      <!-- Figma: 保單數 | w:92px -->
      <div class="analysis-table-head__cell analysis-table-head__cell--w92">
        <span class="analysis-table-head__label">保單數</span>
      </div>
      <!-- Figma: 客戶數 | w:92px -->
      <div class="analysis-table-head__cell analysis-table-head__cell--w92">
        <span class="analysis-table-head__label">客戶數</span>
      </div>
      <!-- Figma: 賠案數 | w:92px -->
      <div class="analysis-table-head__cell analysis-table-head__cell--w92">
        <span class="analysis-table-head__label">賠案數</span>
      </div>
      <!-- Figma: 客戶出險率 | w:80px -->
      <div class="analysis-table-head__cell analysis-table-head__cell--w80">
        <span class="analysis-table-head__label">客戶出險率</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.analysis-table-head {
  background-color: #edf7f9;
  border: 1px solid #e3f6fa;
  border-radius: 8px;
  padding: 12px 0;

  &__row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 28px;
    padding: 0 22px;
  }

  &__cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;

    &--category {
      width: 192px;
    }

    &--w92 {
      width: 92px;
    }

    &--w70 {
      width: 70px;
    }

    &--w80 {
      width: 80px;
    }
  }

  &__placeholder {
    // Figma: 24×24 placeholder rect in 進單險別 header
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &__label {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500; // Title 16
    font-size: 16px;
    line-height: 1.5em;
    color: #475354;
    width: 76px; // Figma: text frame w:76 in category col
  }

  // For non-category cells, label takes full cell width
  &__cell:not(&__cell--category) &__label {
    width: auto;
  }
}
</style>
