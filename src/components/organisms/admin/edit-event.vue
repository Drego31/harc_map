<template>
  <div class="f-flex f-flex-col f-flex-just-center">
    <o-form :on-submit="updateEvent">
      <m-input
          :disabled="blockForm"
          placeholder="Nazwa wydarzenia"
          v-model="values.name"
      />
      <m-input
          :disabled=true
          placeholder="Klucz wydarzenia"
          v-model="values.eventId"
      />
      <div class="f-text-center f-text-danger" v-text="message"/>
      <a-button-submit
          :disabled="blockForm"
          :is-sending="isSending"
          text="Zapisz"
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
  name: 'o-edit-event',
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
        name: '',
        eventId: '',
      },
      blockForm: false,
      isSending: false,
      message: '',
    };
  },
  created () {
    this.values.name = this.event.name;
    this.values.eventId = this.event.eventId;
  },
  computed: {
    ...mapGetters('event', ['event']),
  },
  methods: {
    updateEvent () {
      console.log(this.values);
          eventId,
          eventName,
          mapLongitude,
          mapLatitude,
          mapZoom;
      const editedEvent = {
        ...this.event,
        name: this.values.name,
      };
      console.log(editedEvent);
      api.updateEvent(editedEvent);
    },
  },
};
</script>
