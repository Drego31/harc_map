import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import * as Projection from 'ol/proj';
import { map } from 'src/map';
import { Fill, RegularShape, Stroke, Style } from 'ol/style';
import { MAP_POINTS } from 'utils/macros/map-point-types';
import { store } from 'store';

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
  const listOfFeatures = [];

  console.log({ list });

  for (const point of list) {
    const lat = point.latitude;
    const lon = point.longitude;
    const shape = point.pointShape;

    const stroke = getStroke(shape);
    const fill = getFill(shape);

    const position = Projection.fromLonLat([lon, lat]);

    const feature = new Feature({
      geometry: new Point(position),
    });
    feature.setStyle(getFinalPoints(shape, fill, stroke));

    point.olUid = feature.ol_uid;
    store.commit('event/updatePoint', point);
    listOfFeatures.push(feature);
  }

  const layer = new VectorLayer({
    source: new VectorSource({
      features: listOfFeatures,
    }),
  });
  map.realMap.addLayer(layer);
  map.points.layer = layer;
}
