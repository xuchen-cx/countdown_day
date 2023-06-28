<script setup lang="ts">
import { isMobileFunc } from '@/utils';
import { onMounted, ref } from 'vue';
const isMobile = ref<boolean>(false);

const { src, description } = defineProps({
  src: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  if (isMobileFunc()) {
    isMobile.value = true;
  }

  window.onresize = () => {
    if (isMobileFunc()) {
      isMobile.value = true;
    } else {
      isMobile.value = false;
    }
  };
});
</script>

<template>
  <div class="img-container">
    <img class="img-body" :src="src" :style="{ width: isMobile ? '100%' : '300px' }" loading="lazy" />
    <div class="img-desc">{{ description }}</div>
  </div>
</template>

<style scoped lang="scss">
.img-container {
  width: fit-content;
  height: fit-content;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 2rem;

  .img-body {
    // width: 130px;
    margin-bottom: 10px;
  }

  .img-desc {
    color: black;
    font-size: 12px;
  }
}
</style>
