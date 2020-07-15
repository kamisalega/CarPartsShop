import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from '../node_modules/bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import './assets/app.css';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
