<template>
  <div class="navigationBar">

<div class="pos-f-t">
  <nav class="navbar-header navbar navbar-dark bg-dark">
    <div>
      <router-link to="/" class="nav-link-header float-left navbar-brand">Start</router-link>
      <router-link to="/Register" class="nav-link-header float-left nav-link">Register</router-link>

    </div>
    <form class="form-inline">
      <button class="btn btn-outline-success mr-sm-2" type="">Zarejestruj</button>
      <input class="form-control mr-sm-2" type="text" placeholder="E-mail">
      <input class="form-control mr-sm-2" type="text" placeholder="Hasło">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Zaloguj</button>
    </form>
    <form class="form-inline">
      <router-link to="/Basket"><button class="btn btn-outline-success mr-sm-2" type="">
        <svg class="bi bi-basket" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z"/>
          <path fill-rule="evenodd" d="M1 7v1h14V7H1zM.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H.5z"/>
          <path fill-rule="evenodd" d="M14 9H2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM2 8a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H2z"/>
          <path fill-rule="evenodd" d="M4 10a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </button>
      </router-link>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Wyloguj</button>
    </form>

  </nav>
</div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      msga: 'tests',
    };
  },
};
</script>
