<template>
  <div class="login-page">
    <div class="login-panel">
      <h1>Login</h1>
      <el-form>
        <el-form-item>
          <el-input v-model="username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" type="password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitLogin">Login</el-button>
        </el-form-item>
      </el-form>
      <p class="signup-text">New to Orion? <a href="/register">Sign Up now</a></p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';


export default {
  data() {
    return {
      username: '',
      password: '',
      imgURL: '../assets/loginbk.png',
    }
  },
  methods: {
    // submitLogin() {
    //   console.log('Username:', this.username)
    //   console.log('Password:', this.password)
    // },
    async submitLogin() {
    try {
      let response = await axios.post('http://127.0.0.1/login', {
        username: this.username,
        password: this.password
      });

      let data = response.data;

      if(data.success) {
        if (data.ismanager === 1) {
          this.$router.push('/managerpage');
        } else {
          this.$router.push('/');
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  },
  },
}
</script>

<style scoped>
.login-page {
  background-image: url(../assets/loginbk.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-panel {
  background-color: rgba(50, 49, 49, 0.8);
  padding: 2rem;
  border-radius: 8px;
  width: 350px;
  opacity: 1;
}

.signup-text {
  text-align: center;
  margin-top: 1rem;
}

.login-panel > h1:nth-child(1) {
 padding-bottom: 20px;
}


</style>


