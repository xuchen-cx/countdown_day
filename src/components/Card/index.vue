<template>
  <div class="card-container">
    <span style="font-size: 24px;">在一起已经</span>
    <div class="card-container-time">
      <div class="card-time">{{ time.day }}</div>
      <h1>天</h1>
      <div class="card-time">{{ time.hour }}</div>
      <h1>时</h1>
      <div class="card-time">{{ time.minute }}</div>
      <h1>分</h1>
      <div class="card-time">{{ time.second }}</div>
      <h1>秒</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ITimeFormat} from './index.interface'
import { onMounted, onUnmounted, reactive } from 'vue';
import { getElapsedTime } from '../../utils';


const time: ITimeFormat = reactive({ day: 0, minute: 0, hour: 0, second: 0 });

const updateTimeFunc = () => {
  const elapsedTime = getElapsedTime(2021, 6, 28, 23, 28, 0);
  time.day = elapsedTime.day;
  time.hour = elapsedTime.hour;
  time.minute = elapsedTime.minute;
  time.second = elapsedTime.second;
}

let timer: number;

onMounted(() => {
  timer = setInterval(() => {
    updateTimeFunc()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

</script>

<style scoped>
  .card-container {
    width: 60%;
    height: 50%;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-container-time {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-time {
    width: 20%;
    height: 30%;
    border-radius: 5%;
    margin-right: 20px;
    margin-left: 20px;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>