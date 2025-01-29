<script setup>
import DefaultImage from "@/assets/images/Astronauta.webp";
useSeoMeta({
  title: "Blog",
});

const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("blog").all()
);

// const { data: posts } = await useAsyncData("blog", () =>
//   queryContent("blog").find()
// );
// console.log(posts.value);

const breads = [{ link: "/blog", label: "Blog" }];

function getDefaultImage(image) {
  console.log(image);
  return image || DefaultImage;
}
</script>

<template>
  <div class="post wideContainer">
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

<style scoped>
.post {
  margin-top: 160px;
  /* container: post / inline-size; */
}

.post__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 50px;
  row-gap: 30px;
}

.post__item {
  position: relative;
  padding-block: 20px;
}

.post__title {
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: bold;
}

.post__description {
  margin: 0;
}

.post__imagebox {
  display: block;
  width: 100%;
  height: 280px;
  margin-bottom: 10px;
  overflow: hidden;
}

.post__imagebox img {
  height: 300px;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  transition: all 200ms ease-out;
}

.post__item:hover img {
  scale: 1.05;
}

@container post (max-width: 680px) {
  .post__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }
}
</style>
