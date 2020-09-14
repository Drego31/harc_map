<template>
  <div class="m-grid f-temporary-points">
    <a-icon
      name="watch_later"
      :size="24"
      :class="classByPointExpirationStatus(pointExpirationTime)"
    />

    <div>
      <div class="f-text-left">{{ point.pointName }}</div>
      <div class="f-text-14"> {{ getAvailabilityTimeAsString(pointExpirationTime) }}</div>
    </div>

    <a-icon
      name="map"
      :size="24"
      :class="classByPointExpirationStatus(pointExpirationTime)"
      @click="panTo(point)"
    />
  </div>
</template>

<script>
import IconMap from 'icons/Map.vue';
import IconClock from 'icons/Clock.vue';
import { getHoursAndMinutesAsString, modifyDateHours } from 'utils/date';
import AIcon from 'atoms/icon';

export default {
  name: 'm-table-row-temporary-points',
  components: {
    AIcon,
    IconMap,
    IconClock,
  },
  data: () => ({
    pointAppearanceTime: null,
    pointExpirationTime: null,
  }),
  created () {
    this.pointExpirationTime = new Date(this.point.pointExpirationTime);
    this.pointAppearanceTime = modifyDateHours(this.pointExpirationTime, -this.pointDurationTime);
  },
  props: {
    pointDurationTime: {
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

      if (this.pointAppearanceTime >= now) {
        return 'f-future-point';
      } else if (pointExpirationTime >= now) {
        return 'f-active-point';
      } else {
        return 'f-disabled-point';
      }
    },
    panTo (point) {
      this.$emit('panTo', point);
    },
  },

};
</script>
