<template>
  <t-page class="f-flex f-flex-col">
    <o-form :on-submit="onSubmit">
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

      <a-button-secondary
        class="f-text-center f-mt-0"
        @click="eventPositionIsSetting = true"
      >
        {{ $t('form.button.setPointMapPosition') }}
      </a-button-secondary>

      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
        :text="$t('form.button.save')"
      />
    </o-form>
    <o-float-container v-if="eventPositionIsSetting">
      <o-admin-set-map-position
        :point="values"
        @save="saveNewPosition"
      />
    </o-float-container>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OForm from 'organisms/form';
import MSelect from 'molecules/select';
import AButtonSecondary from 'atoms/button/secondary';
import AButtonSubmit from 'atoms/button/submit';
import { uCheck } from '@dbetka/utils';
import { mixins } from 'mixins/base';
import MFieldDatetime from 'molecules/field/datetime';
import MFieldText from 'molecules/field/text';
import { ErrorMessage } from 'utils/error-message';
import OFloatContainer from 'organisms/float-container';
import OAdminSetMapPosition from 'organisms/admin/set-map-position';

export default {
  name: 't-event-form',
  mixins: [mixins.form, mixins.validation],
  components: {
    OAdminSetMapPosition,
    OFloatContainer,
    MFieldText,
    MFieldDatetime,
    TPage,
    MSelect,
    OForm,
    AButtonSecondary,
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
        mapLatitude: null,
        mapLongitude: null,
      },
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
      eventPositionIsSetting: false,
      blockForm: false,
      isSending: false,
      isServerError: false,
    };
  },
  props: {
    defaultValues: {
      type: Object,
      default: () => ({}),
    },
    onSave: {
      type: Function,
      required: true,
    },
  },
  mounted () {
    Object.assign(this.values, this.defaultValues);
  },
  computed: {
    hasSetPosition () {
      return uCheck.isDefined(this.values.mapLatitude) && uCheck.isDefined(this.values.mapLongitude);
    },
  },
  methods: {
    saveNewPosition (newPosition) {
      Object.assign(this.values, newPosition);
      this.eventPositionIsSetting = false;
    },
    onSubmit () {
      if (this.hasSetPosition === false) {
        this.onErrorOccurs(new ErrorMessage(this.$t('communicate.editEvent.positionIsRequired')));
        return;
      }
      this.onSave(this.values)
        .then(() => this.onSuccessOccurs())
        .catch(this.onErrorOccurs);
    },
  },

};
</script>
