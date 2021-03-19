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
    categoryColorById: (state, getters, rootState, rootGetters) => categoryId => {
      const pointShape = rootGetters['event/getCategoryById'](categoryId).pointShape;
      switch (pointShape) {
        case 0:
          return '#ffffff';
        case 1:
          return getters.colors.info;
        case 2:
          return getters.colors.warning;
        case 3:
          return getters.colors.danger;
        default:
          return '';
      }
    },
    categoryStyleById: (state, getters, rootState, rootGetters) => categoryId => {
      const pointShape = rootGetters['event/getCategoryById'](categoryId).pointShape;
      switch (pointShape) {
        case 0:
          return 'f-text-subtext';
        case 1:
          return 'f-text-info';
        case 2:
          return 'f-text-warning';
        case 3:
          return 'f-text-danger';
        default:
          return '';
      }
    },
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
