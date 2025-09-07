<script lang="ts" setup>
const pens = [
  {
    id: "1",
    title: "Labirinto Randomico",
    date: "2025-06-01T00:00:00",
    path: "/pens/labirinto-randomico",
    description:
      "Usando canvas e algoritmo de árvore para gerar um labirinto dentro de um raio circular.",
  },
];
</script>

<template>
  <div class="post centerContainer">
    <h1 class="pageTitle">Pens</h1>

    <div class="post__grid">
      <div
        v-for="item in pens"
        :key="item.id"
        :data-id="item.id"
        class="post__item"
      >
        <nuxt-link :to="item.path" class="post__title">{{
          item.title
        }}</nuxt-link>

        <p class="post__description">{{ item.description }}</p>

        <div>
          <small>{{ getDateLabel(item.date) }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
