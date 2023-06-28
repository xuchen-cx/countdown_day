<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Dog from '../Dog/index.vue';
import Flower from '../Flower/index.vue';
import Modal from '../Modal/index.vue';
import Card from '../Card/index.vue';
import Image from '../Image/index.vue';
import LiuZhouSrc from '../../assets/liuzhou.jpg';
import QingDaoSrc from '../../assets/qingdao.jpg';
import WeihaiSrc from '../../assets/weihai.jpg';
import ShenZhenSrc from '../../assets/shenzhen.jpg';
import XiaMen1Src from '../../assets/xiamen1.jpg';
import XiaMen2Src from '../../assets/xiamen2.jpg';
import OneYearSrc from '../../assets/oneYear.jpg';
import SongSrc from '../../assets/song.mp3';
import NailSvg from '../../assets/nail.svg';
import MusicSvg from '../../assets/music.svg';
import FlowerSvg from '../../assets/flower.svg';
import { C_BIRTH_DAY, C_BIRTH_DAY_PASS, C_BIRTH_DAY_PASS_KEY } from '@/constants';
import { decrypt, encrypt, isMobileFunc } from '@/utils';

interface IImageProps {
  src: string;
  description: string;
}

const modalVisible = ref(true);
const isLogin = ref(false);
const loginVal = ref('');
const loginMessageVisible = ref(false);
const imgArr: IImageProps[] = [
  { src: OneYearSrc, description: '一周年图' },
  { src: LiuZhouSrc, description: 'in 柳州' },
  { src: QingDaoSrc, description: 'in 青岛' },
  { src: ShenZhenSrc, description: 'in 深圳' },
  { src: WeihaiSrc, description: 'in 威海' },
  { src: XiaMen1Src, description: 'from 厦门去漳州动车上' },
  { src: XiaMen2Src, description: 'in 厦门黄厝海边' },
];
const isMobile = ref<boolean>(false);
const audioRef = ref<HTMLAudioElement | null>(null);
const isPlay = ref<boolean>(true);

onMounted(() => {
  if (isMobileFunc()) {
    isMobile.value = true;
  }

  const passWord = localStorage.getItem(C_BIRTH_DAY);
  if (passWord) {
    const realPass = decrypt(passWord, C_BIRTH_DAY_PASS_KEY);
    if (realPass === C_BIRTH_DAY_PASS) {
      modalVisible.value = false;
      isLogin.value = true;
    }
  }

  window.onresize = () => {
    if (isMobileFunc()) {
      isMobile.value = true;
    } else {
      isMobile.value = false;
    }
  };
});

const handleLogin = () => {
  if (loginVal.value === C_BIRTH_DAY_PASS) {
    const encryptPass = encrypt(loginVal.value, C_BIRTH_DAY_PASS_KEY);
    localStorage.setItem(C_BIRTH_DAY, encryptPass);
    modalVisible.value = false;
    loginMessageVisible.value = false;
    isLogin.value = true;
  } else {
    loginMessageVisible.value = true;
  }
};

const handlePlayOrPause = async () => {
  const audilEl = audioRef.value;
  if (audilEl) {
    if (audilEl.paused) {
      await audilEl.play();
      isPlay.value = true;
    } else {
      audilEl.pause();
      isPlay.value = false;
    }
  }
};
</script>

<template>
  <div class="cover-container">
    <Modal :visible="modalVisible" title="请输入通关密码">
      <div class="login-container">
        <div class="login-input">
          <input placeholder="提示：我的生日，例如19720627" v-model="loginVal" style="width: 80%" />
        </div>
        <span class="login-message" v-if="loginMessageVisible">密码错误捏，我生日都不记得？</span>
        <button class="login-btn" @click="handleLogin">登陆</button>
      </div>
    </Modal>
    <div class="cover-dog" :style="{ top: isMobile ? 0 : '75%' }">
      <Dog />
    </div>
    <div v-if="isLogin" class="cover-card">
      <img :src="MusicSvg" alt="" :class="{ music: true, rotate: isPlay }" @click="handlePlayOrPause" />
      <audio ref="audioRef" :src="SongSrc" style="display: none" autoplay loop></audio>
      <Card />
    </div>
    <div v-if="isLogin" class="cover-body" :style="{ display: isMobile ? 'block' : 'flex' }">
      <div class="cover-photo" :style="{ width: isMobile ? '100%' : '50%', 'margin-right': isMobile ? 0 : '1rem' }">
        <div class="cover-photo-title">
          <img :src="NailSvg" alt="nail" width="20" />
          <span class="cover-photo-title-text">照片墙</span>
        </div>
        <div class="cover-photo-img">
          <Image v-for="({ src, description }, index) in imgArr" :key="index" :src="src" :description="description" />
        </div>
      </div>
      <div class="cover-flower" :style="{ width: isMobile ? '100%' : '48%' }">
        <div class="cover-flower-title">
          <img :src="FlowerSvg" alt="flower" width="20" />
          <span class="cover-flower-title-text">送你一朵温室中的玫瑰</span>
        </div>
        <Flower />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cover-container {
  width: 100vw;
  min-height: 100vh;
  background-color: #f9fba0;
  z-index: 99;
  padding: 2rem;
  box-sizing: border-box;

  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .login-input {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }

    .login-message {
      color: red;
      display: block;
      margin-bottom: 10px;
    }

    .login-btn {
      display: block;
      width: fit-content;
      margin-bottom: 20px;
    }
  }
  .cover-dog {
    left: 90%;
    width: auto;
    height: auto;
    position: fixed;
  }

  .cover-card {
    width: calc(100% - 4rem);
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .music {
    width: 6.5rem;
    position: absolute;
    left: 80%;
    cursor: pointer;
  }

  .rotate {
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .cover-body {
    display: flex;
    .cover-photo {
      min-height: 50vh;
      border: 1px solid rgb(156 163 175);
      border-radius: 1%;
      padding: 1rem;
      box-sizing: border-box;
      position: relative;

      .cover-photo-title {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
        font-weight: 600;

        .cover-photo-title-text {
          font-size: 3rem;
          color: black;
        }
      }

      .cover-photo-img {
        display: flex;
        flex-wrap: wrap;
      }
    }

    .cover-flower {
      height: 80vh;
      border: 1px solid rgb(156 163 175);
      border-radius: 1%;
      padding: 1rem;
      box-sizing: border-box;
      position: relative;

      .cover-flower-title {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
        font-weight: 600;

        .cover-flower-title-text {
          font-size: 3rem;
          color: black;
        }
      }
    }
  }
}
</style>
