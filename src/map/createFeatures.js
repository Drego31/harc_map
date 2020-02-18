import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import * as Projection from 'ol/proj'
import { map } from 'src/map'
import { Fill, RegularShape, Stroke, Style } from 'ol/style'
import { MAP_POINTS } from '../utils/macros/mapPointTypes'

const getStroke = (type, width = 2) => {
  return new Stroke({
    color: MAP_POINTS[type].strokeColor,
    width,
  })
}
const getFill = (type) => {
  return new Fill({ color: MAP_POINTS[type].fillColor })
}

const getFinalPoints = (type, fill, stroke) => {
  const STAR_SHAPE = 4
  const POINT_VALUES = {
    points: 20,
    radius: 7,
    angle: 20,
  }
  if (type === STAR_SHAPE) {
    POINT_VALUES.points = 5
    POINT_VALUES.radius = 10
    POINT_VALUES.radius2 = 4
    POINT_VALUES.angle = 0
    return new Style({
      image: new RegularShape({
        fill: fill,
        stroke: stroke,
        ...POINT_VALUES,
      }),
    })
  }
  return new Style({
    image: new RegularShape({
      fill: fill,
      stroke: stroke,
      ...POINT_VALUES,
    }),
  })
}

export function createFeatures ({ list }) {
  for (const point of list) {
    const lat = point.position.latitude
    const lon = point.position.longitude
    const type = point.type

    const stroke = getStroke(type)
    const fill = getFill(type)

    const position = Projection.fromLonLat([lon, lat])

    const feature = new Feature({
      geometry: new Point(position),
    })
    feature.setStyle(getFinalPoints(type, fill, stroke))

    map.points.list.push(feature)
  }

  const layer = new VectorLayer({
    source: new VectorSource({
      features: map.points.list,
    }),
  })
  map.realMap.addLayer(layer)
}
