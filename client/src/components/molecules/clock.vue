<template>
  <div class="m-clock">
    <a-icon :size="32" :name=ICONS.schedule class="f-clock"></a-icon>
    <div class="f-mb-2 f-text-center f-text-32 f-text-bold">
      {{ hours }}<span :class="separatorClass">{{ separator }}</span>{{ minutes }}
    </div>
  </div>

</template>

<script>
import { getMinutesAsString, getSecondsAsString } from 'utils/date';
export default {
  name: 'm-clock',
  data: () => ({
    hours: 0,
    minutes: 0,
    seconds: 0,
    separator: ':',
    separatorClass: '',
    blinkTime: 500,
  }),
  mounted () {
    this.updateDateTime();
    this.$options.interval = setInterval(this.updateDateTime, 1000);
  },
  beforeDestroy () {
    clearInterval(this.$options.interval);
  },
  watch: {
    seconds () {
      this.separatorClass = 'f-hidden';
      setTimeout(() => {
        this.separatorClass = '';
      }, this.blinkTime);
    },
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
