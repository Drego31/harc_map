import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import * as Projection from 'ol/proj';
import { map } from 'src/map';
import { Fill, RegularShape, Stroke, Style } from 'ol/style';
import { MAP_POINTS } from 'utils/macros/map-point-types';
import { store } from 'store';

const getStroke = (type, width = 2) => {
  return new Stroke({
    color: MAP_POINTS[type].strokeColor,
    width,
  });
};
const getFill = (type) => {
  return new Fill({ color: MAP_POINTS[type].fillColor });
};

const getFinalPoints = (type, fill, stroke) => {
  const starShape = 4;
  const pointValues = {
    fill,
    stroke,
    points: 20,
    radius: 7,
    angle: 20,
  };
  if (type === starShape) {
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

export function createFeatures ({ list }) {
  const listOfFeatures = [];

  for (const point of list) {
    const lat = point.position.latitude;
    const lon = point.position.longitude;
    const type = point.type;

    const stroke = getStroke(type);
    const fill = getFill(type);

    const position = Projection.fromLonLat([lon, lat]);

    const feature = new Feature({
      geometry: new Point(position),
    });
    feature.setStyle(getFinalPoints(type, fill, stroke));

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
