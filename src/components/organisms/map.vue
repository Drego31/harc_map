<template>
  <div class="o-map" id="o-map"></div>
</template>

<script>
import { map } from 'map';
import { MapPoint } from 'src/structures/map-point';

export default {
  name: 'o-map',
  mounted () {
    this.$store.dispatch('event/download')
      .then(appEvent => {
        const position = appEvent.defaultPosition;

        map.create({
          elementId: 'o-map',
          lat: position.latitude,
          lon: position.longitude,
          zoom: appEvent.defaultZoom,
          maxZoom: 19,
        });
        map.points.create({
          list: appEvent.points.map(point => new MapPoint(point)),
        });
      });
  },
};
</script>
