<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="rgb(23, 23, 23)"
        border-right-width="0">
        <el-menu-item index="1" @click="this.$router.push({ name: 'Home' })">
          <el-icon><icon-menu /></el-icon>
          <span>
            Browse
          </span>
        </el-menu-item>
        <el-menu-item index="2" @click="this.$router.push({ name: 'movies' })">
          <el-icon><Film /></el-icon>
          <span>Movies</span>
        </el-menu-item>
        <el-menu-item index="3" @click="this.$router.push({name:'tv'})">
          <el-icon><Platform /></el-icon>
          <span>
            <h1>
              TV Shows
            </h1>
          </span>
        </el-menu-item>
        <el-menu-item index="4" @click="this.$router.push({name:'latest'})">
          <el-icon><Clock /></el-icon>
          <span>
            <h1>
              Latest
            </h1>
          </span>
        </el-menu-item>
        <el-menu-item index="5" @click="this.$router.push({name:'catagory'})">
          <el-icon><IconMenu /></el-icon>
          <span><h1>Catagory</h1></span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'
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

li.el-menu-item:nth-child(5) {
  box-shadow: 0px 5px 5px black;
}

</style>
