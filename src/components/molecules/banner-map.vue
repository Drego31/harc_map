<template>
  <div class="m-banner-map">
    <div class="f-flex-1">
      <slot name="text"></slot>
    </div>
    <a-button-primary
      class="f-flex-0"
      style="min-width: 92px"
      @click="$emit('actionTriggered')"
    >
      <slot name="button-name"></slot>
    </a-button-primary>
  </div>
</template>

<script>
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'm-banner-map',
  components: { AButtonPrimary },
};
</script>
