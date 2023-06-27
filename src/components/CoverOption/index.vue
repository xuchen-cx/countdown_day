<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Dog from '../Dog/index.vue'
import Modal from '../Modal/index.vue'
import Card from '../Card/index.vue'
import { C_BIRTH_DAY, C_BIRTH_DAY_PASS, C_BIRTH_DAY_PASS_KEY } from '@/constants';
import { decrypt, encrypt } from '@/utils';

const modalVisible = ref(true);
const loginVal = ref('')
const loginMessageVisible = ref(false);

onMounted(() => {
  const passWord = localStorage.getItem(C_BIRTH_DAY);
  if (passWord) {
    const realPass = decrypt(passWord, C_BIRTH_DAY_PASS_KEY);
    if (realPass === C_BIRTH_DAY_PASS) {
      modalVisible.value = false
    }
  }
})

const handleLogin = () => {
  if (loginVal.value === C_BIRTH_DAY_PASS) {
    const encryptPass = encrypt(loginVal.value, C_BIRTH_DAY_PASS_KEY);
    localStorage.setItem(C_BIRTH_DAY, encryptPass);
    modalVisible.value = false;
    loginMessageVisible.value = false;
  } else {
    loginMessageVisible.value = true;
  }
}

</script>

<template>
  <div class="cover-container">
    <Modal :visible="modalVisible" title="请输入通关密码">
      <div class="login-container">
        <div class="login-input">
          <input placeholder="提示：我的生日，例如19720627" v-model="loginVal" style="width: 80%;"/>
        </div>
        <span class="login-message" v-if="loginMessageVisible">密码错误捏，我生日都不记得？</span>
        <button class="login-btn" @click="handleLogin">登陆</button>
      </div>
    </Modal>
    <div class="cover-dog">
      <Dog />
    </div>
    <Card class="cover-card"/>
  </div>
</template>

<style scoped lang="scss">
  .cover-container {
    width: 100vw;
    height: 100vh;
    background-color: #f9fba0;
    z-index: 99;

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
      top: 75%;
      width: auto;
      height: auto;
      position: absolute
    }

    .cover-card {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>