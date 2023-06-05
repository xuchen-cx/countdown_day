<template>
  <div v-show="loading" class="loading-mask">
    <div class="loading-spinner"></div>
    <div>加载中，别急</div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  loading: {
      type: Boolean,
      default: false,
    },
});

</script>

<style>
.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 9999;
}

.loading-spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin-right: 5px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>