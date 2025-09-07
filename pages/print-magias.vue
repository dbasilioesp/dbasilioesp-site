<script lang="ts" setup>
import { PrintMagics } from "print-magics";
</script>

<template>
  <PrintMagics class="page" />
</template>

<style scoped>
.page {
  --mg-card: var(--brown);
  --mg-outline: white;
  /* 
  --mg-button-one-bg: #edb183;
  --mg-button-two-bg: #f15152; 
  */
}
</style>

<style src="print-magics/style.css"></style>
