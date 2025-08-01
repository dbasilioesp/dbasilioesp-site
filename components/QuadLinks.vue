<script setup lang="ts">
import { SITE_LINKS } from "~/utils/data/links";

function handleEnter(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  document.body.dataset.activelink = target.dataset.id || "";
}

function handleLeave() {
  document.body.dataset.activelink = "";
}
</script>

<template>
  <nav class="grid">
    <nuxt-link
      v-for="(link, index) in SITE_LINKS"
      :key="link.title"
      :data-id="index"
      class="grid__item"
      :style="link.style"
      :title="link.title"
      :to="link.link"
      :target="link.target"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave"
    >
      <img :src="link.image" alt="" />
    </nuxt-link>
  </nav>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  max-width: 318px;
  /* position: relative; */
}

.grid__item {
  width: 120px;
  height: 120px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  overflow: hidden;
  transition: all 200ms ease-out;

  img {
    object-position: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
}

/* Animation hover */
.grid:hover .grid__item:not(:hover) {
  transform: scale(0.92);
}

.grid__item:hover {
  filter: hue-rotate(100deg);
  transform: scale(1.1);
}
</style>
