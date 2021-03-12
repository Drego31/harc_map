import { store } from 'store/index';

const availableColors = {
  stroke: 'stroke',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
};

function getColor (color) {
  return store.getters['theme/colors'][color];
}

export const MAP_POINTS = {
  0: () => ({
    strokeColor: getColor(availableColors.stroke),
    fillColor: getColor(availableColors.info),
  }),
  1: () => ({
    strokeColor: getColor(availableColors.stroke),
    fillColor: getColor(availableColors.info),
  }),
  2: () => ({
    strokeColor: getColor(availableColors.stroke),
    fillColor: getColor(availableColors.warning),
  }),
  3: () => ({
    strokeColor: getColor(availableColors.stroke),
    fillColor: getColor(availableColors.danger),
  }),
};
