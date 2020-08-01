<template>
   <div v-if="availableParts">
         <div style="margin: 100px;" class="PartItem"
            v-for="(part, index) in availableParts.parts" :key="index">
            <div v-if="part._id===PartId">
               <b-card>
                  <b-row>
                     <b-col>
                        <b-card
                        :img-src="getImgUrl(part.src)" img-alt="Image" img-top></b-card>
                     </b-col>
                     <b-col>
                        <b-card-body>
                           <h3>{{part.carBrand+' '+part.carModel}}</h3>
                           <hr/>
                           <b-card-text>
                              <h5>Kategoria:</h5>
                              <p>{{part.category}}</p>
                              <h5>Producent:</h5>
                              <p>{{part.manufacturer}}</p>
                              <h5>EAN:</h5>
                              <p>{{part.EAN}}</p>
                              <h5>Cena:</h5>
                              <p>{{part.price}}</p>
                              <button class="mr-sm-2">Dodaj do koszyka</button>
                           </b-card-text>
                        </b-card-body>
                     </b-col>
                  </b-row>
               </b-card>
            </div>
         </div>
   </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductCard',
  created() {
    this.$store.dispatch('getParts');
  },
  props: {
    PartId: {
      type: String,
      value: 'test',
    },
  },
  data() {
    return { selectedPartIndex: 0 };
  },
  computed: {
    availableParts() {
      return this.$store.state.carParts;
    },

  },
  methods: {
    ...mapActions('carParts', ['getParts']),
    getImgUrl(value) {
      const images = require.context('../data/images', false, /\.jpg$/);
      return images(`./${value}`);
    },
  },
};
</script>
