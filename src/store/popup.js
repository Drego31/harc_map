import { uPromise } from '@dbetka/utils';

const defaultTime = 2000;

export default {
  namespaced: true,
  state: {
    isOpen: false,
    messages: [],
    icon: undefined,
  },
  getters: {
    isOpen: state => state.isOpen,
    listOfMessages: state => state.messages,
    fullMessage: state => state.messages.join(' \n'),
    icon: state => state.icon,
  },
  mutations: {
    open: (state) => (state.isOpen = true),
    close: (state) => (state.isOpen = false),
    toggle: (state) => (state.isOpen = state.isOpen === false),
    addMessage: (state, payload) => state.messages.push(payload),
    setMessages: (state, payload) => (state.messages = payload),
    setIcon: (state, payload) => (state.icon = payload),
  },
  actions: {
    open (context, { messages, icon }) {
      context.commit('setMessages', messages);
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
      context.commit('setMessages', []);
      context.commit('setIcon', undefined);
      context.commit('close');
    },
  },
};
