<template>
  <div class="f-pb-1">
    <div v-if="!formSend" class ="f-flex f-flex-col" >
      <m-input
        :disabled="blockForm"
        placeholder="E-mail"
        v-model="email"
      />
      <a-button-submit
        class="f-primary"
        :disabled="blockForm"
        :is-sending="isSending"
        :message="message"
        @click="remindPassword()"
      />
    </div>
    <p v-else>Link do odzyskania hasła wysłano na podany email.</p>
  </div>
</template>

<script>
import AButtonSubmit from 'atoms/button/submit';
import MInput from 'molecules/input';
import { api } from 'api/index';
import { mixins } from 'mixins/base';

export default {
  name: 'o-form-remind-password',
  mixins: [mixins.form],
  components: {
    AButtonSubmit,
    MInput,
  },
  data: () => ({
    email: '',
    blockForm: false,
    isSending: false,
    message: '',
    formSend: false,
  }),
  methods: {
    checkValues () {
      return this.email.length >= 6 && this.email.includes('@');
    },
    remindPassword () {
      this.isSending = true;
      this.blockForm = true;
      if (this.checkValues()) {
        api.remindPassword(this.email)
          .then(this.onRemindPassword)
          .catch(this.onError);
      } else {
        this.onInvalidValues();
      }
    },
    onRemindPassword () {
      this.setMessage('Zakończono pomyślnie!')
        .then(() => {
          this.formSend = true;
        });
      this.isSending = false;
    },
  },
};
</script>
