import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import carPart from './modules/carPart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    users: user,
    carParts: carPart,
  },
  getters: {
  },
});
