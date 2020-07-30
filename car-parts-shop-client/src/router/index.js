import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Register from '../components/Register.vue';
import Basket from '../components/Basket.vue';
import Login from '../components/Login.vue';
import AdminPanel from '../components/AdminPanel.vue';
import ProductItem from '../components/ProductItem.vue';

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
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/AdminPanel',
    name: 'AdminPanel',
    component: AdminPanel,
  },
  {
    path: '/ProductItem/:PartId',
    name: 'ProductItem',
    component: ProductItem,
    props: true,
  }],
});
