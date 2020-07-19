<template>
  <div class="productBox">
    <a
      class="Ean"
      href="Ean"
    >
      <h5 class="Producent">{{ Producent }}</h5>
      <h6 class="Seria">{{ Seria }}</h6>
      <h6 class="KodProduktu">{{ KodProduktu }}</h6>
      <h6 class="Jednostka">Cena za {{ Jednostka }}</h6>
      <img
        class="Zdjecie"
        url="Zdjecie"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProductBox',
  components: {},
  props: {
    Ean: String,
    Producent: String,
    Seria: String,
    KodProduktu: String,
    Jednostka: String,
    Zdjecie: String
  }
}
</script>
