import Vue from 'vue';
import Vuex from 'vuex';
import menu from './menu';
import event from './event';
import user from './user';
import header from './header';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    menu,
    event,
    user,
    header,
  },
});
