<script setup>
useSeoMeta({
  title: "Jogos Digitais",
});

const engines = [
  {
    title: "Game Maker",
    games: [
      {
        title: "Space Shooter",
        about: "Jogo de nave bem produzido seguindo curso do NoneClass.",
        topics: ["Engine GameMaker"],
        image: "/images/space-shooter.webp",
        links: [
          {
            label: "Jogue online",
            url: "https://gx.games/games/xp8y7e/spaceshooter-785/",
          },
          { label: "Curso", url: "https://noneclass.com.br/" },
        ],
      },
      {
        title: "TopDown Shooter 785",
        about:
          "Jogo de tiro em aliens visto de cima seguindo curso do NoneClass.",
        topics: ["Engine GameMaker"],
        image: "/images/topdownshooter.jpg",
        links: [
          {
            label: "Jogue online",
            url: "https://gx.games/games/fpl4ll/topdownshooter-785/",
          },
          { label: "Curso", url: "https://noneclass.com.br/" },
        ],
      },
    ],
  },
  {
    title: "Unity 3D",

    games: [
      {
        title: "📦Fallbox",
        about:
          "Jogo de se esquivar de caixas caindo em uma plataforma pequena, controlando de um lado pro outro a caixa roxa.",
        image: "/images/fallbox.jpg",
        topics: ["Engine Unity"],
        links: [
          {
            label: "Jogue online",
            url: "https://play.unity.com/en/games/bde26a93-9d04-4cbd-baf2-b88f461e31e5/build",
          },
          {
            label: "Código Fonte",
            url: "https://github.com/dbasilioesp/fallbox-fredi-tutorial-unity",
          },
          {
            label: "Tutorial",
            url: "https://www.youtube.com/watch?v=v1XLQdl9yUo",
          },
        ],
      },
    ],
  },
  {
    title: "Javascript",
    games: [
      {
        title: "🐮Freeway Arcade p5",
        about: "Jogo de atravessar a rua sem ser pego pelos carros.",
        topics: ["Engine P5.js", "Assets da Alura"],
        image: "/images/freeway.jpg",
        links: [
          {
            label: "Código fonte",
            url: "https://github.com/dbasilioesp/freeway-arcade-p5",
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <div class="jD wideContainer">
    <h1 class="jD__pageTitle pageTitle">Jogos Digitais</h1>

    <section class="jD__section" v-for="engine in engines" :key="engine.title">
      <h2 class="jD__sectionHeader">{{ engine.title }}</h2>

      <div class="jD__card" v-for="game in engine.games" :key="game.title">
        <img :src="game.image" :alt="game.title" />
        <div>
          <h3 class="jD__cardTitle sectionTitle">{{ game.title }}</h3>
          <div>
            <p>{{ game.about }}</p>
            <ul>
              <li v-for="topic in game.topics" :key="topic">{{ topic }}</li>
            </ul>

            <div class="items-1">
              <a
                class="outlineButton smallButton"
                v-for="link in game.links"
                :href="link.url"
                :key="link.label"
                >{{ link.label }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.jD {
  padding-bottom: 100px;
}
.jD__pageTitle {
  margin-top: 160px;
  margin-bottom: 80px;
}

.jD__section {
  margin-bottom: 60px;
}

.jD__sectionHeader {
  border-bottom: 3px solid white;
  text-align: right;
  font-family: var(--fontTitle);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.66;
  margin-bottom: 48px;
}

.jD__card {
  display: flex;
  width: 100%;
  gap: 40px;
  margin-bottom: 50px;
}

.jD__cardTitle {
  margin-top: 0;
  color: var(--accent-color);
}

.jD__card img {
  border-radius: 6px;
  max-width: 465px;
}
</style>
