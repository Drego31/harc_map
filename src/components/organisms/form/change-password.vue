<template>
  <div class="f-pb-1">
    <div v-if="!formSend" class ="f-flex f-flex-col" >
      <m-input
        :disabled="blockForm"
        placeholder="Wprowadź nowe hasło"
        v-model="password"
        type="password"
      />
      <m-input
        :disabled="blockForm"
        placeholder="Powtórz nowe hasło"
        v-model="repeatedPassword"
        type="password"
      />
      <a-button-submit
        class ="f-primary"
        :disabled="blockForm"
        :is-sending="isSending"
        :message="message"
        @click="changePassword()"
      />
    </div>
    <p v-else>Twoje hasło zostało pomyślnie zmienione</p>
  </div>
</template>

<script>
import AButtonSubmit from 'atoms/button/submit';
import MInput from 'molecules/input';
import { api } from 'api/index';
import { mixins } from 'mixins/base';

export default {
  name: 'o-form-change-password',
  mixins: [mixins.form],
  components: {
    AButtonSubmit,
    MInput,
  },
  data: () => ({
    password: '',
    repeatedPassword: '',
    blockForm: false,
    isSending: false,
    message: '',
    formSend: false,
  }),
  methods: {
    checkValues () {
      return this.password.length >= 5 && this.password === this.repeatedPassword;
    },
    changePassword () {
      this.isSending = true;
      this.blockForm = true;
      if (this.checkValues()) {
        api.changePassword(this.password)
          .then(this.onChangePassword)
          .catch(this.onError);
      } else {
        this.onInvalidValues();
      }
    },
    onChangePassword () {
      this.setMessage('Zakończono pomyślnie!')
        .then(() => {
          this.formSend = true;
        });
      this.isSending = false;
    },
  },
};
</script>
