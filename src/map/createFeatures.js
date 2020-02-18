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
    color: MAP_POINTS[type.toString()].strokeColor,
    width,
  })
}
const getFill = (type) => {
  return new Fill({ color: MAP_POINTS[type.toString()].fillColor })
}

const getShape = (type, fill, stroke) => {
  const STAR_SHAPE = 4
  if (type === STAR_SHAPE) {
    return new Style({
      image: new RegularShape({
        fill: fill,
        stroke: stroke,
        points: 5,
        radius: 10,
        radius2: 4,
        angle: 0,
      }),
    })
  }
  return new Style({
    image: new RegularShape({
      fill: fill,
      stroke: stroke,
      points: 20,
      radius: 7,
      angle: 20,
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
    console.log({ type })
    feature.setStyle(getShape(type, fill, stroke))

    map.points.list.push(feature)
  }

  const layer = new VectorLayer({
    source: new VectorSource({
      features: map.points.list,
    }),
  })
  map.realMap.addLayer(layer)
}
