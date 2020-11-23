<template>
  <div class="m-panel f-page">
    <div class="a-img f-panel" :style="style">
      <div v-if="title !== ''" class="m-banner f-panel">
        {{ title }}
      </div>
    </div>
    <div class="m-box f-panel">
      <slot/>
    </div>
  </div>
</template>

<script>
import { THEMES } from 'utils/style-manager';

export default {
  name: 'm-panel',
  props: {
    title: {
      type: String,
      default: '',
    },
    imgStyles: {
      type: Object,
      required: true,
    },
  },
  computed: {
    style () {
      if (this.$store.getters['theme/name'] === THEMES.dark && this.imgStyles.dark) {
        return this.imgStyles.dark;
      } else if (this.imgStyles.dark) {
        return this.imgStyles.light;
      } else {
        throw new Error('Prop `imgStyles` is wrong defined');
      }
    },
  },
};
</script>
