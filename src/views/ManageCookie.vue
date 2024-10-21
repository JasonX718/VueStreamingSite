<template>
  <div class="panel">
    <div class="cookie">
      <h1>Cookie Type 1</h1>
      <el-switch v-model="cookie1"></el-switch>
    </div>
    <!-- Add more cookies... -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookie1: true,
      // Add more cookies...
    };
  },
}
</script>

<style scoped>
.panel {
  padding: 10px;
}

.cookie {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
