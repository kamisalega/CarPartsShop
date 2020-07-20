<template>
  <div class="register">
    <p class="register-title">
      {{ msg }}
    </p>
    <form class="register-form ">
      <label>
        <p class="label-txt">Adres email</p>
        <input
          id="InputEmailLogin"
          type="email"
          class="input"
          aria-describedby="emailHelp"
        >
        <div class="line-box">
          <div class="line"/>
        </div>
      </label>
      <label>
        <p class="label-txt">Hasło</p>
        <input
          id="InputPasswordLogin"
          type="password"
          class="input"
        >
        <div class="line-box">
          <div class="line"/>
        </div>
      </label>
      <button
        class="mr-sm-2"
        type="submit"
      >
        Zaloguj
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
    name: 'Login',
    data() {
      return {
        showAlert: false,
        message: '',
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required'
        ]
      }
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn
      }
    },
    methods: {
      login: function () {
        const vm = this
        const payload = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('logInUser', payload)
          .then(() => {
            if(vm.isLoggedIn){
              this.$router.push({path: '/'})
            }
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
