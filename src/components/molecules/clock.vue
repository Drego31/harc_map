<template>
  <div class="f-mb-2 f-text-center f-text-24 f-text-bold ">
    {{ hours }}:{{ minutes }}:{{ seconds }}
  </div>
</template>

<script>
import { getMinutesAsString, getSecondsAsString } from 'utils/date';

export default {
  name: 'clock.vue',

  data: () => ({
    hours: 0,
    minutes: 0,
    seconds: 0,
  }),
  mounted () {
    this.updateDateTime();
    this.$options.interval = setInterval(this.updateDateTime, 1000);
  },
  beforeDestroy () {
    clearInterval(this.$options.interval);
  },
  methods: {
    updateDateTime () {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = getMinutesAsString(now);
      this.seconds = getSecondsAsString(now);
    },
  },
};
</script>
