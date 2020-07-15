<template>
  <div class="basketItem" style="Background:url(Zdjecie);">
    <div class="basketItem-l">
      <a class="Ean" href="Ean">
        <h5 class="Producent">{{ Producent }}</h5>
        <h6 class="Seria">{{ Seria }}</h6>
        <h6 class="KodProduktu">{{ KodProduktu }}</h6>
        <h6 class="Jednostka">Cena za {{ Jednostka }}</h6>
        <img class="Zdjecie" url="Zdjecie" />
      </a>
    </div>
    <div class="basketItem-r" v-on:click="usun">
      <div class="basketItem-r-text">Usuń</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasketItem',
  components: {
  },
  props: {
    Ean: String,
    Producent: String,
    Seria: String,
    KodProduktu: String,
    Jednostka: String,
    Zdjecie: String,
  },
  methods: {
    usun: function usun() {
    },
  },
};
</script>
