<template>
  <t-page class="f-map">
    <div id="o-map" class="o-map"></div>
  </t-page>
</template>

<script>
import TPage from 'components/templates/page'
import { createMap } from 'src/utils/map'

export default {
  name: 'p-map',
  components: {
    TPage,
  },
  mounted () {
    createMap('o-map')
  },
}
</script>
