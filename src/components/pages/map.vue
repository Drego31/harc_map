<template>
  <t-page class="f-map">
    <div id="o-map" class="o-map"></div>
  </t-page>
</template>

<script>
import TPage from 'components/templates/page'
import { map } from 'src/map'

export default {
  name: 'p-map',
  components: {
    TPage,
  },
  mounted () {
    map.create({
      elementId: 'o-map',
      lat: 54.4922,
      lon: 18.5133,
      zoom: 12,
    })
  },
}
</script>
