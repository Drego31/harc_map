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
    imagesRelatedToThemes: {
      type: Object,
      required: true,
    },
    stylesForImages: {
      type: Object,
      default: () => ({
        dark: '',
        light: '',
      }),
    },
  },
  computed: {
    style () {
      const currentTheme = this.$store.getters['theme/name'];

      for (const theme in THEMES) {
        if (currentTheme === THEMES[theme] && this.imagesRelatedToThemes[theme]) {
          return `background-image: url("${this.imagesRelatedToThemes[theme]}"); ` +
            `${this.stylesForImages[theme]}`;
        }
      }
      throw new Error('Prop `imgStyles` is wrong defined');
    },
  },
};
</script>
