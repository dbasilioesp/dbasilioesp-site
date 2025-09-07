<script setup>
import DefaultImage from "@/assets/images/Astronauta.webp";
useSeoMeta({
  title: "Blog",
});

const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("blog").all()
);

function getDefaultImage(image) {
  return image || DefaultImage;
}
</script>

<template>
  <div class="post centerContainer">
    <h1 class="pageTitle">Blog</h1>

    <div class="post__grid">
      <div
        v-for="post in posts"
        :key="post.id"
        :data-id="post.id"
        class="post__item"
      >
        <a :href="post.path" class="post__imagebox">
          <img :src="getDefaultImage(post.image)" :alt="post.title" />
        </a>

        <a :href="post.path" class="post__title">{{ post.title }}</a>

        <p class="post__description">{{ post.description }}</p>

        <div>
          <small>{{ getDateLabel(post.date) }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
