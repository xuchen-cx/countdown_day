<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CoverOption from './components/CoverOption/index.vue';
import FireWork from './components/FireWork/index.vue';
import { isMobileFunc } from './utils';

enum PageStatusEnum {
  COVER = 'COVER',
  FIREWORk = 'FIREWORK',
}

const pageStatus = ref<PageStatusEnum>(PageStatusEnum.COVER);
const isMobile = ref<boolean>(false);

onMounted(() => {
  if (isMobileFunc()) {
    isMobile.value = true;
  }
});

const handleToFireWork = () => {
  if (pageStatus.value === PageStatusEnum.COVER) {
    pageStatus.value = PageStatusEnum.FIREWORk;
  } else {
    pageStatus.value = PageStatusEnum.COVER;
  }
};
</script>

<template>
  <p class="introduction" @click="handleToFireWork" :style="{ 'font-size': isMobile ? '16px' : '36px' }">
    {{ pageStatus === PageStatusEnum.COVER ? '去放烟花➡' : '返回主页⬅' }}
  </p>
  <CoverOption v-if="pageStatus === PageStatusEnum.COVER" />
  <FireWork v-show="pageStatus === PageStatusEnum.FIREWORk" :pageStatus="pageStatus" />
</template>

<style scoped>
.introduction {
  position: absolute;
  color: rgb(37 99 235);
  cursor: pointer;
  font-weight: 500;
}
</style>
