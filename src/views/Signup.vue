<template>
  <div class="signup-page">
    <div class="signup-panel">
      <h1>Sign Up</h1>
      <el-form>
        <el-form-item>
          <el-input v-model="email" placeholder="Email" @blur="validateEmail"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" type="password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="confirmPassword" type="password" placeholder="Confirm Password" @blur="validatePassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitSignup">Sign Up</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      imgURL: '../assets/loginbk.png',
    }
  },
  methods: {

    validateEmail() {
      const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailPattern.test(this.email)) {
        alert('Please enter a valid email address.');
      }
    },
    validatePassword() {
      if (this.password !== this.confirmPassword) {
        this.passwordError = true;
        alert('The password does not match.');
      } else {
        this.passwordError = false;
      }
    },

    submitSignup() {
      // Add your signup logic here
      console.log('Email:', this.email)
      console.log('Username:', this.username)
      console.log('Password:', this.password)
      console.log('Confirm Password:', this.confirmPassword)


      axios.post('http://127.0.0.1/signup', {
        username: this.username,
        password: this.password,
        email: this.email,
        ismanager: 0
      })
      .then(response => {
        console.log(response.data);
        if(response.data.success) {
          this.$router.push('/');
        } else {
          // handle error
          console.log(response.data.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
}
</script>

<style scoped>
.signup-page {
  background-image: url(../assets/loginbk.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-panel {
  background-color: rgba(38, 37, 37, 0.8);
  padding: 2rem;
  border-radius: 8px;
  width: 350px;
}



.signup-panel > h1:nth-child(1) {
 padding-bottom: 20px;
}



</style>


