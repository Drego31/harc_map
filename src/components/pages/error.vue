<template>
  <t-page class="f-start">
    <m-panel
      :images-related-to-themes="panelImages"
      :styles-for-images="panelStylesForImages"
    >
      <div>
        <span class="a-text f-title f-big">
          Błąd 404
        </span>
      </div>
    </m-panel>

    <div class="m-collection f-button f-px-2">
      <div class="f-pt-3 f-text-bold" v-html="$t('page.error.content')" />
      <div class="f-pt-1">
        <a-button-primary @click="$router.push(ROUTES.welcome.path)">
          {{ $t('general.backToStart') }}
        </a-button-primary>
      </div>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import MPanel from 'molecules/panel';
import { mapGetters } from 'vuex';
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
    ...mapGetters('user', [
      'sumOfCollectedPoints',
    ]),
    ...mapGetters('event', [
      'eventName',
    ]),
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
};
</script>
