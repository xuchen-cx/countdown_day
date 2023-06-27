<script setup lang="ts">

const {visible, title} = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String
  }
});



</script>

<template>
  <div v-if="visible" class="modal">
    <div class="modal-content">
      <div class="modal-title">
        <span>{{ title || '标题' }}</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>



<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.023);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background-color: white;
    padding: 1rem;
    min-width: 1200px;
    min-height: 300px;
    border-radius: 3%;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

    .modal-title {
      color: rgb(63 63 70);
      font-size: 24px;
      text-align: center;
      font-weight: 800;
      margin-bottom: 1rem;
    }
  } 
}


</style>