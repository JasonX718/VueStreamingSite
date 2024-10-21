<template>
  <div class="traffic-analysis" style="background-color: rgb(27, 27, 27);height: 100%;">
    <div ref="trafficChart" style="width: 100%; height: 400px;background-color: rgb(27, 27, 27);"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts"
import { ref, onMounted } from "vue"

const trafficChart = ref()

const trafficData = [
  { page: 'Home', visits: 30 },
  { page: 'Tvs', visits: 10 },
  { page: 'Movies', visits: 50 },
  { page: 'Latest', visits: 20 },
  { page: 'Catagory', visits: 10 },
  // add more pages as necessary
]

onMounted(() => {
  init()
})

function init() {
  const myChart = echarts.init(trafficChart.value)

  const option = {
    title: {
      text: 'Website Traffic Analysis'
    },
    tooltip: {},
    legend: {
      data: ['Page Visits']
    },
    xAxis: {
      data: trafficData.map(item => item.page)
    },
    yAxis: {},
    series: [{
      name: 'Page Visits',
      type: 'bar',
      data: trafficData.map(item => item.visits)
    }]
  }

  myChart.setOption(option)
}
</script>

<style scoped>
.traffic-analysis {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>