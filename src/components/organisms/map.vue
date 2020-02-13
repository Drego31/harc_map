<template>
  <div id="o-map" class="o-map"></div>
</template>

<script>
import { map } from 'map'
import { api } from 'api'

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
    api.getPoints().then(points => {
      map.features.create({
        list: points,
      })
    })
  },
}
</script>
