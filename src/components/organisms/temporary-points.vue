<template>
  <div>
    <clock/>
    <div
      v-for="point in points"
      :key="point.pointId"
      class="m-grid f-temporary-points"
    >
      <icon-clock
        :size="24"
        class="a-icon"
        :class="classByPointExpirationStatus(point.pointExpirationTime)"
      />

      <div>
        <div class="f-text-left">{{ point.pointName }}</div>
        <div class="f-text-14"> {{ getAvailabilityTimeAsString(point.pointExpirationTime) }}</div>
      </div>

      <icon-map
        :size="24"
        class="a-icon"
        :class="classByPointExpirationStatus(point.pointExpirationTime)"
        @click="panToPointLocationOnMap(point)"
      />
    </div>
  </div>
</template>

<script>
import { pointDurationTimeMock, temporaryPointsMock } from 'pages/temporary-points';
import clock from 'molecules/clock.vue';
import IconMap from 'icons/Map.vue';
import IconClock from 'icons/Clock.vue';
import { getHoursAndMinutesAsString, modifyDateHours } from 'utils/date';
import { ROUTES } from 'utils/macros/routes';
import { mapMutations } from 'vuex';

export default {
  name: 'o-temporary-points',
  components: {
    IconMap,
    IconClock,
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
    getAvailabilityTimeAsString (expirationDate) {
      const appearanceDate = modifyDateHours(expirationDate, -pointDurationTimeMock);
      return getHoursAndMinutesAsString(appearanceDate) + ' - ' + getHoursAndMinutesAsString(expirationDate);
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
    classByPointExpirationStatus (pointExpirationTime) {
      const now = new Date().getTime();
      const pointAppearanceDate = modifyDateHours(pointExpirationTime, -pointDurationTimeMock);

      if (pointExpirationTime < now) return 'f-disabled-point';
      else if (pointAppearanceDate > now) return 'f-future-point';
      else return 'f-active-point';
    },
  },
}
;
</script>
