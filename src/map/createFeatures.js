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

const getStroke = (shape, width = 2) => {
  return new Stroke({
    color: MAP_POINTS[shape].strokeColor,
    width,
  });
};
const getFill = (shape) => {
  return new Fill({ color: MAP_POINTS[shape].fillColor });
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

    const stroke = getStroke(shape);
    const fill = getFill(shape);

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
  map.realMap.addLayer(layer);
  map.points.layer = layer;
}
