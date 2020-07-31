<template>
    <div class="pos-f-t">
      <nav class="navbar-header navbar navbar-dark bg-dark">
        <div>
          <router-link to="/" class="nav-link-header float-left navbar-brand">
            Home
          </router-link>
          <router-link to="/" v-if="isLoggedIn" class="nav-link-header float-left nav-link">
            Witaj {{firstName}}
          </router-link>
          <router-link to="/Login" v-if="!isLoggedIn" class="nav-link-header float-left nav-link">
            Zaloguj
          </router-link>
        </div>

        <router-link v-if="!isAdmin"
          to="/AdminPanel"
          class="nav-link-header float-left nav-link" hidden>
          AdminPanel
        </router-link>
        <router-link v-if="isAdmin"
                     to="/AdminPanel"
                     class="nav-link-header float-left nav-link" >
          AdminPanel
        </router-link>
        <form class="form-inline">
          <router-link to="/Basket">
            <button
              class="btn btn-outline-success mr-sm-2"
              type=""
            >
              <svg
                class="bi bi-basket"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514
                  l-3-5a.5.5 0 0 1
                  .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3
                  5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 7v1h14V7H1zM.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0
                   .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14 9H2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM2 8a1 1 0 0 0
                  -1 1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4 10a.5.5 0 0 1 .5.5v3a.5.5
                  0 1 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1
                   .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 6
                   10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1
                   0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0
                   1 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1
                   .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </button>
          </router-link>
          <button v-on:click="logout" class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Wyloguj
          </button>
        </form>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    loginError() {
      return this.$store.getters.loginError;
    },
    firstName() {
      return this.$store.getters.firstName;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
  data() {
    return {
      msga: 'sprawdzenie',
    };
  },
  methods: {
    logout() {
      const payload = {
        isLoggedIn: false,
        email: '',
        last: '',
        userId: '',
      };
      this.$store.dispatch('loginOut', payload)
        .then(() => {
          if (!this.isLoggedIn) {
            this.$router.push({ path: '/' });
          }
        });
    },
  },
};

</script>
