<template>
  <div id="app" class="app">
    <div class="container">
      <main class="main">
        <intropage/>
      </main>
    </div>
  </div>
</template>

<script>
import Intropage from '../../views/IntroPage.vue'
import HeaderBar from '../../components/MainPage/HeaderBar.vue'

export default {
    components: {
        Intropage,
        HeaderBar,
    },
  name: 'App',
};
</script>

<style>
html, body {
  margin: 0;
  height: 80%;
}

.app {
  background-image: url(src/assets/loginbk.png);
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80%;

}

.container {
  background-color: #323232;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0.95;
  transform: scale(0.8);
}

.header {
  margin-bottom: 1rem;
}

.main {
  text-align: justify;
  flex-grow: 1;
}

.footer {
  text-align: center;
}
</style>
  