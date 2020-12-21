import { styleManager, THEMES } from 'utils/style-manager';
import { THEMES_COLORS } from 'utils/macros/styles-colors';

export default {
  namespaced: true,
  state: {
    name: styleManager.defaultSheet,
  },
  getters: {
    name: state => state.name,
    colors: state => THEMES_COLORS[state.name],
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
