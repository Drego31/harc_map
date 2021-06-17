<template>
  <t-page>
    <div class="f-pt-1 f-pb-4">
      {{ $t('page.collectPoint.content') }}
    </div>
    <o-form :on-submit="collectPoint">
      <m-field-text
        :label="$t('form.field.pointId')"
        :rules="rules.pointId"
        v-model="collectedPointId"
        :disabled="blockForm"
      />
      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
      />
    </o-form>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import { ROUTES } from 'utils/macros/routes';
import { mixins } from 'mixins/base';
import OForm from 'organisms/form';
import MFieldText from 'molecules/field/text';
import AButtonSubmit from 'atoms/button/submit';
import { ICONS } from '@dbetka/vue-material-icons';
import { translator } from 'src/dictionary';

export default {
  name: 'p-collect-point',
  mixins: [mixins.form, mixins.validation],
  components: {
    TPage,
    AButtonSubmit,
    MFieldText,
    OForm,
  },
  data: () => ({
    collectedPointId: '',
    blockForm: false,
    isSending: false,
  }),
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
          this.$router.push(ROUTES.map.path);
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
