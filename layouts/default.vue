<script setup></script>

<template>
  <div class="def-layout">
    <!-- <LayoutHeader /> -->
    <main class="main">
      <slot />
    </main>
    <!-- <LayoutFooter /> -->
  </div>
</template>

<style>
.def-layout {
  display: grid;
  place-items: center;
  background-color: var(--bg-color);
  min-height: 100dvh;
  width: 100%;
  color: white;
}

.def-layout main {
  width: 100%;
}
</style>
