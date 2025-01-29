<script setup>
useHead({
  titleTemplate: "%s - DB",
});

useSeoMeta({
  title: "Portifólio",
  ogTitle: "Portifólio",
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
