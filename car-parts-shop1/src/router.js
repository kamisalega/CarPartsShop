﻿import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from './theme/Start.vue'
import Register from './theme/Register.vue'
import Basket from './theme/Basket.vue'
import Login from './theme/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }]
})

export default router