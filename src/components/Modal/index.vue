<template>
  <div v-if="visible" class="modal-mask" @click="handleMaskClick">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3 style="color: black;">{{ title }}</h3>
          <button class="modal-close-btn" @click="close">X</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Modal'
  }
});

const emits = defineEmits(['update:visible', 'close']);

const handleMaskClick = () => {
  emits('update:visible', false);
};

const close = () => {
  emits('close');
};

// 监听 visible prop 的变化，当 visible 为 false 时，关闭 modal
watch(
  () => props.visible,
  (val) => {
    if (!val) {
      close();
    }
  }
);
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-wrapper {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-close-btn {
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  margin-top: 10px;
  margin-bottom: 10px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>