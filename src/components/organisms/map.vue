<template>
  <div id="o-map" class="o-map"></div>
</template>

<script>
import { map } from 'src/map'

const points = [
  {
    lat: 54.51728,
    lon: 18.51465,
    type: 3,
  },
  {
    lat: 54.51111,
    lon: 18.51173,
    type: 2,
  },
  {
    lat: 54.51548,
    lon: 18.54418,
    type: 3,
  },
  {
    lat: 54.51851,
    lon: 18.55863,
    type: 2,
  },
  {
    lat: 54.49639,
    lon: 18.56198,
    type: 1,
  },
  {
    lat: 54.50585,
    lon: 18.52872,
    type: 2,
  },
  {
    lat: 54.48899,
    lon: 18.49213,
    type: 1,
  },
]

export default {
  name: 'o-map',
  mounted () {
    map.create({
      elementId: 'o-map',
      lat: 54.4922,
      lon: 18.5133,
      zoom: 12,
      maxZoom: 19,
    })
    map.features.create({
      list: points,
    })
  },
}
</script>
