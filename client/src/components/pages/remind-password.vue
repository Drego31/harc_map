<template>
  <t-page>
    <div class="f-pt-1 f-pb-4">
      {{ $t('page.remindPassword.content') }}
    </div>
    <o-form
      :is-send="formSend"
      :on-submit="remindPassword"
    >
      <template slot="form">
        <m-field-email
          :disabled="blockForm"
          v-model="user"
        />
        <a-button-submit
          :disabled="blockForm"
          :is-sending="isSending"
        />
      </template>

      <template slot="response">
        <div class="f-py-2 f-text-bold">
          {{ $t('page.remindPassword.success') }}
        </div>
        <a-button-primary @click="$router.push(ROUTES.welcome.path)">
          {{ $t('general.backToStart') }}
        </a-button-primary>
      </template>
    </o-form>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonSubmit from 'atoms/button/submit';
import { api } from 'api';
import { mixins } from 'mixins/base';
import OForm from 'organisms/form';
import MFieldEmail from 'molecules/field/email';
import AButtonPrimary from 'atoms/button/primary';
import validateCodes from 'validateCodes';

export default {
  name: 'p-remind-password',
  mixins: [mixins.form],
  components: {
    TPage,
    AButtonPrimary,
    MFieldEmail,
    OForm,
    AButtonSubmit,
  },
  data: () => ({
    user: '',
    blockForm: false,
    isSending: false,
    formSend: false,
  }),
  methods: {
    remindPassword () {
      this.isSending = true;
      this.blockForm = true;
      api.remindPassword({ user: this.user })
        .then(this.onRemindPassword)
        .catch(error => {
          if (error.code !== validateCodes.DATABASE_NO_RESULT_ERROR) {
            this.onErrorOccurs(error);
          } else {
            this.onRemindPassword();
          }
        });
    },
    onRemindPassword () {
      this.formSend = true;
      this.isSending = false;
    },
  },
};
</script>
