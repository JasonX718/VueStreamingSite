<template>
	<div ref="main" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import * as echarts from "echarts"
import { ref, onMounted } from "vue"
    
// 使用ref创建虚拟DOM引用，使用时用main.value
const main = ref()
onMounted(
  () => {
    init()
  }
)
    function init() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(main.value)
      // 指定图表的配置项和数据
      const option = {
        title: {
          text: 'ECharts 示例'
        },
        tooltip: {},
        legend: {
          data: ['NUM']
        },
        xAxis: {
          data: ['1', '2', '3', '4', '5', '6']
        },
        yAxis: {},
        series: [{
          name: 'NUM',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      myChart.setOption(option);
    }
  myChart.setOption(option);
}
</script>
