<template>
  <div class="register">
    <p class="register-title">
      {{ msg }}</p>
    <form class="register-form ">
      <label>
        <p class="label-txt">Adres email</p>
        <input id="InputEmail" type="email" v-model="user.email"
          class="input"
          aria-describedby="emailHelp"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Imię</p>
        <input
          id="InputFirstName"
          v-bind:type="text"
          class="input"
          v-model="user.first"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Nazwisko</p>
        <input
          id="InputLastName"
          v-bind:type="text"
          class="input"
          v-model="user.last"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <label>
        <p class="label-txt">Hasło</p>
        <input
          id="InputPassword"
          v-bind:type="'password'"
          v-model="user.password"
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
          v-bind:type="'password'"
          v-model="passwordTwo"
          class="input"
        >
        <div class="line-box">
          <div class="line" />
        </div>
      </label>
      <button
        class="mr-sm-2"
        type="submit"
        v-on:click="register"
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
      user: {
        first: '',
        last: '',
        email: '',
        password: '',
        isActive: true,
      },
      passwordTwo: '',
    };
  },
  methods: {
    register() {
      if (this.user.password === this.passwordTwo) {
        this.$store.dispatch('createNewUser', this.user).then(() => {
          this.$router.push({ path: '/' });
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
