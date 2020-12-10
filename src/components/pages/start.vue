<template>
  <t-page class="f-start">
    <m-panel
      :title="eventName"
      :images-related-to-themes="panelImages"
      :styles-for-images="panelStylesForImages"
    >
      <div v-if="sumOfCollectedPoints > 0">
        {{ $t('page.start.alreadyCollected') }}
        <span class="f-text-white">
          {{ sumOfCollectedPoints }} {{ $t('general.pointUnit') }}
        </span>
      </div>
      <div v-else>
        {{ $t('page.start.nothingCollected') }}
      </div>
    </m-panel>

    <div class="m-collection f-button f-px-2">
      <a-button-fill-primary @click="$router.push(ROUTES.map.path)">
        {{ $t('page.start.search') }}
      </a-button-fill-primary>
      <a-button-fill-secondary @click="$router.push(ROUTES.collectedPoints.path)">
        {{ $t('page.start.checkResults') }}
      </a-button-fill-secondary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import MPanel from 'molecules/panel';
import { mapGetters } from 'vuex';
import { THEMES } from 'utils/style-manager';
import AButtonFillSecondary from 'atoms/button/fill/secondary';
import AButtonFillPrimary from 'atoms/button/fill/primary';

export default {
  name: 'p-start',
  components: {
    MPanel,
    AButtonFillPrimary,
    AButtonFillSecondary,
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
