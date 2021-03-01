const defaultTime = 2000;

export default {
  namespaced: true,
  state: {
    isOpen: true,
    message: 'Skopiowano do schowka!',
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
    open (context, { messages, icon }) {
      context.commit('setMessage', messages);
      context.commit('setIcon', icon);
      context.commit('open');
    },
    openTemporary (context, { messages, icon, time = defaultTime }) {
      return new Promise(resolve => {
        context.dispatch('open', {
          messages,
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
