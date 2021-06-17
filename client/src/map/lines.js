import { createLinesFeature } from 'map/createLinesFeature';
import { uCheck } from '@dbetka/utils';
import { map } from 'map/index';

export const lines = {
  layer: null,
  create: config => createLinesFeature(config),
  destroyAll () {
    if (uCheck.isObject(map.realMap) && uCheck.isObject(lines.layer)) {
      map.realMap.removeLayer(lines.layer.get('name'));
    }
  },
};
