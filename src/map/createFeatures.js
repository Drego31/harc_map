import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import * as Projection from 'ol/proj'
import { map } from 'src/map'
import { Fill, RegularShape, Stroke, Style } from 'ol/style'

export function createFeatures (list) {
  const stroke = new Stroke({
    color: 'black',
    width: 2,
  })
  const fill = new Fill({ color: 'red' })

  const feature = new Feature({
    geometry: new Point(Projection.fromLonLat([18.5133, 54.4922])),
  })

  feature.setStyle(new Style({
    image: new RegularShape({
      fill: fill,
      stroke: stroke,
      points: 4,
      radius: 10,
      angle: Math.PI / 4,
    }),
  }))

  const layer = new VectorLayer({
    source: new VectorSource({
      features: [
        feature,
      ],
    }),
  })
  map.realMap.addLayer(layer)
}
