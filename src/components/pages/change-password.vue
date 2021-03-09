<template>
  <t-page>
    <div class="f-pt-1 f-pb-4">
      {{ $t('page.changePassword.content') }}
    </div>
    <o-form
      :is-send="formSend"
      :on-submit="changePassword"
    >
      <template slot="form">
        <m-field-set-password
          :disabled="blockForm"
          v-model="password"
          :labels="[$t('form.field.newPassword'), $t('form.field.reNewPassword')]"
        />
        <div class="f-text-center f-text-danger" v-text="message"/>
        <a-button-submit
          :disabled="blockForm"
          :is-sending="isSending"
        />
      </template>

      <template slot="response">
        <div class="f-py-2 f-text-bold">
          {{ $t('communicate.changePassword.success') }}
        </div>
        <a-button-primary @click="$router.push(ROUTES.signIn.path)">
          {{ $t('form.button.goToLogin') }}
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
import MFieldSetPassword from 'molecules/field/set-password';
import OForm from 'organisms/form';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'p-change-password',
  mixins: [mixins.form],
  components: {
    TPage,
    AButtonPrimary,
    OForm,
    MFieldSetPassword,
    AButtonSubmit,
  },
  data: () => ({
    password: '',
    blockForm: false,
    isSending: false,
    formSend: false,
    message: '',
  }),
  methods: {
    onChangePassword () {
      this.formSend = true;
      this.isSending = false;
    },
    changePassword () {
      this.isSending = true;
      this.blockForm = true;
      api.changePassword({
        password: this.password,
        key: this.$route.params.key,
      })
        .then(this.onChangePassword)
        .catch(this.onErrorOccurs);
    },
  },
};
</script>
