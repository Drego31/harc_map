<template>
  <div>
    <clock/>
    <m-table-row-temporary-points
      v-for="point in points"
      :point="point"
      :key="point.pointId"
      :pointDurationTimeMock="pointDurationTimeMock"
      @panTo="panToPointLocationOnMap"
    />
  </div>
</template>

<script>
import MTableRowTemporaryPoints from 'molecules/table-row/temporary-points';
import clock from 'molecules/clock.vue';
import { pointDurationTimeMock, temporaryPointsMock } from 'pages/temporary-points';
import { ROUTES } from 'utils/macros/routes';
import { mapMutations } from 'vuex';

export default {
  name: 'o-temporary-points',
  components: {
    MTableRowTemporaryPoints,
    clock,
  },
  data: () => ({
    temporaryPointsMock,
    pointDurationTimeMock,
    points: [],
  }),
  mounted () {
    this.points = this.sortedTemporaryPoints();
  },
  methods: {
    ...mapMutations('event', [
      'setMapPosition',
      'setMapZoom',
    ]),
    // ...mapGetters('event', [
    //   'getTemporaryPoints',
    // ]),
    sortedTemporaryPoints () {
      return this.temporaryPointsMock.sort((pA, pB) => pA.pointExpirationTime - pB.pointExpirationTime);
    },
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
