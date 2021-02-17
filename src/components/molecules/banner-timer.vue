<template>
  <div class="m-banner-timer">
    <span>{{ $t('features.timer.toUpdate') }}</span>
    <m-countdown-timer :time-gap="eventBasicInformation.mapRefreshTime"/>
  </div>
</template>

<script>
import MCountdownTimer from 'molecules/countdown-timer';
import { mapGetters } from 'vuex';

export default {
  name: 'm-banner-timer',
  components: { MCountdownTimer },
  computed: {
    ...mapGetters('event', [
      'eventBasicInformation',
    ]),
  },
};
</script>
