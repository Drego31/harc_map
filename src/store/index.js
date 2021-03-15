import Vue from 'vue';
import Vuex from 'vuex';
import menu from './menu';
import theme from './theme';
import event from './event';
import user from './user';
import allUsers from './all-users';
import header from './header';
import popup from './popup';
import mapPopup from './map-popup';
import snackbar from './snackbar';
import guide from './guide';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    menu,
    theme,
    event,
    user,
    allUsers,
    header,
    popup,
    mapPopup,
    snackbar,
    guide,
  },
  state: {
    isLoading: true,
    routerId: 0,
  },
  getters: {
    isLoading: state => state.isLoading,
    routerId: state => state.routerId,
  },
  mutations: {
    setIsLoading: (state, payload) => (state.isLoading = payload),
    increaseRouterId: (state) => state.routerId++,
  },
  actions: {},
});
