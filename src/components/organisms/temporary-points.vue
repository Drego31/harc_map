<template>
  <div>
    <clock/>
    <m-table-row-temporary-points
      v-for="point in points"
      :point="point"
      :key="point.pointId"
      :pointDurationTime="pointDurationTime"
      @panTo="panToPointLocationOnMap"
    />
  </div>
</template>

<script>
import MTableRowTemporaryPoints from 'molecules/table-row/temporary-points';
import clock from 'molecules/clock.vue';
import { ROUTES } from 'utils/macros/routes';
import { mapGetters, mapMutations } from 'vuex';
import { MACROS } from 'utils/macros';

export default {
  name: 'o-temporary-points',
  components: {
    MTableRowTemporaryPoints,
    clock,
  },
  data: () => ({
    pointDurationTime: MACROS.pointDurationTime,
  }),
  computed: {
    ...mapGetters('event', {
      points: 'getTemporaryPoints',
    }),
  },
  methods: {
    ...mapMutations('event', [
      'setMapPosition',
      'setMapZoom',
    ]),
    panToPointLocationOnMap ({ pointLatitude, pointLongitude }) {
      const mapPosition = {
        latitude: pointLatitude,
        longitude: pointLongitude,
      };
      this.setMapPosition(mapPosition);
      this.setMapZoom(12);
      this.$router.push(ROUTES.map.path);
    },

  },
}
;
</script>
