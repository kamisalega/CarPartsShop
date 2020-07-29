<template>
  <div class="row">
    <b-card-group deck>
      <div class="card-car-part col-sm-4" v-for="(part, index) in carParts" :key="index">
        <b-card class="b-card-car-part"
                :img-src="part.src" img-alt="Image" img-top>
          <hr/>
          <h3>{{part.carBrand+' '+part.carModel}}</h3>
          <b-card-text>
            <h5>Kategoria:</h5>
            <p>{{part.category}}</p>
            <h5>Producent:</h5>
            <p>{{part.manufacturer}}</p>
            <h5>EAN:</h5>
            <p>{{part.EAN}}</p>
            <h5>Cena:</h5>
            <p>{{part.price}}</p>
          </b-card-text>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    carParts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return { selectedPartIndex: 0 };
  },
};
</script>

<style scoped>
  .card-car-part {
    padding: 1.25em 1.25em 1.25em 1.25em;
  }

  .b-card-car-part {
    border-radius: 1.25em;
  }

  img {
    border-top-left-radius: calc(1.25rem - 1px);
    border-top-right-radius: calc(1.25rem - 1px);
  }
</style>
