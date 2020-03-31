<template>
  <o-form :on-submit="collectPoint">
    <m-field-text
      label="Kod punktu"
      :rules="rules.pointId"
      v-model="collectedPointId"
      :disabled="blockForm"
    />
    <div class="f-text-center f-text-danger" v-text="message"/>
    <a-button-submit
      :disabled="blockForm"
      :is-sending="isSending"
    />
  </o-form>
</template>

<script>
import { mapManager } from 'utils/map-manager';
import { mapGetters } from 'vuex';
import { ROUTES } from 'utils/macros/routes';
import { mixins } from 'mixins/base';
import OForm from 'organisms/form';
import MFieldText from 'molecules/field/text';
import AButtonSubmit from 'atoms/button/submit';

export default {
  name: 'o-form-collect-point',
  mixins: [mixins.form, mixins.validation],
  components: {
    AButtonSubmit,
    MFieldText,
    OForm,
  },
  data: () => ({
    collectedPointId: '',
    blockForm: false,
    isSending: false,
    message: '',
  }),
  computed: {
    ...mapGetters('user', [
      'collectedPointsIds',
    ]),
  },
  methods: {
    onCollectPoint () {
      this.isSending = false;
      this.blockForm = false;
      this.$store.commit('user/setValueChanged', true);
      this.$router.push(ROUTES.start.path);
    },
    collectPoint () {
      const pointId = this.collectedPointId;
      mapManager.collectPoint(pointId)
        .then(this.onCollectPoint)
        .catch(this.onErrorOccurs);
    },
  },
};
</script>
