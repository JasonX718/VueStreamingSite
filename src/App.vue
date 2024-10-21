<template>
  <div class="common-layout">
    <el-container v-if="$route.meta.keepalive">
      <el-aside class="el-aside-container" style="height: auto;">
        <keep-alive>
          <aside-menu class="aside-menu"></aside-menu>
        </keep-alive>
      </el-aside>
      <el-container>
        <el-header style="box-shadow: 0px 5px 5px black;z-index: 100;">
          <keep-alive>
            <el-col>
              <div>
                <header-bar></header-bar>
              </div>
            </el-col>
          </keep-alive>
        </el-header>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
    <router-view v-if="!$route.meta.keepalive"></router-view>
  </div>
</template>

<script>
import AsideMenu from "./components/MainPage/AsideMenu.vue";
import HeaderBar from "./components/MainPage/HeaderBar.vue";

export default {
    components: {
      AsideMenu,
      HeaderBar,

    },
    methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
}

</script>

<style scoped>
.el-main {
  position: relative;
  overflow-y: auto;
  max-height: 700px;
}
.el-aside-container {
  width: 250px;
  display: flex;
  box-shadow: 0px 5px 5px black;
  height: 100%;
}
.aside-menu {
  background-color: rgb(23, 23, 23);
  color: rgb(23, 23, 23);
  flex: 1;
}
.header-bar {
  box-shadow: 0px 20px 20px black;
}

</style>