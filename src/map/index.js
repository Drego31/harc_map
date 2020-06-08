import { createMap } from 'src/map/create';
import { points } from 'map/points';

export const map = {
  realMap: null,
  create: config => createMap(config),
  points,
};
