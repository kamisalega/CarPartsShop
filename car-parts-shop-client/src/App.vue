<template>
  <div id="app">
      <NavigationBar/>
      <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import './assets/styles.css';

export default {
  name: 'App',
  components: {
    NavigationBar,
  },
};
</script>
<style>
  body {
    background: linear-gradient(to bottom, #555, #999);
    background-attachment: fixed;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  main {
    margin: 0 auto;
    padding: 30px;
    width: 1024px;
    min-height: 300px;
  }

</style>
