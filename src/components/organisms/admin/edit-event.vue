<template>
  <div class="f-flex f-flex-col f-flex-just-center">
    <o-form :on-submit="updateEvent">
      <m-input
        :disabled="blockForm"
        placeholder="Nazwa wydarzenia"
        v-model="values.eventName"
      />
      <m-input
        disabled
        placeholder="Klucz wydarzenia"
        v-model="values.eventId"
        assist="Klucz wydarzenia jest generowany automatycznie"
      />
      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
        text="Zapisz"
      />
      <div
        class="f-text-center"
        :class="[hasErrors ? 'f-text-danger' : 'f-text-primary']"
        v-text="message"
      />
    </o-form>
    <a-button-secondary class="f-text-center">
      Ustaw domyślną pozycję mapy
    </a-button-secondary>
  </div>
</template>

<script>
import MInput from 'molecules/input';
import AButtonSubmit from 'atoms/button/submit';
import OForm from 'organisms/form';
import { mixins } from 'mixins/base';
import { mapGetters } from 'vuex';
import AButtonSecondary from 'atoms/button/secondary';

export default {
  name: 'o-admin-edit-event',
  mixins: [mixins.form],
  components: {
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
      message: '',
    };
  },
  created () {
    this.values.eventName = this.event.eventName;
    this.values.eventId = this.event.eventId;
  },
  computed: {
    ...mapGetters('event', ['event', 'getEventBasicInformation']),
  },
  methods: {
    updateEvent () {
      const updatedEvent = {
        ...this.getEventBasicInformation,
        eventName: this.values.eventName,
      };
      api.updateEvent(updatedEvent)
        .then(api.getEventById)
        .then(eventData => this.$store.commit('event/setEvent', eventData))
        .then(this.onEventUpdate)
        .catch(this.onErrorOccurs);
    },
    onEventUpdate () {
      this.message = 'Zapisanie nowych danych wydarzenia powiodło się.';
      setTimeout(() => this.clearMessage(), 1500);
    },
    clearMessage () {
      this.message = '';
    },
  },
};
</script>
