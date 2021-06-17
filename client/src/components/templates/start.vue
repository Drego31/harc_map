<template>
  <t-page class="f-start">
    <m-panel
      :title="eventName"
      :images-related-to-themes="panelImages"
      :styles-for-images="panelStylesForImages"
    >
      <div>
        {{ mainMessage }}
      </div>
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
import { eventUtils } from 'utils/event';
import moment from 'moment';

export default {
  name: 't-start',
  components: {
    MPanel,
    TPage,
  },
  data: () => ({
    mainMessage: '',
  }),
  mounted () {
    this.updateMainMessage();
    this.$options.interval = setInterval(this.updateMainMessage, 1000 * 60);
  },
  computed: {
    ...mapGetters('event', [
      'eventName',
    ]),
    ...mapGetters('event', {
      event: 'eventBasicInformation',
    }),
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
  methods: {
    updateMainMessage () {
      this.mainMessage = this.createMainMessage();
    },
    createMainMessage () {
      const datetimeFormat = 'DD.MM.YYYY HH:mm';
      const timeFormat = 'HH:mm';
      const eventStartDate = moment(new Date(this.event.eventStartDate));
      const eventEndDate = moment(new Date(this.event.eventEndDate));

      if (eventUtils.checkIfIsBeforeStart(this.event)) {
        return this.$t('page.start.eventStartDate') + eventStartDate.format(datetimeFormat);
      }

      if (eventUtils.checkIfIsOnGoing(this.event)) {
        if (eventUtils.checkIfEndDateIsToday(this.event)) {
          return this.$t('page.start.eventEndTime') + eventEndDate.format(timeFormat);
        }
        return this.$t('page.start.eventEndDate') + eventEndDate.format(datetimeFormat);
      }
      return this.$t('page.start.eventIsOutOfDate');
    },
  },
  beforeDestroy () {
    clearInterval(this.$options.interval);
  },
};
</script>
