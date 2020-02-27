import { createFeatures } from 'map/createFeatures';

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
  removeByOlUid (olUid) {
    const feature = getFeatureByOlUid(olUid);
    points.layer.getSource().removeFeature(feature);
  },
  add (feature) {
    points.layer.getSource().addFeature(feature);
  },
};
