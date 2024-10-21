<template>
  <div class="manager-layout">
    <el-container>
      <el-aside class="el-aside-container" style="height: 650px;">
        <aside-manager class="aside-manager"></aside-manager>
      </el-aside>
      <el-container>
        <el-header>
          <header-manager class="header-manager"></header-manager>
        </el-header>
        <el-main style="background-color: #333;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

      <footer>
        <div class="footer-row">
          <div class="footer-links">
            <router-link to="/managerpage/bandwith">Bandwith</router-link> |
            <router-link to="/managerpage/traffic">Traffic</router-link> |
            <router-link to="/managerpage/trafficanalyze">Traffic Analyze</router-link> |
            <router-link to="/managerpage/trafficanalyze">Traffic Analyze</router-link> |
            <router-link to="/managerpage/trafficanalyze">Traffic Analyze</router-link> |
            <router-link to="/managerpage/trafficanalyze">Traffic Analyze</router-link> |
            <router-link to="/managerpage/trafficanalyze">Traffic Analyze</router-link> |
            <router-link to="/managerpage/trafficanalyze">Traffic Analyze</router-link> |
            <router-link to="/managerpage/trafficanalyze">Traffic Analyze</router-link> |
            <router-link to="/managerpage/trafficanalyze">Traffic Analyze</router-link>
          </div>
        </div>
      </footer>

  </div>
</template>

<script>
import AsideManager from "/src/components/MainPage/AsideManager.vue";
import HeaderManager from "/src/components/MainPage/HeaderManager.vue";


export default {
  components: {
    AsideManager,
    HeaderManager,
  },
  created() {
    if (this.$router.currentRoute.value.path === '/managerpage') {
      this.$router.replace('/managerpage/bandwith');
    }
  },
};

</script>

<style scoped>
.el-aside-container {
  width: 250px;
  display: flex;
  box-shadow: 0px 5px 5px black;
  height: 100%;
}
.aside-manager {
  background-color: rgb(23, 23, 23);
  color: rgb(23, 23, 23);
  flex: 1;
}
.el-main {
 padding-bottom: 0px;
 transform: scale(1);
}

</style>