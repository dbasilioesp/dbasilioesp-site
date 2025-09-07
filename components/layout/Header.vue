<script setup></script>

<template>
  <header class="header">
    <div class="header__inn">
      <nav class="header__nav">
        <nuxt-link to="/blog">Blog</nuxt-link>
        <nuxt-link to="/jogos-digitais">Jogos Digitais</nuxt-link>
        <a
          href="https://taigalivraria.com.br/"
          target="_blank"
          rel="noreferrer noopener"
          >Taiga Livraria</a
        >
      </nav>
    </div>
  </header>
</template>

<style>
.header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
}

.header__inn {
  padding: 20px 6vw 20px 6vw;
  gap: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  width: 92px;
  height: 56px;
}

.header__nav {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
}

.header__nav a {
  color: var(--darkgrey);
  text-decoration: none;
  font-weight: 600;
  transition: all 200ms ease-out;
  line-height: 1.05;
  font-size: 14px;
  text-align: right;
}

.header__nav a:hover {
  color: var(--pink);
}

@media (min-width: 600px) {
  .header__inn {
    padding: 20px 8vw;
  }
  .header__nav a {
    text-transform: uppercase;
    font-size: 14px;
  }
}
</style>
