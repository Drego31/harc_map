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
import { getCollectedPointsByMock } from 'api/mock/mockMethods/get-collected-points';
import LineString from 'ol/geom/LineString';

const getStroke = (shape, width = 2) => {
  const appearance = MAP_POINTS[shape] || {};
  return new Stroke({
    color: appearance.strokeColor,
    width,
  });
};
const getFill = (shape) => {
  const appearance = MAP_POINTS[shape] || {};
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

  /* TESTING */
  const pointsMock = getCollectedPointsByMock();

  const linePath = [
    [pointsMock[0].longitude, pointsMock[0].latitude],
    [pointsMock[1].longitude, pointsMock[1].latitude],
    [pointsMock[2].longitude, pointsMock[2].latitude],
    [pointsMock[3].longitude, pointsMock[3].latitude],
    [pointsMock[4].longitude, pointsMock[4].latitude],
    [pointsMock[5].longitude, pointsMock[5].latitude],
  ];
  const polyline = new LineString(linePath);
  polyline.transform('EPSG:4326', 'EPSG:3857');
  const lineFeature = new Feature(polyline);
  console.log(lineFeature);
  /* TESTING */

  const layer = new VectorLayer({
    source: new VectorSource({
      features: listOfFeatures,
    }),
  });
  const lineLayer = new VectorLayer({
    source: new VectorSource({
      features: [lineFeature],
    }),
    style: new Style({
      stroke: new Stroke(
        {
          color: '#32f306',
          width: 5,
        },
      ),
    }),
  });
  map.realMap.addLayer(lineLayer);
  map.realMap.addLayer(layer);
  map.points.layer = layer;
}
