<script setup lang="ts">
import { Ref, ref } from 'vue';
import Card from './components/Card/index.vue'
import Modal from './components/Modal/index.vue'
import bgPcSrc from '../public/bg_pc.mp4'
import bgPhoneSrc from '../public/bg_phone.mp4'

const videoRef = ref(null);
const modalVisible: Ref<boolean> = ref(true);
const translateVisible: Ref<boolean> = ref(true);
const bgSrc: Ref<string> = ref('');


// 播放背景图片交互
const playBgVideo = async () => {
  const video = videoRef.value as unknown as HTMLVideoElement;
  if (video) {
    if (video.paused) {
      video.volume = 0.5
      video.loop = true
      await video.play()
    }
  }
  closeModal()
};

const closeModal = () => {
  modalVisible.value = false;
};

const showTranslation = () => {
  translateVisible.value = false
}

function isMobile() {
  const userAgentInfo = navigator.userAgent;
  const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let flag = false;
  for (let i = 0; i < agents.length; i++) {
    if (userAgentInfo.indexOf(agents[i]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
}

if (isMobile()) {
  bgSrc.value = bgPhoneSrc
} else {
  bgSrc.value = bgPcSrc
}

</script>

<template>
  <video class="app-bg" ref="videoRef">
    <source :src="bgSrc" type="video/mp4" class=".app-bg-source"/>
  </video>
  <Card />
  <Modal :visible="modalVisible" title="是否播放视频背景" >
    <p style="color: black;">美人さん、バックグラウンドでのビデオ再生をオンにしますか?</p>
    <p style="color: black;" v-if="!translateVisible">美女，你是否选择开启背景视频播放?</p>
    <a href="javascript:void(0);" v-if="translateVisible" @click="showTranslation">看不懂？点这里⬇</a>
    <template #footer>
      <button @click="playBgVideo" style="margin-right: 5px;">播放</button>
      <button @click="closeModal">算了，不放了吵死</button>
    </template>
  </Modal>
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
