import axios from 'axios';
import bcrypt from 'bcryptjs';

const state = {
  email: '',
  userId: null,
  first: '',
  last: '',
  isLoggedIn: false,
  loginError: '',
  isAdmin: false,
};

const getters = {
  // eslint-disable-next-line no-shadow
  isLoggedIn: (state) => state.isLoggedIn,
  // eslint-disable-next-line no-shadow
  userId: (state) => state.userId,
  // eslint-disable-next-line no-shadow
  loginError: (state) => state.loginError,
  firstName: (state) => state.first,
  isAdmin: (state) => state.isAdmin,
};

const actions = {
  logInUser({ commit }, payload) {
    axios.get(`/api/user/email/${payload.email}`)
      .then((resp) => {
        const { data } = resp;
        if (data && data.length > 0) {
          const pwdHash = data[0].password;
          if (payload.password === pwdHash) {
            const user = data[0];
            // eslint-disable-next-line no-param-reassign,no-underscore-dangle
            payload.userId = user._id;
            // eslint-disable-next-line no-param-reassign
            payload.first = user.first;
            // eslint-disable-next-line no-param-reassign
            payload.last = user.last;
            // eslint-disable-next-line no-param-reassign
            payload.email = user.email;

            payload.isAdmin = user.isAdmin;
            commit('logInUser', payload);
          } else {
            commit('loginError');
          }
        }
      })
      .catch(() => {
        commit('loginError');
      });
  },
  createNewUser({ commit }, payload) {
    axios.post('/api/user/', payload)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  loginOut({ commit }, payload) {
    commit('loginOut', payload);
  },
};

const mutations = {
  logInUser(state, payload) {
    state.isLoggedIn = true;
    state.email = payload.email;
    state.first = payload.first;
    state.last = payload.last;
    state.userId = payload.userId;
    state.isAdmin = payload.isAdmin;
  },
  loginError(state) {
    state.isLoggedIn = false;
    state.loginError = 'Email and/or Password are invalid. Login failed.';
  },
  loginOut(state, payload) {
    state.isLoggedIn = payload.isLoggedIn;
    state.email = payload.email;
    state.first = payload.first;
    state.last = payload.last;
    state.userId = payload.userId;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
