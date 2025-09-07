<script lang="ts" setup>
import { HiExternalLink } from "vue-icons-plus/hi";
import { works } from "~/utils/data/works";
</script>

<template>
  <div class="page centerContainer">
    <section class="page__section">
      <img class="page__perfil" src="~/assets/images/perfil.jpg" />
      <h2 class="page__name sectionTitle brown">David Basilio Espitalher</h2>
      <h1 class="inBanner__title pageTitle">Programador Web</h1>
      <p class="screenText">
        Sou Desenvolvedor Web à mais de 8 anos, entre esse tempo já fui
        back-end, front-end e do time de Growth. Como amador, gosto volta meia
        de estudar programação de jogos e game design.
      </p>
      <p class="screenText">
        Minhas principais habilidades são JS, CSS e Vue, depois tem um alto
        conhecimento do desenvolvimento back-end, tendo trabalhado 4 anos nessa
        área.
      </p>
      <a
        class="baseButton"
        href="https://www.linkedin.com/in/dbasilioesp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Linkedin</span>
        <Icon name="icon:external-link"
      /></a>
    </section>

    <section class="page__section">
      <h3>Projetos Profissionais</h3>

      <div class="projectCard" v-for="work in works" :key="work.title">
        <!-- {{ work }} -->
        <div class="projectCard__cols">
          <div>
            <p>
              <a
                class="yellow projectCard__link"
                :href="work.link"
                target="_blank"
              >
                <strong>{{ work.title }}</strong>
                <HiExternalLink size="16" />
              </a>
            </p>
            <p>
              {{ work.desc }}
            </p>
            <p>{{ work.tech }}</p>
          </div>
          <img :src="work.image" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  max-width: 120ch;
  padding-block: 3rem;
}

.page__section {
  margin-bottom: 60px;
}

.page__perfil {
  width: 200px;
  border-radius: 50%;
  aspect-ratio: 1 /1;
  object-fit: cover;
}

.projectCard {
  margin-bottom: 40px;
}

.projectCard__cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.projectCard__link {
  display: flex;
  gap: 6px;
  align-items: center;
}

.page__name {
  margin-bottom: -10px;
}
</style>
