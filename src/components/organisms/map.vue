<template>
  <div class="o-map" id="o-map"></div>
</template>

<script>
import { map } from 'map';
import { MapPoint } from 'src/structures/map-point';

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
      list: appEvent.points.map(point => new MapPoint(point)),
    });
  },
};
</script>
