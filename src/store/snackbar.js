import { uPromise } from '@dbetka/utils';

const defaultTime = 2000;

export default {
  namespaced: true,
  state: {
    isOpen: false,
    message: '',
    icon: undefined,
  },
  getters: {
    isOpen: state => state.isOpen,
    message: state => state.message,
    icon: state => state.icon,
  },
  mutations: {
    open: (state) => (state.isOpen = true),
    close: (state) => (state.isOpen = false),
    toggle: (state) => (state.isOpen = state.isOpen === false),
    setMessage: (state, payload) => (state.message = payload),
    setIcon: (state, payload) => (state.icon = payload),
  },
  actions: {
    open (context, {
      message,
      icon,
    }) {
      context.commit('setMessage', message);
      context.commit('setIcon', icon);
      context.commit('open');
    },
    openTemporary (context, {
      message,
      icon,
      time = defaultTime,
    }) {
      return new Promise(resolve => {
        context.dispatch('open', {
          message,
          icon,
        });
        uPromise
          .timeout(time)
          .then(() => context.commit('close'))
          .then(resolve);
      });
    },
    reset (context) {
      context.commit('setMessage', []);
      context.commit('setIcon', undefined);
      context.commit('close');
    },
  },
};
