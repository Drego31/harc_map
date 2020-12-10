<template>
  <o-form :on-submit="collectPoint">
    <m-field-text
      :label="$t('form.field.pointId')"
      :rules="rules.pointId"
      v-model="collectedPointId"
      :disabled="blockForm"
    />
    <div class="f-text-danger" v-text="message"/>
    <a-button-submit
      :disabled="blockForm"
      :is-sending="isSending"
    />
  </o-form>
</template>

<script>
import { mapGetters } from 'vuex';
import { ROUTES } from 'utils/macros/routes';
import { mixins } from 'mixins/base';
import OForm from 'organisms/form';
import MFieldText from 'molecules/field/text';
import AButtonSubmit from 'atoms/button/submit';
import { ICONS } from 'src/__jscash__/icons-names-list';
import { translator } from 'src/dictionary';

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
      this.$store.dispatch('popup/openTemporary', {
        messages: [
          translator.t('communicate.collectPoint.congratulation'),
          translator.t('communicate.collectPoint.youCollectedPoint'),
        ],
        icon: ICONS.check_circle_outline,
      })
        .then(() => {
          this.isSending = false;
          this.blockForm = false;
          this.$router.push(ROUTES.start.path);
        });
    },
    collectPoint () {
      const pointId = this.collectedPointId;
      this.$store.dispatch('event/collectPoint', pointId)
        .then(this.onCollectPoint)
        .catch(this.onErrorOccurs);
    },
  },
};
</script>
