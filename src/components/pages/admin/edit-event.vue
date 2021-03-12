<template>
  <t-page>
    <o-form :on-submit="updateEvent">
      <m-field-text
        :disabled="blockForm"
        :label="$t('form.field.eventName')"
        v-model="values.eventName"
        rules="max:45"
      />
      <m-field-text
        disabled
        :label="$t('form.field.eventId')"
        v-model="values.eventId"
        :assist="$t('form.assist.eventId')"
      />
      <m-select
        :options="options"
        :placeholder="$t('form.field.mapRefreshTime')"
        v-model="values.mapRefreshTime"
      />
      <m-field-datetime
        :label="$t('form.field.eventStartDate')"
        v-model="values.eventStartDate"
        :rules="rules.date"
      />
      <m-field-datetime
        :label="$t('form.field.eventEndDate')"
        v-model="values.eventEndDate"
        :rules="rules.date"
      />
      <a-button-secondary class="f-mt-0" @click="$router.push(ROUTES.setMapPosition)">
        {{ $t('form.button.setDefaultMapPositionAndZoom') }}
      </a-button-secondary>
      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
        :text="$t('form.button.save')"
      />
    </o-form>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonSubmit from 'atoms/button/submit';
import OForm from 'organisms/form';
import { mixins } from 'mixins/base';
import { mapGetters } from 'vuex';
import AButtonSecondary from 'atoms/button/secondary';
import MSelect from 'molecules/select';
import MFieldDatetime from 'molecules/field/datetime';
import MFieldText from 'molecules/field/text';

export default {
  name: 'p-admin-edit-event',
  mixins: [mixins.form, mixins.validation],
  components: {
    MFieldText,
    MFieldDatetime,
    MSelect,
    TPage,
    AButtonSecondary,
    OForm,
    AButtonSubmit,
  },
  data () {
    const minute = 60;
    return {
      values: {
        eventName: '',
        eventId: '',
        mapRefreshTime: 60,
        eventStartDate: null,
        eventEndDate: null,
      },
      blockForm: false,
      isSending: false,
      isServerError: false,
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
    this.values.eventStartDate = this.event.eventStartDate;
    this.values.eventEndDate = this.event.eventEndDate;
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
        eventStartDate: this.values.eventStartDate,
        eventEndDate: this.values.eventEndDate,
      };
      this.$store.dispatch('event/updateEvent', updatedEvent)
        .then(this.onSuccessOccurs)
        .catch(this.onErrorOccurs);
    },
  },
};
</script>
