<script setup lang="ts">
import { hexPulse } from "@/utils/hex-pulse/main";

onMounted(() => {
  document.body.classList.add("hex-pulse");
  hexPulse();
});

onBeforeUnmount(() => {
  document.body.classList.remove("hex-pulse");
});
</script>

<template>
  <div>
    <canvas id="c"></canvas>
    <section class="sectionCredits">
      <p class="textCredit">
        Inspirado no Codepen de
        <a href="https://codepen.io/creativeocean/pen/yyYqWNb">Tom Miller</a>
      </p>
    </section>
  </div>
</template>

<style>
.hex-pulse {
  /* --bg-color: black; */
}

#c {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* border-radius: 50%; */
  /* width: min(1400px, 100%); */
  /* width: 100%; */
  height: 100%;
  width: 350px;
  height: 350px;
  max-height: 1050px;
}
</style>
