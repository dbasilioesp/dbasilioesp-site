<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { works } from "~/utils/data/works";
</script>

<style src="~/assets/css/pages/home.css"></style>

<template>
  <div class="home">
    <span class="home__line1"></span>
    <span class="home__line3"></span>
    <section class="inBanner">
      <span class="home__line2"></span>
      <div class="inBanner__inn">
        <div class="avatar">
          <img src="~/assets/images/perfil.jpg" alt="Astronauta" />
        </div>
        <div class="inBanner__content">
          <h1 class="inBanner__title pageTitle">Programador Web</h1>
          <h2 class="sectionTitle brown">David Basilio</h2>
          <p class="screenText">
            Sou Desenvolvedor Web à mais de 8 anos, entre esse tempo já fui
            back-end, front-end e do time de Growth. Como amador, gosto volta
            meia de estudar programação de jogos e game design.
          </p>
          <p class="screenText">
            Minhas principais habilidades são JS, CSS e Vue, depois tem um alto
            conhecimento do desenvolvimento back-end, tendo trabalhado 4 anos
            nessa área.
          </p>
          <div class="items-1">
            <a
              class="baseButton"
              href="https://www.linkedin.com/in/dbasilioesp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Linkedin</span>
              <Icon name="icon:external-link"
            /></a>
            <a
              class="baseButton greenButton"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5551984845668"
            >
              <span>WhatsApp</span>
              <Icon name="icon:external-link"
            /></a>
            <a
              class="baseButton blackButton"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dbasilioesp"
            >
              <span>Github</span>
              <Icon name="icon:external-link" style="color: white" mode="svg"
            /></a>
          </div>
        </div>
      </div>
    </section>

    <section class="myWorks">
      <span class="home__line4"></span>
      <div class="myWorks__base">
        <!-- <h2 class="myWorks__title sectionTitle">Meus últimos trabalhos</h2> -->

        <Carousel :items-to-show="1" wrapAround class="myWorks__carousel">
          <Slide class="myWorks__slide" v-for="item in works" :key="item.title">
            <div>
              <h3 class="myWorks__slideTitle">{{ item.title }}</h3>
              <p class="myWorks__slideDesc screenText">
                {{ item.desc }}
              </p>
              <a
                :href="item.link"
                class="outlineButton smallButton"
                target="_blank"
                rel="noopener noreferrer"
                >Veja o Site</a
              >
            </div>
            <div>
              <img
                :src="item.image"
                :alt="item.title"
                class="myWorks__slideImg"
                width="500"
                height="250"
              />
              <div class="myWorks__slideTags items-1">
                <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </Slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </Carousel>
      </div>
    </section>

    <section class="techskeys centerContainer">
      <h2 class="sectionTitle">Técnicas do momento</h2>

      <div class="grid2cols">
        <div class="techskeys__cardItem" style="--borderColor: var(--blue)">
          <h3 class="techskeys__cardTitle">CSS</h3>
          <div class="techskeys__keys">
            <span>CSS Variables</span>
            <span>Viewports Units</span>
            <span>@container query</span>
            <span>CSS Grids e Subgrids</span>
            <span>fit-content </span>
            <span>color()</span>
            <span>CSS Nesting</span>
            <span>minmax()</span>
            <span>@layer</span>
          </div>
        </div>

        <div class="techskeys__cardItem" style="--borderColor: var(--yellow)">
          <h3 class="techskeys__cardTitle">JS</h3>
          <div class="techskeys__keys">
            <span>Dynamic Imports</span>
            <span>Temporal</span>
            <span>Sets e Maps</span>
            <span>string.replaceAll()</span>
            <span>Private Fields</span>
            <span>Array[filter, map, reduce, ...]</span>
            <span>Top Level await</span>
            <span>Optional Chaining</span>
            <span>Promise.allSettled()</span>
          </div>
        </div>

        <div class="techskeys__cardItem" style="--borderColor: var(--green)">
          <h3 class="techskeys__cardTitle">VUE</h3>
          <div class="techskeys__keys">
            <span>Teleport</span>
            <span>Multilevel v-model</span>
            <span>Composables</span>
            <span>Provide/Inject</span>
            <span>ref/reactive</span>
            <span>computed</span>
          </div>
        </div>

        <div class="techskeys__cardItem" style="--borderColor: var(--blue)">
          <h3 class="techskeys__cardTitle">NUXT</h3>
          <div class="techskeys__keys">
            <span>useSeoMeta</span>
            <span>Universal Rendering</span>
            <span>SPA</span>
            <span>/utils</span>
            <span>/composables</span>
            <span>/content</span>
            <span>Prerendering</span>
            <span>Layouts</span>
            <span>useFetch</span>
          </div>
        </div>
      </div>
    </section>

    <section class="myProjects centerContainer">
      <h2 class="sectionTitle">Meus projetos</h2>

      <div class="myProjects__cards grid2cols">
        <NuxtLink
          class="myProjects__cardItem"
          to="/jogos-digitais"
          style="--bg: url('/images/space-shooter.webp')"
        >
          <h3 class="myProjects__cardTitle">Jogos Digitais</h3>
        </NuxtLink>
        <a
          class="myProjects__cardItem"
          href="https://taigalivraria.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          style="--bg: url('/images/taiga.jpg')"
        >
          <h3 class="myProjects__cardTitle">Livraria Taiga</h3>
        </a>
      </div>
    </section>
  </div>
</template>
