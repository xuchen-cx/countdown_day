<script setup lang="ts">
import {ITimeFormat} from './index.interface'
import { onMounted, onUnmounted, reactive } from 'vue';
import { getElapsedTime } from '../../utils';


const time = reactive<ITimeFormat>({ day: 0, minute: 0, hour: 0, second: 0 });

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

<template>
  <div class="card-container">
    <span style="font-size: 24px;">在一起已经</span>
    <div class="card-container-time">
      <div class="card-time">{{ time.day }}</div>
      <h2>天</h2>
      <div class="card-time">{{ time.hour }}</div>
      <h2>时</h2>
      <div class="card-time">{{ time.minute }}</div>
      <h2>分</h2>
      <div class="card-time">{{ time.second }}</div>
      <h2>秒</h2>
    </div>
  </div>
</template>

<style scoped>
  .card-container {
    width: 800px;
    height: 500px;
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
    width: 100px;
    height: 150px;
    border-radius: 5%;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>