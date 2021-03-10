import { uPromise } from '@dbetka/utils';

const defaultTime = 2000;
const getDefaultState = () => ({
  isOpen: false,
  message: '',
  icon: undefined,
  error: false,
  success: false,
});

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isOpen: state => state.isOpen,
    message: state => state.message,
    icon: state => state.icon,
    error: state => state.error,
    success: state => state.success,
  },
  mutations: {
    open: (state) => (state.isOpen = true),
    close: (state) => (state.isOpen = false),
    toggle: (state) => (state.isOpen = state.isOpen === false),
    setMessage: (state, payload) => (state.message = payload),
    setIcon: (state, payload) => (state.icon = payload),
    setError: (state, payload) => (state.error = payload),
    setSuccess: (state, payload) => (state.success = payload),
    resetState: (state) => Object.assign(state, getDefaultState()),
  },
  actions: {
    open (context, { message, icon, error, success }) {
      context.commit('setMessage', message);
      context.commit('setIcon', icon);
      context.commit('setError', error);
      context.commit('setSuccess', success);
      context.commit('open');
    },
    openTemporary (context, { message, icon, time = defaultTime, error, success }) {
      return new Promise(resolve => {
        context.dispatch('open', { message, icon, error, success });
        uPromise
          .timeout(time)
          .then(() => context.commit('resetState'))
          .then(resolve);
      });
    },
  },
};
