<script setup lang="ts">
  import Dog from '../Dog/index.vue'
</script>

<template>
  <div class="cover-container">
    <div class="cover-dog">
      <Dog />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cover-container {
    width: 100vw;
    height: 100vh;
    background-color: #f9fba0;
    z-index: 99;

    .cover-dog {
      left: 90%;
      top: 75%;
      width: auto;
      height: auto;
      position: absolute
    }
  }
</style>