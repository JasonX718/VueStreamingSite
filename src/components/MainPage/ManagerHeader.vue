<template>
    <div class="headerbar">
      <div class="left-section">
        <img class="logo" src="../../assets/Orion.jpg" alt="Logo" style="border-radius: 50%;">
      </div>
      <div class="right-section">
        <div class="account" @click="dropdownVisible = !dropdownVisible">
          <el-avatar :src="avatarUrl" class="avatar" :icon="UserFilled">user</el-avatar>
          <i :class="['el-icon-arrow-' + (dropdownVisible ? 'up' : 'down'), 'arrow-icon']"></i>
          <dropdown-list :visible.sync="dropdownVisible"></dropdown-list>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { ElAvatar, ElDropdown, ElDropdownItem, ElIcon } from 'element-plus';
  import DropdownList from '../MainPage/DropdownList.vue';
  import SignInDropDown from '../MainPage/SignInDropDown.vue';
  import Avatar from './Avatar.vue';
  
  export default defineComponent({
    name: 'HeaderBar',
    components: {
      ScopedSlot,
      ElAvatar,
      ElDropdown,
      ElDropdownItem,
      ElIcon,
      DropdownList,
      SignInDropDown,
      Avatar,
    },
    data(){
      return{
        avatarUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      };
    },
    setup() {
      const dropdownVisible = ref(false);
      return {
        dropdownVisible,
      };
    },
  });
  </script>
  
  <style scoped>
  .headerbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0c0c0c;
    height: 100%;
    padding: 0;
    color: #fff;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.75);
  }
  
  .left-section {
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 40px;
    margin-right: 20px;
  }
  
  .right-section {
    display: flex;
    align-items: center;
  }
  
  .account {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .avatar {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background-color: rgb(221, 217, 217);
  }
  
  .arrow-icon {
    font-size: 20px;
  }
  </style>
  