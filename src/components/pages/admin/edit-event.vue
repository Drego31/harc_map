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
    <a-button-secondary class="f-text-center" @click="$router.push(ROUTES.setMapPosition)" >
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

export default {
  name: 'p-admin-edit-event',
  mixins: [mixins.form],
  components: {
    TPage,
    AButtonSecondary,
    OForm,
    AButtonSubmit,
    MInput,
  },
  data () {
    return {
      values: {
        eventName: '',
        eventId: '',
      },
      blockForm: false,
      isSending: false,
      isServerError: false,
      message: '',
    };
  },
  created () {
    this.values.eventName = this.event.eventName;
    this.values.eventId = this.event.eventId;
  },
  computed: {
    ...mapGetters('event', ['event', 'eventBasicInformation']),
  },
  methods: {
    updateEvent () {
      const updatedEvent = {
        ...this.eventBasicInformation,
        eventName: this.values.eventName,
      };
      this.$store.dispatch('event/updateEvent', updatedEvent)
        .then(this.onEventUpdate)
        .catch(this.onErrorOccurs);
    },
    onEventUpdate () {
      this.isServerError = false;
      this.message = 'Zapisanie nowych danych wydarzenia się powiodło.';
      setTimeout(() => this.clearMessage(), 3000);
    },
    clearMessage () {
      this.message = '';
    },
  },
};
</script>
