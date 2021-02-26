<template>
  <t-page>
    <o-form :on-submit="updateEvent">
      <m-input
        :disabled="blockForm"
        :placeholder="$t('form.field.eventName')"
        v-model="values.eventName"
      />
      <m-input
        disabled
        :placeholder="$t('form.field.eventId')"
        v-model="values.eventId"
        :assist="$t('form.assist.eventId')"
      />
      <m-select
        :options="options"
        :placeholder="$t('form.field.mapRefreshTime')"
        v-model="values.mapRefreshTime"
      />
      <div
        class="f-text-center"
        :class="[isServerError ? 'f-text-danger' : 'f-text-primary']"
        v-text="message"
      />
      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
        :text="$t('form.button.save')"
      />
    </o-form>
    <a-button-secondary class="f-text-center" @click="$router.push(ROUTES.setMapPosition)">
      {{ $t('form.button.setDefaultMapPositionAndZoom') }}
    </a-button-secondary>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import MInput from 'molecules/input';
import AButtonSubmit from 'atoms/button/submit';
import OForm from 'organisms/form';
import { mixins } from 'mixins/base';
import { mapGetters } from 'vuex';
import AButtonSecondary from 'atoms/button/secondary';
import MSelect from 'molecules/select';

export default {
  name: 'p-admin-edit-event',
  mixins: [mixins.form],
  components: {
    MSelect,
    TPage,
    AButtonSecondary,
    OForm,
    AButtonSubmit,
    MInput,
  },
  data () {
    const minute = 60;
    return {
      values: {
        eventName: '',
        eventId: '',
        mapRefreshTime: 60,
      },
      blockForm: false,
      isSending: false,
      isServerError: false,
      message: '',
      options: [
        {
          label: '1 min',
          value: minute,
        }, {
          label: '5 min',
          value: 5 * minute,
        }, {
          label: '10 min',
          value: 10 * minute,
        }, {
          label: '15 min',
          value: 15 * minute,
        }, {
          label: '30 min',
          value: 30 * minute,
        },
      ],
    };
  },
  created () {
    this.values.eventName = this.event.eventName;
    this.values.eventId = this.event.eventId;
    this.values.mapRefreshTime = this.event.mapRefreshTime;
  },
  computed: {
    ...mapGetters('event', ['event', 'eventBasicInformation']),
  },
  methods: {
    updateEvent () {
      const updatedEvent = {
        ...this.eventBasicInformation,
        eventName: this.values.eventName,
        mapRefreshTime: this.values.mapRefreshTime,
      };
      this.$store.dispatch('event/updateEvent', updatedEvent)
        .then(this.onEventUpdate)
        .catch(this.onErrorOccurs);
    },
    onEventUpdate () {
      this.isServerError = false;
      this.message = this.$t('communicate.editEvent.success');
      setTimeout(() => this.clearMessage(), 3000);
    },
    clearMessage () {
      this.message = '';
    },
  },
};
</script>
