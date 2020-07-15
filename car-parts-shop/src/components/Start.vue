<template>
  <div class="start">
    <p class="register-title">Witamy w AutoPart 2!</p>
    <ProductContainer/>
  </div>
</template>

<script>
import ProductContainer from './ProductContainer.vue';

export default {
  name: 'Start',
  components: {
    ProductContainer,
  },
  props: {
    msg: String,
    Email: String,
    Password: String,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ff0000;
}
</style>
