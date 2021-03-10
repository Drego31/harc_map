<template>
  <t-page class="f-start">
    <m-panel
      :title="eventName"
      :images-related-to-themes="panelImages"
      :styles-for-images="panelStylesForImages"
    >
      <div>
        {{ timeToEndEvent }}
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
import moment from 'moment';

export default {
  name: 't-start',
  components: {
    MPanel,
    TPage,
  },
  data: () => ({
    timeToEndEvent: '',
  }),
  mounted () {
    this.updateTimeToEndEvent();
    setInterval(this.updateTimeToEndEvent, 1000 * 60);
  },
  computed: {
    ...mapGetters('event', [
      'eventName',
      'eventEndDate',
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
  methods: {
    updateTimeToEndEvent () {
      const eventEndDate = moment(this.eventEndDate);
      const now = moment();
      const days = eventEndDate.diff(now, 'days');
      const minutes = eventEndDate.diff(now, 'minutes');
      if (minutes <= 0) {
        this.timeToEndEvent = this.$t('page.start.eventFinished');
      } else {
        if (days > 0) {
          this.timeToEndEvent = this.$t('page.start.datetimeToEndEvent') + eventEndDate.format('DD.MM.YYYY HH:mm');
        } else {
          this.timeToEndEvent = this.$t('page.start.timeToEndEvent') + eventEndDate.format('HH:mm');
        }
      }
    },
  },
};
</script>
