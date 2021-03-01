import Vue from 'vue';
import Vuex from 'vuex';
import menu from './menu';
import theme from './theme';
import event from './event';
import user from './user';
import header from './header';
import popup from './popup';
import mapPopup from './map-popup';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    menu,
    theme,
    event,
    user,
    header,
    popup,
    mapPopup,
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
