import { styleManager, THEMES } from 'utils/style-manager';

export default {
  namespaced: true,
  state: {
    name: styleManager.defaultSheet,
  },
  getters: {
    name: state => state.name,
  },
  mutations: {
    toggle: state => {
      if (state.name === THEMES.light) {
        state.name = THEMES.dark;
        styleManager.switchTo.dark();
      } else {
        state.name = THEMES.light;
        styleManager.switchTo.light();
      }
    },
  },
  actions: {},
};
