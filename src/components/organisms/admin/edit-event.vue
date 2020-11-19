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
      />
      <div class="f-text-center f-text-danger" v-text="message"/>
      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
        text="Zapisz"
      />
    </o-form>
    <a-button-secondary class="f-text-center" @click="$router.push(ROUTES.setMapPosition)" >
      Ustaw domyślną pozycję mapy
    </a-button-secondary>
  </div>
</template>

<script>
import MInput from 'molecules/input';
import AButtonSubmit from 'atoms/button/submit';
import OForm from 'organisms/form';
import { mixins } from 'mixins/base';
import { mapGetters, mapMutations } from 'vuex';
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
    ...mapMutations('event', ['setEvent']),
  },
  methods: {
    updateEvent () {
      const updatedEvent = {
        ...this.getEventBasicInformation,
        eventName: this.values.eventName,
      };
      api.updateEvent(updatedEvent)
        .then(api.getEventById)
        .then(this.setEvent)
        .catch(this.onErrorOccurs);
    },
  },
};
</script>
