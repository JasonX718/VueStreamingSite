<template>
  <div class="login-table">
    <el-table :data="tableData" height="350" border style="width: 100%; margin-bottom: 20px" overflow-y>
      <el-table-column prop="date" label="Date" align="center"></el-table-column>
      <el-table-column prop="name" label="Name" align="center"></el-table-column>
      <el-table-column prop="loginTime" label="Login Time" align="center"></el-table-column>
    </el-table>
    <el-divider></el-divider>
  </div>
</template>

<script>
import loginTableData from "../../assets/jsondata/loginTableData.json";

export default {
  name: "LoginTable",
  data() {
    return {
      tableData: loginTableData,
    };
  },
};
</script>

<style scoped>
.login-table {
  padding: 20px;
}
.el-table__header {
 width: 100%;
}

.el-table-column--center .cell {
  text-align: center;
  vertical-align: middle;
}
</style>

