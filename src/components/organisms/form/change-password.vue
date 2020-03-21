<template>
  <o-form :is-send="formSend" :on-submit="changePassword">
    <template slot="form">
      <m-field-set-password
        :disabled="blockForm"
        v-model="password"
        :labels="['Wprowadź nowe hasło', 'Powtórz nowe hasło']"
      />
      <div class="f-text-center f-text-danger" v-text="message"/>
      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
      />
    </template>

    <template slot="response">
      <span class="f-text-bold">Twoje hasło zostało zmienione!</span>
    </template>
  </o-form>
</template>

<script>
import AButtonSubmit from 'atoms/button/submit';
import { api } from 'api/index';
import { mixins } from 'mixins/base';
import MFieldSetPassword from 'molecules/field/set-password';
import OForm from 'organisms/form';

export default {
  name: 'o-form-change-password',
  mixins: [mixins.form],
  components: {
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
      api.changePassword(this.password)
        .then(this.onChangePassword)
        .catch(this.onErrorOccurs);
    },
  },
};
</script>
