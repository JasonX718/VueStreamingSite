<template>
  <el-row class="tac flex-container">
    <el-col :span="24">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="rgb(23, 23, 23)"
        border-right-width="0">
        <el-menu-item index="1" @click="this.$router.push({ path: '/managerpage/bandwith' })">
          <span>Bandwidth</span>
        </el-menu-item>
        <el-menu-item index="2" @click="this.$router.push({ path: '/managerpage/historychart' })">
          <span>History</span>
        </el-menu-item>
        <el-menu-item index="3" @click="this.$router.push({ path: '/managerpage/trafficanalysis' })">
          <span>Traffic Analysis</span>
        </el-menu-item>

      </el-menu>
    </el-col>
  </el-row>
  
</template>

<script lang="ts" setup>

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-aside-container{
  display: flex;
}
.aside-menu{
  background-color: rgb(23, 23, 23);
  color: rgb(23, 23, 23);
  flex: 1;
}
.el-menu-item{
  background-color: rgb(23, 23, 23);
  color: #787878;
}

li.el-menu-item:nth-child(3) {
  box-shadow: 0px 5px 5px black;
}

.footer-links {
  margin-top: auto;
  padding: 5px;
}

.footer-row {
  text-align: center;
  font-size: 12px;
}

.footer-row + .footer-row {
  padding-top: 10px;
}

.footer-links .router-link-exact-active {
  color: #409EFF;
}
.flex-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

</style>