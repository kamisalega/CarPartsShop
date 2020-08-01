import axios from 'axios';

const state = {
  cart: [],
  parts: [],
  foo: 'robots-foo',
};
const mutations = {
  // eslint-disable-next-line no-shadow
  updateParts(state, parts) {
    state.parts = parts;
  },
};
const actions = {
  getParts({ commit }) {
    axios.get('/api/carParts')
      .then(result => commit('updateParts', result.data))
      .catch(console.error);
  },
};
const getters = {

  cartSaleItems(state) {
    return state.cart.filter(item => item.head.onSale);
  },

  foo(state) {
    return `robots-getter/${state.foo}`;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
