import { createMap } from 'src/map/create';
import { createFeatures } from 'src/map/createFeatures';
import store from 'store';

export const map = {
  realMap: null,
  create: config => createMap(config),
  points: {
    layer: null,
    create: config => createFeatures(config),
    getFeatures () {
      return map.points.layer.getSource().getFeatures();
    },
    removeById (pointId) {
      const point = store.getters['event/getPointById'](pointId);
      const features = map.points.getFeatures();
      const feature = features.find(item => item.ol_uid === point.ol_uid);
      map.points.layer.getSource().removeFeature(feature);
    },
  },
};

window.map = map;
