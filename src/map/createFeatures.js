import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import * as Projection from 'ol/proj';
import { map } from 'src/map';
import { Fill, RegularShape, Stroke, Style } from 'ol/style';
import { MAP_POINTS } from 'utils/macros/map-point-types';
import { store } from 'store';
import { uCheck } from '@dbetka/utils';
import { mapConfig } from 'map/config';
import { colorsUtils } from 'utils/colors';

export function createFeatures ({ list = [] }) {
  const mapIsNotDefined = uCheck.isNotObject(map.realMap);
  const listOfFeatures = [];

  if (mapIsNotDefined) {
    console.error(new Error('Map is undefined'));
    return false;
  }

  map.points.destroyAll();

  for (const point of list) {
    const lat = point.pointLatitude;
    const lon = point.pointLongitude;
    const shape = point.pointCategory;
    const collectedPointsIds = store.getters['user/collectedPointsIds'];
    const collectedByLoginUser = collectedPointsIds.includes(point.pointId);
    const isCollected = point.pointCollectionTime != null && collectedByLoginUser;

    const stroke = getStroke(shape, isCollected);
    const fill = getFill(shape, isCollected);

    const position = Projection.fromLonLat([lon, lat]);

    const feature = new Feature({
      geometry: new Point(position),
    });
    feature.setStyle(getFinalPoints(shape, fill, stroke));

    point.olUid = feature.ol_uid;
    listOfFeatures.push(feature);
  }
  store.commit('event/updateListOfPoints', list);

  const layer = new VectorLayer({
    source: new VectorSource({
      features: listOfFeatures,
    }),
  });
  layer.setZIndex(mapConfig.features.zIndex);
  map.realMap.addLayer(layer);
  map.points.layer = layer;
}

const getStroke = (shape, isCollected, width = mapConfig.features.defaultWidth) => {
  let appearance = MAP_POINTS[shape]() || {};
  if (isCollected) {
    const opacity = 0.5;
    appearance = { ...appearance };
    appearance.strokeColor = colorsUtils.hexOrRGBToRGB(appearance.strokeColor, opacity);
  }
  return new Stroke({
    color: appearance.strokeColor,
    width,
  });
};

const getFill = (shape, isCollected) => {
  let appearance = MAP_POINTS[shape]() || {};
  if (isCollected) {
    const opacity = 0.5;
    appearance = { ...appearance };
    appearance.fillColor = colorsUtils.hexOrRGBToRGB(appearance.fillColor, opacity);
  }
  return new Fill({ color: appearance.fillColor });
};

const getFinalPoints = (shape, fill, stroke) => {
  const starShape = 4;
  const pointValues = {
    fill,
    stroke,
    points: 20,
    radius: 7,
    angle: 20,
  };
  if (shape === starShape) {
    Object.assign(pointValues, {
      points: 5,
      radius: 10,
      radius2: 4,
      angle: 0,
    });
  }
  return new Style({
    image: new RegularShape(pointValues),
  });
};
