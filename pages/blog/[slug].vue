<script setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});

onMounted(() => {
  setTimeout(() => {
    renderMathInElement(document.body, {
      // customised options
      // • auto-render specific keys, e.g.:
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      // • rendering keys, e.g.:
      throwOnError: false,
    });
  }, 100);
});
</script>

<template>
  <div class="page article wideContainer">
    <h1 class="pageTitle">{{ page.title }}</h1>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<style>
span.katex {
  font-size: 16px;
}

code {
  /* --shiki-default-bg: var(--purple); */
  /* --shiki-font-style: italic; */
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  border: 44px solid slategrey;
  display: block;
  border-radius: 8px;
  overflow: auto;
}

code > span:first-child {
  padding-top: 16px;
}

code > span:last-child {
  padding-bottom: 16px;
}

code > span {
  padding-inline: 16px;
  font-family: inherit;
}

code span {
  font-family: inherit;
}
</style>

<style scoped>
.page {
  margin-top: 160px;
  max-width: 110ch;
  margin-inline: auto;
}
</style>
