<template>
  <div id="app">
    <navigation-bar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue'

export default {
  name: 'Layout',
  components: {
    'navigation-bar': NavigationBar
  }
}
</script>
<style lang="scss">
  @import 'assets/styles';
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
