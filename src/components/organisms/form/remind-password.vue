<template>
  <o-form
    :is-send="formSend"
    :on-submit="remindPassword"
  >
    <template slot="form">
      <m-field-email
        :disabled="blockForm"
        v-model="user"
      />
      <div class="f-text-center f-text-danger" v-text="message"/>
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
        {{ $t('page.remindPassword.startPage') }}
      </a-button-primary>
    </template>
  </o-form>
</template>

<script>
import AButtonSubmit from 'atoms/button/submit';
import { api } from 'api/index';
import { mixins } from 'mixins/base';
import OForm from 'organisms/form';
import MFieldEmail from 'molecules/field/email';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'o-form-remind-password',
  mixins: [mixins.form],
  components: {
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
    message: '',
  }),
  methods: {
    remindPassword () {
      this.isSending = true;
      this.blockForm = true;
      api.remindPassword({ user: this.user })
        .then(this.onRemindPassword)
        .catch(this.onErrorOccurs);
    },
    onRemindPassword () {
      this.formSend = true;
      this.isSending = false;
    },
  },
};
</script>
