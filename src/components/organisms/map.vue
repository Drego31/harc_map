<template>
  <div id="o-map" class="o-map"></div>
</template>

<script>
import { map } from 'src/map'

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
      list: [],
    })
  },
}
</script>
