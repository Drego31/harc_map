<template>
  <t-page class="f-start">
    <m-panel
      :images-related-to-themes="panelImages"
      :styles-for-images="panelStylesForImages"
    >
      <div>
        <span class="a-text f-title f-big">
          {{ $t('page.error.title') }}
        </span>
      </div>
    </m-panel>

    <div class="m-collection f-button f-px-2">
      <div class="f-pt-3 f-text-bold" v-html="$t('page.error.content')"/>
      <div class="f-pt-1">
        <a-button-primary @click="redirectToMainPage">
          {{ $t('general.backToStart') }}
        </a-button-primary>
      </div>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import MPanel from 'molecules/panel';
import { THEMES } from 'utils/style-manager';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'p-error',
  components: {
    AButtonPrimary,
    MPanel,
    TPage,
  },
  computed: {
    panelImages () {
      const images = {};
      images[THEMES.dark] = '/img/treasure-map.jpg';
      images[THEMES.light] = '/img/treasure-map.jpg';
      return images;
    },
    panelStylesForImages () {
      const styles = {};
      styles[THEMES.dark] = 'background-size: auto 100%';
      styles[THEMES.light] = 'background-size: auto 100%';
      return styles;
    },
  },
  methods: {
    redirectToMainPage () {
      const isLogin = this.$store.getters['user/isLogin'];
      const route = isLogin ? this.ROUTES.start : this.ROUTES.welcome;
      this.$router.push(route.path);
    },
  },
};
</script>
