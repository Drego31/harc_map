import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import * as Projection from 'ol/proj'
import { map } from 'src/map'
import { Fill, RegularShape, Stroke, Style } from 'ol/style'

export function createFeatures ({ list }) {
  for (const point of list) {
    const lat = point.position.latitude
    const lon = point.position.longitude
    const type = point.type

    const stroke = new Stroke({
      color: 'black',
      width: 2,
    })
    const fill = new Fill({ color: 'red' })
    const position = Projection.fromLonLat([lon, lat])

    const feature = new Feature({
      geometry: new Point(position),
    })
    console.log({ type })
    feature.setStyle(new Style({
      image: new RegularShape({
        fill: fill,
        stroke: stroke,
        points: 20,
        radius: 7,
        angle: 20,
      }),
    }))

    map.points.list.push(feature)
  }

  const layer = new VectorLayer({
    source: new VectorSource({
      features: map.points.list,
    }),
  })
  map.realMap.addLayer(layer)
}
