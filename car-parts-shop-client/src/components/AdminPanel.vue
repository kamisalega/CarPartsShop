<template>
  <div class="admin-panel">
    <p class="admin-panel-title">
      {{ msg }}
    </p>
    <form class="admin-panel-form ">
      <label>
        <p class="label-txt">Kod EAN</p>
        <input
          id="InputEAN"
          type="text"
          class="input"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Producent</p>
        <input
          id="InputProducent"
          type="text"
          class="input"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Seria</p>
        <input
          id="InputSeria"
          type="text"
          class="input">
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Kod produktu</p>
        <input
          id="InputKodProduktu"
          type="text"
          class="input">
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Jednostka</p>
        <input
          id="InputJednostka"
          type="text"
          class="input">
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Zdjęcie</p>
        <input
          id="InputZdjecie"
          type="file"
          class="input">
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <button
        class="mr-sm-2"
        type="submit">
        Dodaj
      </button>
      <button
        class="mr-sm-2"
        type="submit">
        Zapisz
      </button>
      <button
        class="mr-sm-2"
        type="submit">
        Usuń
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminPanel',
  data() {
    return {
      msg: 'Panel administratora',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
