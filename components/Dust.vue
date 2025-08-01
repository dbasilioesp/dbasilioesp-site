<script></script>

<template>
  <div class="dust">
    <span
      :style="`--rotate: ${i * 30}deg; --delay: ${i * 200}ms`"
      v-for="i in 12"
      :key="i + 'a'"
    ></span>
    <span
      :style="`--rotate: -${i * 30}deg; --delay: ${i * 200}ms`"
      v-for="i in 12"
      :key="i + 'b'"
    ></span>
    <span
      :style="`--rotate: -${i * 45}deg; --delay: ${i * 200}ms`"
      v-for="i in 12"
      :key="i + 'c'"
    ></span>
    <span
      :style="`--rotate: ${i * 45}deg; --delay: ${i * 200}ms`"
      v-for="i in 12"
      :key="i + 'd'"
    ></span>
  </div>
</template>

<style>
.dust {
  position: absolute;
  top: calc(50% - 8rem);
  left: calc(50% - 4rem);
  grid-column: 1;
  grid-row: 1;
  width: var(--sq);
  height: var(--sq);
  z-index: 0;

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--accent-color);
    animation: explode 2800ms infinite ease-in-out;
    animation-delay: var(--delay);
  }
}

@keyframes explode {
  from {
    translate: 0;
    scale: 1.6;
    rotate: var(--rotate);
  }
  to {
    rotate: var(--rotate);
    transform: translateX(300px);
    opacity: 0;
  }
}
</style>
