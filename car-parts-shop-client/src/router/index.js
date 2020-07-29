import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Register from '../components/Register.vue';
import Basket from '../components/Basket.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/Basket',
    name: 'Basket',
    component: Basket,
  }],
});
