import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = new Vue({
  router,
  ...AppLayout
})

export { app, router }
