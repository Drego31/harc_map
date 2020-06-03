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
        class="a-icon f-active-point"
      >
      </icon-clock>

      <div>
        <div class="f-text-left">{{ point.pointName }}</div>
        <div class="f-text-14"> {{ getAvailabilityTimeAsString(point.pointExpirationTime) }}</div>
      </div>
      <icon-map
        :size="24"
        class="a-icon"
        @click="panToPointLocationOnMap(point.pointLatitude, point.pointLongitude)"
      >
      </icon-map>
    </div>
  </div>
</template>

<script>
import { pointDurationTimeMock, temporaryPointsMock } from 'pages/temporary-points';
import clock from 'molecules/clock.vue';
import IconMap from 'icons/Map.vue';
import IconClock from 'icons/Clock.vue';
import { getHoursAndMinutesAsString } from 'utils/date';
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
    pointsExpirationTimes: [],
    pointsAppearanceTimes: [],
  }),
  computed: {},
  mounted () {
    this.points = this.sortedTemporaryPoints();
    this.points.filter(point => {
      const appearanceDate = new Date(point.pointExpirationTime);
      const appearanceHour = point.pointExpirationTime.getHours() - pointDurationTimeMock;

      appearanceDate.setHours(appearanceHour);
      this.pointsAppearanceTimes.push(appearanceDate);
      this.pointsExpirationTimes.push(point.pointExpirationTime);
    });

    this.$options.interval = setInterval(this.updatePointsStatus, 1000);
    console.log(this.pointsExpirationTimes);
  },
  methods: {
    ...mapMutations('event', [
      'setMapPosition',
    ]),
    sortedTemporaryPoints () {
      return this.temporaryPointsMock.sort((pA, pB) => pA.pointExpirationTime - pB.pointExpirationTime);
    },
    updatePointsStatus () {
      // let now =  new Date();
      // now = now.getTime()
      // this.points.filter(point => point.pointExpirationTime === now ||)
      // //
      // if ()
    },

    getAvailabilityTimeAsString (expirationDate) {
      const appearanceDate = new Date(expirationDate);
      const appearanceHour = expirationDate.getHours() - pointDurationTimeMock;

      appearanceDate.setHours(appearanceHour);

      return getHoursAndMinutesAsString(appearanceDate) + ' - ' + getHoursAndMinutesAsString(expirationDate);
    },
    panToPointLocationOnMap (pointLatitude, pointLongitude) {
      const mapPosition = {
        latitude: pointLatitude,
        longitude: pointLongitude,
      };
      this.setMapPosition(mapPosition);
      this.$router.push(ROUTES.map.path);
    },

  },

}
;
</script>
