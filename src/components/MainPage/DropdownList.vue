<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <span class="text">Your Account</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item class="signout"  @click="signOut">Sign Out</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const signOut = () => {
  router.push({ path: '/login' });
}


</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.text {
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
    color: rgb(244, 240, 240);
  }

.el-dropdown-item.signout {
  color: var(--el-color-danger);
}

</style>

