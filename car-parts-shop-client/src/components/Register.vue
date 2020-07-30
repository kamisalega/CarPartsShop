<template>
  <div class="register">
    <p class="register-title">
      {{ msg }}</p>
    <form class="register-form ">
      <label>
        <p class="label-txt">Adres email</p>
        <input
          id="InputEmail"
          type="email"
          class="input"
          aria-describedby="emailHelp"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Nazwa użytkownika</p>
        <input
          id="InputUsername"
          type="text"
          class="input"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Hasło</p>
        <input
          id="InputPassword"
          type="password"
          class="input"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Powtórz Hasło</p>
        <input
          id="InputPasswordAgain"
          type="password"
          class="input"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <button
        class="mr-sm-2"
        type="submit"
      >
        Zarejestruj
      </button>
      <button
        class="mr-sm-2"
        type="reset"
      >
        Resetuj
      </button>
      <router-link to="/">
        <button
          class="mr-sm-2"
          type="button"
        >
          Wróć
        </button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      msg: 'Rejestracja użytkownika',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
