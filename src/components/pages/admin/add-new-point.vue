<template>
  <t-page class="f-flex f-flex-col">
    <o-form :on-submit="onSubmit">
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

      <a-button-secondary
        class="f-text-center f-mt-0"
        @click="pointPositionIsSetting = true"
      >
        {{ $t('form.button.setPointMapPosition') }}
      </a-button-secondary>

      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
        :text="$t('form.button.save')"
      />
    </o-form>
    <o-float-container v-if="pointPositionIsSetting">
      <o-admin-set-new-point-position @close="pointPositionIsSetting = false"/>
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
import { mapGetters, mapMutations } from 'vuex';
import { mixins } from 'mixins/base';
import MFieldDatetime from 'molecules/field/datetime';
import MFieldText from 'molecules/field/text';
import { ErrorMessage } from 'utils/error-message';
import OFloatContainer from 'organisms/float-container';
import OAdminSetNewPointPosition from 'organisms/admin/set-point-position';

export default {
  name: 'p-admin-add-new-point',
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
      pointPositionIsSetting: false,
      blockForm: false,
      isSending: false,
      isServerError: false,
    };
  },
  created () {
    const pointId = this.$route.params.pointId;
    const firstVisitOrChangedPoint = this.isUpdateMode === false || pointId !== this.pointId;

    if (!pointId) {
      this.unsetUpdateMode();
    } else if (firstVisitOrChangedPoint) {
      this.setUpdateMode();
      const point = this.getPointById(pointId);
      this.setPointFullInformation(point);
    }
    this.updateFormData();
  },
  watch: {
    values: {
      handler (val) {
        if (val.pointCategory === 0 && this.isPermanent) {
          this.values.pointCategory = 1;
        }
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters('point', [
      'getPointBasicInformation', 'point', 'hasPositionSet', 'isUpdateMode', 'pointId',
    ]),
    ...mapGetters('event', ['getPointById']),
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
      'setPointBasicInformation', 'setPointFullInformation', 'resetPointState', 'setUpdateMode', 'unsetUpdateMode',
    ]),

    updateFormData () {
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
      this.$router.push({
        name: this.ROUTES.setPointPosition.name,
        params: { pointId: this.pointId },
      });
    },

    onSubmit () {
      if (!this.hasPositionSet) {
        this.onErrorOccurs(new ErrorMessage(this.$t('communicate.addPoint.positionIsRequired')));
        return;
      }
      this.ensureValidDataByPointType();
      this.setPointBasicInformation(this.values);
      this.isUpdateMode ? this.editPoint() : this.addPoint();
    },
    addPoint () {
      this.$store.dispatch('event/addPoint', this.point)
        .then(this.onAdd)
        .catch(this.onErrorOccurs);
    },
    onAdd () {
      this.onSuccessOccurs(this.$t('communicate.addPoint.success'));
      this.resetPointState();
      this.updateFormData();
    },
    editPoint () {
      this.$store.dispatch('event/editPoint', this.point)
        .then(this.onEdit)
        .catch(this.onErrorOccurs);
    },
    onEdit () {
      this.resetPointState();
      this.$router.push(this.ROUTES.map.path);
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
  },

};
</script>
