// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: true,
  css: ["~/assets/css/main.css", "vue3-carousel/dist/carousel.css"],
  modules: ["@nuxt/icon", "@nuxt/content"],
  icon: {
    customCollections: [
      {
        prefix: "icon",
        dir: "./assets/icons",
      },
    ],
  },
  app: {
    head: {
      title: "David Basilio",
      htmlAttrs: {
        lang: "pt-BR",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js",
          defer: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/contrib/auto-render.min.js",
          defer: true,
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css",
        },
      ],
      meta: [
        {
          name: "theme-color",
          content: "#ffffff",
        },
        {
          name: "msapplication-TileColor",
          content: "#da532c",
        },
      ],
    },
  },
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear(); // Do not generate any routes (except the defaults)
    },
  },
});
