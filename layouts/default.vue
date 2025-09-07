<script setup lang="ts">
import { HiArrowCircleLeft } from "vue-icons-plus/hi";

const route = useRoute();

const backLink = computed(() => {
  if (route.path.includes("pens/")) return "/pens";
  if (route.path.includes("blog/")) return "/blog";
  return "/";
});

const showBackLink = computed(() => {
  return route.path !== "/";
});
</script>

<template>
  <div class="layout">
    <nuxt-link v-if="showBackLink" :to="backLink" class="layout__backlink">
      <HiArrowCircleLeft size="45"></HiArrowCircleLeft>
    </nuxt-link>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style>
.layout {
  display: grid;
  place-items: center;
  background-color: var(--bg-color);
  min-height: 100dvh;
  width: 100%;
  color: white;
}

.layout__backlink {
  position: absolute;
  top: 15px;
  left: 10px;
  color: white;
}

.layout main {
  width: 100%;
}
</style>
