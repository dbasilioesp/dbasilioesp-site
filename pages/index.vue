<script setup lang="ts">
import { SITE_LINKS } from "~/utils/data/links";
</script>

<!-- <style src="~/assets/css/pages/home.css"></style> -->

<template>
  <div class="homePage">
    <div class="homePage__hz">
      <div class="homePage__topboard">
        <strong class="homePage__nome">David B. E.</strong>
        <QuadLinks />
      </div>
      <nav class="homePage__nav">
        <template v-for="link in SITE_LINKS" :key="link.title">
          <nuxt-link :href="link.link" :target="link.target">{{
            link.title
          }}</nuxt-link>
        </template>
      </nav>
    </div>
    <Dust />
  </div>
</template>

<style>
.homePage {
  display: grid;
  place-items: center;
  background-color: var(--bg-color);
  min-height: 100dvh;
  width: 100%;
}

.homePage__hz {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
}

.homePage__topboard {
  display: flex;
  flex-direction: column;
  width: auto;
}

.homePage__nome {
  font-family: var(--fontTitle);
  font-size: 2.2rem;
  color: var(--accent-color);
  margin-bottom: 10px;
}

.homePage__nav {
  display: flex;
  flex-direction: column;

  a {
    color: white;
    font-family: var(--fontSerif);
    text-decoration: none;
    font-size: 2rem;
  }

  a:hover,
  a.active {
    color: var(--accent-color);
  }
}

body[data-activelink="0"] .homePage__nav a:nth-child(1),
body[data-activelink="1"] .homePage__nav a:nth-child(2),
body[data-activelink="2"] .homePage__nav a:nth-child(3),
body[data-activelink="3"] .homePage__nav a:nth-child(4),
body[data-activelink="4"] .homePage__nav a:nth-child(5),
body[data-activelink="5"] .homePage__nav a:nth-child(6),
body[data-activelink="6"] .homePage__nav a:nth-child(7) {
  color: var(--accent-color);
}
</style>
