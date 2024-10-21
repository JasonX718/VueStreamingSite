<template>
  <el-row>
    <el-col :span="16">
      <div ref="visitChart" style="width: 100%; height: 400px"></div>
    </el-col>
    <el-col :span="8">
      <el-card style="width: 100%; height:350px;">
        <el-table :data="loginData" style="width: 100%; height:350px;">
          <el-table-column prop="user" label="User"></el-table-column>
          <el-table-column prop="loginTime" label="Login Time"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import * as echarts from "echarts"
import { ref, onMounted } from "vue"
import { ElRow, ElCol, ElTable, ElTableColumn } from 'element-plus';

const visitChart = ref()

const visitData = [
  { time: '00:00', visits: 5 },
  { time: '04:00', visits: 20 },
  { time: '08:00', visits: 36 },
  { time: '12:00', visits: 10 },
  { time: '16:00', visits: 10 },
  { time: '20:00', visits: 20 },
]

const loginData = [
  { user: 'user2', loginTime: '00:00' },
  { user: 'XIAO', loginTime: '00:00' },
  { user: 'XIAO', loginTime: '00:00' },
  { user: 'user2', loginTime: '04:00' },
  { user: 'user2', loginTime: '04:00' },
  { user: 'user2', loginTime: '04:00' },
  { user: 'user2', loginTime: '08:00' },
  { user: 'XIAO', loginTime: '12:00' },
  { user: 'user2', loginTime: '16:00' },
  { user: 'user2', loginTime: '20:00' },
  { user: 'XIAO', loginTime: '20:00' },
  { user: 'XIAO', loginTime: '20:00' },
  { user: 'user2', loginTime: '20:00' },
  { user: 'XIAO', loginTime: '20:00' },
  { user: 'user2', loginTime: '20:00' },
  { user: 'XIAO', loginTime: '20:00' },
  { user: 'user2', loginTime: '20:00' },
]

onMounted(() => {
  init()
})

function init() {
  const myChart = echarts.init(visitChart.value)

  const option = {
    title: {
      text: 'Website Visit History'
    },
    tooltip: {},
    legend: {
      data: ['Visits']
    },
    xAxis: {
      data: visitData.map(item => item.time)
    },
    yAxis: {},
    series: [{
      name: 'Visits',
      type: 'line',
      data: visitData.map(item => item.visits)
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

</style>