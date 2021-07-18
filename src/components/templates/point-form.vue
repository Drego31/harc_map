<template>
  <t-page class="f-flex f-flex-col">
    <o-form :on-submit="onSubmit">
      <m-field-text
        disabled
        :label="$t('form.field.pointId')"
        v-model="values.pointId"
        :assist="$t('form.assist.pointId')"
      />
      <m-field-text
        :label="$t('form.field.pointName')"
        v-model="values.pointName"
        :rules="rulesForName"
        :assist="isPermanent ? $t('form.assist.fieldNotRequired') : ''"
        :disabled="blockForm"
      />
      <m-select
        :options="typeOptions"
        :placeholder="$t('form.field.pointType')"
        v-model="values.pointType"
        :disabled="blockForm"
      />
      <m-field-datetime
        v-if="isTimeout"
        :label="$t('form.field.pointDateAndAppearanceTime')"
        v-model="values.pointAppearanceTime"
        :rules="rules.required"
        :disabled="blockForm"
      />
      <m-field-datetime
        v-if="isTimeout"
        :label="$t('form.field.pointDateAndExpirationTime')"
        v-model="values.pointExpirationTime"
        :rules="rules.required"
        :disabled="blockForm"
      />
      <m-select
        v-if="isPermanent"
        :options="categoryOptions"
        :placeholder="$t('form.field.pointCategory')"
        v-model="values.pointCategory"
        :disabled="blockForm"
      />

      <a-button-secondary
        :disabled="blockForm"
        class="f-text-center f-mt-0"
        add-class="f-icon-inside"
        @click="pointPositionIsSetting = true"
      >
        <a-icon
          :name="hasSetPosition ? ICONS.check_box : ICONS.check_box_outline_blank"
          class="f-mr-1"
        />
        <div>{{ $t('form.button.setPointMapPosition') }}</div>
      </a-button-secondary>

      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
        :text="$t('form.button.save')"
      />
    </o-form>
    <o-float-container v-if="pointPositionIsSetting">
      <o-admin-set-new-point-position
        :point="values"
        @save="saveNewPosition"
        @cancel="pointPositionIsSetting = false"
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
import { MACROS } from 'utils/macros';
import { uCheck } from '@dbetka/utils';
import { mixins } from 'mixins/base';
import MFieldDatetime from 'molecules/field/datetime';
import MFieldText from 'molecules/field/text';
import { ErrorMessage } from 'utils/error-message';
import OFloatContainer from 'organisms/float-container';
import OAdminSetNewPointPosition from 'organisms/admin/set-point-position';
import { idUtils } from 'utils/id';

export default {
  name: 't-point-form',
  mixins: [mixins.form, mixins.validation],
  components: {
    OAdminSetNewPointPosition,
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
    return {
      values: {},
      typeOptions: [
        {
          label: this.$t('general.pointPermanent'),
          value: MACROS.pointType.permanent,
        }, {
          label: this.$t('general.pointTimeout'),
          value: MACROS.pointType.timeout,
        },
      ],
      categoryOptions: this.createCategoryOptions(),
      pointPositionIsSetting: false,
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
    this.restartValues();
  },
  computed: {
    rulesForName () {
      const rules = this.rules;
      return this.isTimeout ? `${rules.required}|${rules.name}` : rules.name;
    },
    isTimeout () {
      return this.values.pointType === MACROS.pointType.timeout;
    },
    isPermanent () {
      return this.values.pointType === MACROS.pointType.permanent;
    },
    hasSetPosition () {
      return uCheck.isNotNull(this.values.pointLatitude) && uCheck.isNotNull(this.values.pointLongitude);
    },
  },
  methods: {
    saveNewPosition (newPosition) {
      Object.assign(this.values, newPosition);
      this.pointPositionIsSetting = false;
    },
    createCategoryOptions () {
      return MACROS.pointCategory.map((category) =>
        ({
          label: this.categoryLabelFactory(category.categoryId, category.pointValue),
          value: category.categoryId,
        }),
      );
    },
    categoryLabelFactory (id, value) {
      const level = this.$t('general.pointCategoryLevel');
      const unit = this.$t('general.pointUnit');
      return `${id} ${level} - ${value} ${unit}`;
    },
    ensureValidDataByPointType () {
      if (this.values.pointType === MACROS.pointType.timeout) {
        this.values.pointCategory = 0;
      }
      if (this.values.pointType === MACROS.pointType.permanent) {
        this.values.pointExpirationTime = null;
        this.values.pointAppearanceTime = null;
      }
    },
    restartValues () {
      this.values = {
        pointId: idUtils.generateNewId(),
        pointName: '',
        pointCategory: MACROS.pointCategory[0].categoryId,
        pointType: MACROS.pointType.permanent,
        pointAppearanceTime: null,
        pointExpirationTime: null,
        pointLongitude: null,
        pointLatitude: null,
        pointCollectionTime: null,
      };
      Object.assign(this.values, this.defaultValues);
    },
    onSubmit () {
      this.blockForm = true;
      if (this.hasSetPosition === false) {
        this.onErrorOccurs(new ErrorMessage(this.$t('communicate.addPoint.positionIsRequired')));
        return;
      }
      this.ensureValidDataByPointType();
      this.onSave(this.values)
        .then(message => {
          this.restartValues();
          this.onSuccessOccurs(message);
        })
        .catch(this.onErrorOccurs);
    },
  },

};
</script>
