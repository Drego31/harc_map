<template>
  <div class="m-banner-timer">
    <span>{{ $t('features.timer.toUpdate') }}</span>
    <m-countdown-timer/>
  </div>
</template>

<script>
import MCountdownTimer from 'molecules/countdown-timer';
export default {
  name: 'm-banner-timer',
  components: { MCountdownTimer },
};
</script>
