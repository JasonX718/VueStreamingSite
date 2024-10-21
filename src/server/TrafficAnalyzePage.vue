<template>
  <div class="traffic-analysis" style="background-color: rgb(27, 27, 27);height: 100%;">
    <div ref="trafficChart" style="width: 100%; height: 400px;background-color: rgb(27, 27, 27);"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { fetchPageViews } from 'src/server/API/manager/trafficanalysis.js';  

const trafficChart = ref();

let interval;

onMounted(async () => {
  await init();
  interval = setInterval(update, 1000000); //每1000秒更新一次
});

onUnmounted(() => {
  clearInterval(interval);
});

async function fetchPageViews() {
  const res = await fetch('http://localhost:80/pageviews.json'); 
  const data = await res.json();
  return Object.entries(data).map(([page, visits]) => ({ page, visits }));
}

async function init() {
  const myChart = echarts.init(trafficChart.value);
  const trafficData = await fetchPageViews();

  const option = {
    title: {
      text: 'Website Traffic Analysis',
    },
    tooltip: {},
    legend: {
      data: ['Page Visits'],
    },
    xAxis: {
      data: trafficData.map(item => item.page),
    },
    yAxis: {},
    series: [
      {
        name: 'Page Visits',
        type: 'bar',
        data: trafficData.map(item => item.visits),
      },
    ],
  };

  myChart.setOption(option);
}

async function update() {
  const myChart = echarts.getInstanceByDom(trafficChart.value);
  const trafficData = await fetchPageViews();
  
  const option = {
    xAxis: {
      data: trafficData.map(item => item.page),
    },
    series: [
      {
        data: trafficData.map(item => item.visits),
      },
    ],
  };

  myChart.setOption(option);
}
</script>

<style scoped>
.traffic-analysis {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>