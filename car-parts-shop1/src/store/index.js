import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import carParts from './modules/carParts'
Vue.use(Vuex)

export default  new Vuex.Store({
  modules: {
    user,
    carParts
  }
})
