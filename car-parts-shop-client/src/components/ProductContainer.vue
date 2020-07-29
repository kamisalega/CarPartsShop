<template>
  <div class="container">
      <product-card :carParts="availableParts.carParts"></product-card>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import availableParts from '../data/parts';

export default {
  name: 'ProductContainer',
  components: { 'product-card': ProductCard },
  data() {
    return {
      availableParts,
    };
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
  }
</style>
