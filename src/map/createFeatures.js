import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import * as Projection from 'ol/proj'
import { map } from 'src/map'
import { Fill, RegularShape, Stroke, Style } from 'ol/style'

export function createFeatures (list) {
  for (const { lat, lon, type } of list) {
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
        radius: 10,
        angle: 20,
      }),
    }))

    map.features.list.push(feature)
  }

  const layer = new VectorLayer({
    source: new VectorSource({
      features: map.features.list,
    }),
  })
  map.realMap.addLayer(layer)
}
