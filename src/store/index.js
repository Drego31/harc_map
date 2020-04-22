import Vue from 'vue';
import Vuex from 'vuex';
import menu from './menu';
import theme from './theme';
import event from './event';
import user from './user';
import header from './header';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    menu,
    theme,
    event,
    user,
    header,
  },
  state: {
    isLoading: true,
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  mutations: {
    setIsLoading: (state, payload) => (state.isLoading = payload),
  },
  actions: {},
});
