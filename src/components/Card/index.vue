<template>
  <div class="card-container">
    <span style="font-size: 2rem;">在一起❤已经</span>
    <div class="card-container-time">
      <div class="card-time">{{ time.year }}</div>
      <span style="font-size: 2rem;">年</span>
      <div class="card-time">{{ time.day }}</div>
      <span style="font-size: 2rem;">天</span>
      <div class="card-time">{{ time.hour }}</div>
      <span style="font-size: 2rem;">时</span>
      <div class="card-time">{{ time.minute }}</div>
      <span style="font-size: 2rem;">分</span>
      <div class="card-time">{{ time.second }}</div>
      <span style="font-size: 2rem;">秒</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ITimeFormat} from './index.interface'
import { onMounted, onUnmounted, reactive } from 'vue';
import { getElapsedTime } from '../../utils';


const time: ITimeFormat = reactive({ day: 0, minute: 0, hour: 0, second: 0, year: 0 });

const updateTimeFunc = () => {
  const elapsedTime = getElapsedTime(2021, 6, 28, 23, 28, 0);
  time.day = elapsedTime.day;
  time.hour = elapsedTime.hour;
  time.minute = elapsedTime.minute;
  time.second = elapsedTime.second;
  time.year = elapsedTime.year;
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
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(248 113 113);
    padding: 1rem;
  }

  .card-container-time {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-time {
    width: auto;
    height: 30%;
    border-radius: 5%;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(234 88 12);
  }
</style>