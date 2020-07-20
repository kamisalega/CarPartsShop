import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import store from './store'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = new Vue({
  router,
  store,
  ...AppLayout
})

export { app, router }
