<template>
  <div class="m-grid f-temporary-points">
    <a-icon
      :name="timerIcon"
      :size="24"
      :class="classForTimer"
    />

    <div>
      <div class="f-text-left">{{ point.pointName }}</div>
      <div class="f-text-14"> {{ availabilityTimeAsString }}</div>
    </div>

    <a-icon
      v-show="checkIfPointIsPast() === false || checkIsAdmin()"
      :name="ICONS.map"
      :size="24"
      :class="classForMap"
      @click="panTo(point)"
    />
  </div>
</template>

<script>
import { getHoursAndMinutesAsString } from 'utils/date';
import AIcon from 'atoms/icon';

export default {
  name: 'm-table-row-temporary-points',
  components: {
    AIcon,
  },
  data: () => ({
    pointAppearanceTime: null,
    pointExpirationTime: null,
  }),
  created () {
    this.pointAppearanceTime = new Date(this.point.pointAppearanceTime);
    this.pointExpirationTime = new Date(this.point.pointExpirationTime);
  },
  props: {
    point: {
      required: true,
      type: Object,
    },
  },
  computed: {
    timerIcon () {
      if (this.checkIfPointIsFuture()) return this.ICONS.access_time;
      if (this.checkIfPointIsActive()) return this.ICONS.watch_later;
      else return this.ICONS.history_toggle_off;
    },
    availabilityTimeAsString () {
      return getHoursAndMinutesAsString(this.pointAppearanceTime) + ' - ' + getHoursAndMinutesAsString(this.pointExpirationTime);
    },
    classForMap () {
      if (this.checkIsAdmin() || this.checkIfPointIsActive()) return '';
      else return 'f-disabled-point';
    },
    classForTimer () {
      if (this.checkIfPointIsFuture()) return 'f-future-point';
      if (this.checkIfPointIsActive()) return 'f-active-point';
      else return 'f-disabled-point';
    },
  },
  methods: {
    checkIfPointIsActive () {
      return this.$store.getters['event/checkTemporaryPointIsVisible'](this.point);
    },
    checkIfPointIsFuture () {
      const now = (new Date()).getTime();
      return this.pointAppearanceTime > now;
    },
    checkIfPointIsPast () {
      const now = (new Date()).getTime();
      return this.pointExpirationTime < now;
    },
    panTo (point) {
      if (this.checkIsAdmin()) {
        this.$emit('panTo', point);
        return;
      }
      this.checkIfPointIsActive() && this.$emit('panTo', point);
    },
  },

};
</script>
