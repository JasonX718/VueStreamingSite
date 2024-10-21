<template>

    <el-row>
    <el-col :span="16">
      <div ref="bandwidthChart" style="width: 100%; height: 400px"></div>
    </el-col>
      <el-col :span="8">
        <el-card style="width: 100%; height:350px;">
          <el-table :data="bandwidthData" style="width: 100%; padding-right: 10px;">
          <el-table-column prop="time" label="Time"></el-table-column>
          <el-table-column prop="bandwidth" label="Bandwidth"></el-table-column>
        </el-table>
      </el-card>

      </el-col>
    </el-row>

</template>

<script setup>
import * as echarts from "echarts"
import { ref, onMounted } from "vue"
import { ElRow, ElCol, ElTable, ElTableColumn } from 'element-plus';

const bandwidthChart = ref()

const bandwidthData = [
  { time: '00:00', bandwidth: 35 },
  { time: '04:00', bandwidth: 29 },
  { time: '08:00', bandwidth: 36 },
  { time: '12:00', bandwidth: 19 },
  { time: '16:00', bandwidth: 29 },
  { time: '20:00', bandwidth: 27 },
]

//get bandwidth data from api
import axios from 'axios';

async function getBandwidthData() {
  try {
    const response = await axios.get('http://your-api-url/bandwidth');
    return response.data;
  } catch (error) {
    console.error(`Error fetching bandwidth data: ${error}`);
  }
}

getBandwidthData().then(data => {
  console.log(data);
});





onMounted(() => {
  init()
})

function init() {
  const myChart = echarts.init(bandwidthChart.value)

  const option = {
    title: {
      text: 'Bandwidth Usage'
    },
    tooltip: {},
    legend: {
      data: ['Bandwidth']
    },
    xAxis: {
      data: bandwidthData.map(item => item.time)
    },
    yAxis: {},
    series: [{
      name: 'Bandwidth',
      type: 'line',
      data: bandwidthData.map(item => item.bandwidth)
    }]
  }

  myChart.setOption(option)
}
</script>

<style scoped>
div.el-col:nth-child(2) {
 border-right-style: solid;
 border-right-width: 20px;
}
.container{
  background-color: rgb(27, 27, 27);
  height: 100%;
}
</style>