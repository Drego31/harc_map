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

    <div class="f-p-2">
      <a-button-primary
        class="f-fill f-mt-3 f-mb-4"
        @click="$router.push(ROUTES.map.path)"
      >
        Rozpocznij poszukiwania!
      </a-button-primary>
      <a-button-secondary
        class="f-fill"
        @click="$router.push(ROUTES.collectedPoints.path)"
      >
        Sprawdź swoje wyniki
      </a-button-secondary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';
import AButtonSecondary from 'atoms/button/secondary';
import MPanel from 'molecules/panel';
import { mapGetters } from 'vuex';
import { THEMES } from 'utils/style-manager';

export default {
  name: 'p-start',
  components: {
    MPanel,
    AButtonSecondary,
    AButtonPrimary,
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
