<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Card from './components/Card/index.vue'

const videoRef = ref<any>(null);



onMounted(() => {
  document.addEventListener("mouseenter", () => {
    const video = videoRef.value as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.volume = 0.1
        video.play()
      }
    }
  }, { once: true });

  document.addEventListener("touchmove", () => {
    const video = videoRef.value as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.volume = 0.1
        video.play()
      }
    }
  }, { once: true });
})
</script>

<template>

  <Card />
  <video autoplay loop class="app-bg" ref="videoRef">
    <source src="./assets/bg.MP4" type="video/mp4" class=".app-bg-source"/>
  </video>
</template>

<style scoped>
.app-bg {
  position: fixed;  
  right: 0px;  
  bottom: 0px;  
  min-width: 100%;  
  min-height: 100%;  
  height: auto;  
  width: auto;  
  /*加滤镜*/
  /*filter: blur(15px); //背景模糊设置 */
  /*-webkit-filter: grayscale(100%);*/  
  /*filter:grayscale(100%); //背景灰度设置*/  
  z-index:-11;
  object-fit: cover;
}

.app-bg-source {
  min-width: 100%;  
  min-height: 100%;  
  height: auto;  
  width: auto;
}
</style>
