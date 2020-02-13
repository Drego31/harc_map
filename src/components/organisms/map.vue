<template>
  <div id="o-map" class="o-map"></div>
</template>

<script>
import { map } from 'src/map'

const features = [
  {
    lat: 54.4922,
    lon: 18.5133,
    type: 1,
  },
  {
    lat: 54.4805,
    lon: 18.5195,
    type: 2,
  },
  {
    lat: 54.4812,
    lon: 18.5323,
    type: 3,
  },
  {
    lat: 54.4929,
    lon: 18.5630,
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
    })
    map.features.create({
      list: features,
    })
  },
}
</script>
