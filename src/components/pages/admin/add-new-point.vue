<template>
  <t-page class="f-flex f-flex-col">
    <o-form :on-submit="addPoint">
      <m-input
        :disabled="blockForm"
        :placeholder="$t('form.field.pointName')"
        v-model="values.pointName"
        :assist="$t('form.assist.fieldNotRequired')"
      >
      </m-input>
      <m-select
        :options="typeOptions"
        :placeholder="$t('form.field.pointName')"
        v-model="values.pointType"
      >
      </m-select>
      <m-field-date
        v-if="values.pointType === 'timeout'"
        :label="$t('form.field.pointDateAndExpirationTime')"
        v-model="values.pointExpirationTime"
        :disabled="blockForm"
      />
      <m-select
        :options="categoryOptions"
        :placeholder="$t('form.field.pointCategory')"
        v-model="values.pointCategory"
      >
      </m-select>

      <a-button-submit
        style="position: relative; top:70px"
        :disabled="blockForm || !hasPositionSet"
        :is-sending="isSending"
        :text="$t('form.button.save')"
      />
    </o-form>
    <a-button-secondary
      class="f-text-center"
      style="position: relative; top:-70px"
      @click="pushToMap">
      {{$t('form.button.setPointMapPosition')}}
    </a-button-secondary>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OForm from 'organisms/form';
import MInput from 'molecules/input';
import MSelect from 'molecules/select';
import MFieldDate from 'molecules/field/date';
import AButtonSecondary from 'atoms/button/secondary';
import AButtonSubmit from 'atoms/button/submit';
import { MACROS } from 'utils/macros';
import { mapGetters, mapMutations } from 'vuex';
import { mixins } from 'mixins/base';

export default {
  name: 'p-admin-add-new-point',
  mixins: [mixins.form],
  components: {
    TPage,
    MFieldDate,
    MSelect,
    MInput,
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
