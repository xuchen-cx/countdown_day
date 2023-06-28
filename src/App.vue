<script setup lang="ts">
import { ref } from 'vue';
import CoverOption from './components/CoverOption/index.vue';
import FireWork from './components/FireWork/index.vue';

enum PageStatusEnum {
  COVER = 'COVER',
  FIREWORk = 'FIREWORK',
}

const pageStatus = ref<PageStatusEnum>(PageStatusEnum.COVER);

const handleToFireWork = () => {
  if (pageStatus.value === PageStatusEnum.COVER) {
    pageStatus.value = PageStatusEnum.FIREWORk;
  } else {
    pageStatus.value = PageStatusEnum.COVER;
  }
};
</script>

<template>
  <span class="introduction" @click="handleToFireWork">
    {{ pageStatus === PageStatusEnum.COVER ? '去放烟花➡' : '返回主页⬅' }}
  </span>
  <CoverOption v-if="pageStatus === PageStatusEnum.COVER" />
  <FireWork v-show="pageStatus === PageStatusEnum.FIREWORk" :pageStatus="pageStatus" />
</template>

<style scoped>
.introduction {
  position: absolute;
  color: rgb(37 99 235);
  cursor: pointer;
  font-size: 2rem;
  font-weight: 500;
}
</style>
