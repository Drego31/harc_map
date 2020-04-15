<template>
  <div class="o-map" id="o-map"></div>
</template>

<script>
import { map } from 'map';

export default {
  name: 'o-map',
  mounted () {
    const appEvent = this.$store.getters['event/event'];
    const position = appEvent.mapPosition;

    map.create({
      elementId: 'o-map',
      lat: position.latitude,
      lon: position.longitude,
      zoom: appEvent.mapZoom,
      maxZoom: 19,
    });
    map.points.create({
      list: appEvent.points,
    });
  },
};
</script>
