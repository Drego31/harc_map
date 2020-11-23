<template>
  <t-page title="Start" class="f-start">
    <m-panel
      :title="eventName"
      :img-styles="imgStyles"
    >
      <div v-if="sumOfCollectedPoints > 0">
        Zebraliście już <span class="f-text-white">{{ sumOfCollectedPoints }} pkt</span>
      </div>
      <div v-else>
        Nie zebraliście jeszcze żadnych punktów
      </div>
    </m-panel>

    <div class="m-collection f-button f-px-2">
      <a-button-fill-primary @click="$router.push(ROUTES.map.path)">
        Rozpocznij poszukiwania!
      </a-button-fill-primary>
      <a-button-fill-secondary @click="$router.push(ROUTES.collectedPoints.path)">
        Sprawdź swoje wyniki
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
    imgStyles () {
      const styles = {};
      styles[THEMES.dark] = 'background-image: url("/img/compass.jpg"); background-size: auto 100%';
      styles[THEMES.light] = 'background-image: url("/img/compass.jpg"); background-size: auto 100%';
      return styles;
    },
  },
};
</script>
