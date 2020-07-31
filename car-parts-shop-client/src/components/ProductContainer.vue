<template>
  <div class="container">
      <product-card :carParts="availableParts.parts"></product-card>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductContainer',
  components: { 'product-card': ProductCard },
  created() {
    this.$store.dispatch('getParts');
  },
  data() {
    return {
    };
  },
  computed: {
    availableParts() {
      return this.$store.state.carParts;
    },

  },
  methods: {
    selectNextHead() {
      console.log('selectNextHead called');
    },
  },
};
</script>

<style scoped>
  .container {
    border: 1px solid #ccc !important;
    padding: 0.1em 16px;
    border-radius: 16px;
    margin-top: 4em;
  }
</style>
