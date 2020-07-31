<template>
  <div class="row">
    <b-card-group deck>
      <div class="card-car-part col-sm-4" v-for="(part, index) in carParts" :key="index">
        <b-card class="b-card-car-part"
                :img-src="getImgUrl(part.src)" img-alt="Image" img-top>
          <hr/>
          <router-link
          :to="{ name: 'ProductItem',
          params: {PartId: part._id}
          }">
            <h3>{{part.subcategory+' '+part.carBrand+' '+part.carModel}}</h3>
          </router-link>
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
  methods: {
    getImgUrl(value) {
      const images = require.context('../data/images', false, /\.jpg$/);
      return images(`./${value}`);
    },
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
