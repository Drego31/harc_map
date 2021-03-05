<template>
  <t-page class="f-start">
    <m-panel
      :title="eventName"
      :images-related-to-themes="panelImages"
      :styles-for-images="panelStylesForImages"
    >
      <slot name="message"/>
    </m-panel>

    <div class="m-collection f-button f-px-2">
      <slot name="buttons"/>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import MPanel from 'molecules/panel';
import { mapGetters } from 'vuex';
import { THEMES } from 'utils/style-manager';

export default {
  name: 't-start',
  components: {
    MPanel,
    TPage,
  },
  computed: {
    ...mapGetters('event', [
      'eventName',
    ]),
    panelImages () {
      const images = {};
      images[THEMES.dark] = '/img/compass.jpg';
      images[THEMES.light] = '/img/compass.jpg';
      return images;
    },
    panelStylesForImages () {
      const styles = {};
      styles[THEMES.dark] = 'background-size: auto 100%';
      styles[THEMES.light] = 'background-size: auto 100%';
      return styles;
    },
  },
};
</script>
