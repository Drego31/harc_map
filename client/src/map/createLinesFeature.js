import { uCheck } from '@dbetka/utils';
import { map } from 'map/index';
import Feature from 'ol/Feature';
import LineString from 'ol/geom/LineString';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Stroke, Style } from 'ol/style';
import { mapConfig } from 'map/config';
import { ErrorMessage } from 'utils/error-message';

const getLineStyle = () => {
  return new Style({
    stroke: new Stroke(
      {
        color: mapConfig.lineConnectingPoints.color,
        width: mapConfig.lineConnectingPoints.width,
      },
    ),
  });
};

export function createLinesFeature ({ list = [] }) {
  const mapIsNotDefined = uCheck.isNotObject(map.realMap);
  const notEnoughPoints = list.length < 2;

  if (mapConfig.lineConnectingPoints.visible === false) return false;
  if (notEnoughPoints) return false;
  if (mapIsNotDefined) {
    console.error(new ErrorMessage('Map is undefined'));
    return false;
  }

  map.lines.destroyAll();

  const linePath = list.map(point => {
    return [point.pointLongitude, point.pointLatitude];
  });
  const polyline = new LineString(linePath);
  polyline.transform('EPSG:4326', 'EPSG:3857');

  const feature = new Feature(polyline);

  const layer = new VectorLayer({
    source: new VectorSource({
      features: [feature],
    }),
    style: getLineStyle(),
  });
  layer.setZIndex(mapConfig.features.zIndex);

  map.realMap.addLayer(layer);
  map.lines.layer = layer;
}
