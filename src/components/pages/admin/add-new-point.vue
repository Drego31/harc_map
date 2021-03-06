<template>
  <t-page class="f-flex f-flex-col">
    <o-form :on-submit="addPoint">
      <m-field-text
        :disabled="blockForm"
        :label="$t('form.field.pointName')"
        v-model="values.pointName"
        :rules="rulesForName"
        :assist="isPermanent ? $t('form.assist.fieldNotRequired') : ''"
      />
      <m-select
        :options="typeOptions"
        :placeholder="$t('form.field.pointName')"
        v-model="values.pointType"
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
      />

      <div
        class="f-text-center f-relative"
        style="top:160px"
        :class="[isServerError ? 'f-text-danger' : 'f-text-primary']"
        v-text="message"
      />

      <a-button-secondary
        class="f-text-center f-mt-0"
        @click="pushToMap">
        {{ $t('form.button.setPointMapPosition') }}
      </a-button-secondary>

      <a-button-submit
        :disabled="blockForm || !hasPositionSet"
        :is-sending="isSending"
        :text="$t('form.button.save')"
      />
    </o-form>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OForm from 'organisms/form';
import MSelect from 'molecules/select';
import AButtonSecondary from 'atoms/button/secondary';
import AButtonSubmit from 'atoms/button/submit';
import { MACROS } from 'utils/macros';
import { mapGetters, mapMutations } from 'vuex';
import { mixins } from 'mixins/base';
import MFieldDatetime from 'molecules/field/datetime';
import MFieldText from 'molecules/field/text';

export default {
  name: 'p-admin-add-new-point',
  mixins: [mixins.form, mixins.validation],
  components: {
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
      values: {
        pointName: '',
        pointCategory: 1,
        pointType: 1,
        pointAppearanceTime: null,
        pointExpirationTime: null,
      },
      typeOptions: [
        {
          label: this.$t('general.pointPermanent'),
          value: MACROS.pointType.permanent,
        }, {
          label: this.$t('general.pointTemporary'),
          value: MACROS.pointType.timeout,
        },
      ],
      categoryOptions: this.createCategoryOptions(),
      blockForm: false,
      isSending: false,
      isServerError: false,
      message: '',
    };
  },
  created () {
    this.updateBasicData();
  },
  computed: {
    ...mapGetters('point', [
      'getPointBasicInformation', 'point', 'hasPositionSet',
    ]),
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
  },
  methods: {
    ...mapMutations('point', [
      'setPointBasicInformation', 'resetPointState',
    ]),

    updateBasicData () {
      this.values = { ...this.getPointBasicInformation };
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
    pushToMap () {
      this.setPointBasicInformation(this.values);
      this.$router.push(this.ROUTES.setNewPointPosition.path);
    },

    addPoint () {
      if (this.values.pointType === MACROS.pointType.timeout) {
        this.values.pointCategory = 0;
      }
      this.setPointBasicInformation(this.values);
      this.$store.dispatch('event/addPoint', this.point)
        .then(this.onAddPoint)
        .catch(this.onErrorOccurs);
    },
    onAddPoint () {
      this.isServerError = false;
      this.message = this.$t('communicate.addPoint.success');
      this.resetForm();
      setTimeout(() => this.clearMessage(), 3000);
    },
    clearMessage () {
      this.message = '';
    },
    resetForm () {
      this.resetPointState();
      this.updateBasicData();
    },
  },
};
</script>
