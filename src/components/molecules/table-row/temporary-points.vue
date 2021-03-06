<template>
  <div class="m-grid f-temporary-points">
    <a-icon
      :name="ICONS.watch_later"
      :size="24"
      :class="classByPointExpirationStatus"
    />

    <div>
      <div class="f-text-left">{{ point.pointName }}</div>
      <div class="f-text-14"> {{ availabilityTimeAsString }}</div>
    </div>

    <a-icon
      :name="ICONS.map"
      :size="24"
      :class="classByPointExpirationStatus"
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
    availabilityTimeAsString () {
      return getHoursAndMinutesAsString(this.pointAppearanceTime) + ' - ' + getHoursAndMinutesAsString(this.pointExpirationTime);
    },
    classByPointExpirationStatus () {
      const now = new Date().getTime();

      if (this.pointAppearanceTime >= now) {
        return 'f-future-point';
      } else if (this.pointExpirationTime >= now) {
        return 'f-active-point';
      } else {
        return 'f-disabled-point';
      }
    },
  },
  methods: {
    panTo (point) {
      if (this.checkIsAdmin()) {
        this.$emit('panTo', point);
        return;
      }

      const now = new Date().getTime();
      if (this.pointExpirationTime >= now) {
        this.$emit('panTo', point);
      }
    },
  },

};
</script>
