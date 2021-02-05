<template>
  <div :class="[minutes === 0 ? 'm-countdown-timer-warning' : 'm-countdown-timer']">
    {{ getMinutes }}:{{ getSeconds }}
  </div>
</template>

<script>
import { getZeroPad } from 'utils/date';

export default {
  name: 'm-countdown-timer',
  data: () => ({
    minutes: 0,
    seconds: 0,
  }),
  props: {
    timeGap: {
      type: Number,
      default: 15,
    },
  },
  mounted () {
    this.setStartTime();
    this.updateDateTime();
    this.$options.interval = setInterval(this.updateDateTime, 1000);
  },
  beforeDestroy () {
    clearInterval(this.$options.interval);
  },
  computed: {
    getSeconds () {
      if (this.seconds < 0) return '00';
      return getZeroPad(this.seconds);
    },
    getMinutes () {
      return getZeroPad(this.minutes);
    },
  },
  methods: {
    updateDateTime () {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          this.minutes = this.timeGap - 1;
          this.seconds = 59;
        } else {
          this.minutes -= 1;
          this.seconds = 59;
        }
      } else {
        this.seconds -= 1;
      }
    },
    setStartTime () {
      const now = new Date();
      const minutesAfterGap = now.getMinutes() % this.timeGap;
      const secondsAfterGap = now.getSeconds();
      this.minutes = this.timeGap - minutesAfterGap;
      this.seconds = 59 - secondsAfterGap;
    },
  },
};
</script>
