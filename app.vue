<script setup>
useHead({
  titleTemplate: "%s - David B.E.",
});

useSeoMeta({
  title: "Início",
  ogTitle: "Início",
  description:
    "Desenvolvedor Front-end, sócio da Taiga Livraria, estudioso das artes ocultas de Game Design e Design Gráfico.",
  ogDescription:
    "Desenvolvedor Front-end, sócio da Taiga Livraria, estudioso das artes ocultas de Game Design e Design Gráfico.",
  ogImage: "https://dbasilioesp.netlify.app/images/share.webp",
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
