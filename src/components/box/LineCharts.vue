<template>
  <div class="line-charts">
    <line-chart class="chart" :data="bandwidthData"></line-chart>
    <line-chart class="chart" :data="accessCapacityData"></line-chart>
  </div>
</template>

<script>
import { LineChart } from "vue-chart-3";
import lineChartsData from "../../assets/jsondata/lineChartsData.json";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      bandwidthData: lineChartsData.bandwidthData,
      accessCapacityData: lineChartsData.accessCapacityData,
    };
  },
};
</script>

<style scoped>
.line-charts {
  display: flex;
  justify-content: space-around;
}

.chart {
  width: 45%;
}
</style>



