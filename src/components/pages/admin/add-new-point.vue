<template>
  <t-page>
    <o-form :on-submit="addPoint">
      <m-input
        :disabled="blockForm"
        placeholder="Nazwa punktu"
        v-model="values.pointName"
        assist="Pole jest nieobowiązkowe"
      >
      </m-input>
      <m-select
        :options="typeOptions"
        placeholder="Typ punktu"
        v-model="values.pointType"
      >
      </m-select>
      <m-field-date
        v-if="values.pointType === 'timeout'"
        label="Data i czas wygaśniecia punktu"
        v-model="values.pointExpirationTime"
        :disabled="blockForm"
      />
      <m-select
        :options="categoryOptions"
        placeholder="Kategoria punktu"
        v-model="values.pointCategory"
      >
      </m-select>

      <a-button-submit
        :disabled="blockForm /*|| hasMapPosition === false*/"
        :is-sending="isSending"
        text="Zapisz"
      />
    </o-form>
    <a-button-secondary class="f-text-center" @click="pushToMap">
      Ustaw lokalizację punktu
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

export default {
  name: 'p-admin-add-new-point',
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
          label: 'Do zebrania',
          value: MACROS.pointType.permanent,
        }, {
          label: 'Czasowy',
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

  methods: {
    updateBasicData () {
      this.values = { ...this.$store.getters['point/getPointBasicInformation'] };
    },

    createCategoryOptions () {
      return MACROS.pointCategory.map((category) =>
        ({
          label: `${category.categoryId} poziom - ${category.pointValue} pkt`,
          value: category.categoryId,
        }),
      );
    },

    pushToMap () {
      this.$store.commit('point/setBaseProperty', this.values);
      this.$router.push(this.ROUTES.setNewPointPosition.path);
    },

    addPoint () {
      this.$store.commit('point/setBaseProperty', this.values);
      this.$store.dispatch('event/addPoint', this.$store.getters['point/point'])
        .then(this.onSuccess);
    },
    onSuccess () {
      this.message = 'Zapisanie danych punktu się powiodło.';
      this.$store.commit('point/resetState');
      this.updateBasicData();
      setTimeout(() => this.clearMessage(), 3000);
    },
    clearMessage () {
      this.message = '';
    },
  },
};
</script>
