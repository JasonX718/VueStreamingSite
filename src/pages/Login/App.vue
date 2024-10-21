<template>
  <div id="app">
    <login/>
  </div>
</template>

<script>
import Login from '../../views/Login.vue'
import Signup from '../../views/Signup.vue'
import Intropage from '../../views/IntroPage.vue'

export default {
  components: {
    Login,
    Signup,
    Intropage,
  },
}
</script>
