// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css", "vue3-carousel/dist/carousel.css"],
  modules: ["@nuxt/icon"],
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
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
        {
          rel: "manifest",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#5bbad5",
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
