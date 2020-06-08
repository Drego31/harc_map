<template>
  <div class="m-grid f-temporary-points">
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
      @click="panTo(point)"
    />
  </div>
</template>

<script>
import IconMap from 'icons/Map.vue';
import IconClock from 'icons/Clock.vue';
import { getHoursAndMinutesAsString, modifyDateHours } from 'utils/date';

export default {
  name: 'm-table-row-temporary-points',
  components: {
    IconMap,
    IconClock,
  },
  data: () => ({
    pointAppearanceTime: '',
  }),
  created () {
    this.pointAppearanceTime = modifyDateHours(this.point.pointExpirationTime, -this.pointDurationTimeMock);
  },
  props: {
    pointDurationTimeMock: {
      required: true,
      type: Number,
    },
    point: {
      required: true,
      type: Object,
    },
  },
  methods: {
    getAvailabilityTimeAsString (expirationDate) {
      return getHoursAndMinutesAsString(this.pointAppearanceTime) + ' - ' + getHoursAndMinutesAsString(expirationDate);
    },
    classByPointExpirationStatus (pointExpirationTime) {
      const now = new Date().getTime();

      if (pointExpirationTime < now) {
        return 'f-disabled-point';
      } else if (this.pointAppearanceTime > now) {
        return 'f-future-point';
      } else {
        return 'f-active-point';
      }
    },
    panTo (point) {
      this.$emit('panTo', point);
    },
  },

};
</script>
