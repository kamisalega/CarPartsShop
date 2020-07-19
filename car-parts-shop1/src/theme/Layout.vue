<template>
  <div id="app">
    <NavigationBar />
    <!--    <router-view />-->
  </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue'
import './assets/app.css'

export default {
  name: 'Layout',
  components: {
    NavigationBar
  }
}
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
