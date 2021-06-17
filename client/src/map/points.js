import { createFeatures } from 'map/createFeatures';
import { uCheck } from '@dbetka/utils';
import { map } from 'map';

function getFeatures () {
  return points.layer.getSource().getFeatures();
}

function getFeatureByOlUid (olUid) {
  const features = getFeatures();
  return features.find(item => item.ol_uid === olUid);
}

export const points = {
  layer: null,
  getFeatures,
  getFeatureByOlUid,
  create: config => createFeatures(config),
  destroyAll () {
    if (uCheck.isObject(map.realMap) && uCheck.isObject(points.layer)) {
      map.realMap.removeLayer(points.layer);
    }
  },
  removeByOlUid (olUid) {
    const feature = getFeatureByOlUid(olUid);
    points.layer.getSource().removeFeature(feature);
  },
  add (feature) {
    points.layer.getSource().addFeature(feature);
  },
};
