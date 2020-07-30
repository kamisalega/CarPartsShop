<template>
   <div>
         <div style="margin: 100px;" class="PartItem"
            v-for="(part, index) in availableParts.carParts" :key="index">
            <div v-if="part.id==PartId">
               <b-card>
                  <b-row>
                     <b-col>
                        <b-card
                        :img-src="part.src" img-alt="Image" img-top></b-card>
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
import availableParts from '../data/parts';

export default {
  name: 'ProductCard',
  props: {
    carParts: {
      type: Array,
      required: true,
    },
    PartId: {
      type: String,
      value: 'test',
    },
  },
  data() {
    return { availableParts, selectedPartIndex: 0 };
  },
};
</script>
