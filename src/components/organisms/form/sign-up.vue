<template>
  <div class="f-pb-1">
    <validation-observer v-slot="{ handleSubmit }">
      <div v-if="!formSend" class="f-flex f-flex-col">
        <m-field-email
          v-model="values.email"
          :disabled="blockForm"
        />
        <m-field-set-password
          v-model="values.password"
          :disabled="blockForm"
        />
        <m-field-text
          label="Nazwa patrolu"
          rules="required|min:4"
          v-model="values.patrolName"
          :disabled="blockForm"
        />
        <m-field-text
          label="Kod wydarzenia"
          rules="required|length:4"
          v-model="values.eventId"
          :disabled="blockForm"
        />
        <a-button-submit
          :disabled="blockForm"
          :is-sending="isSending"
          :message="message"
          @click="handleSubmit(signUp)"
        />
      </div>
      <div v-else>
        <div class="f-pb-2 f-bold">Rejestracja przebiegła pomyślnie!</div>
        <div>
          Link aktywacyjny został wysłany na wskazany adres e-mail:
          <span class="f-bold">{{ values.email }}</span>
        </div>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { api } from 'api/index';
import AButtonSubmit from 'atoms/button/submit';
import { mixins } from 'mixins/base';
import MFieldEmail from 'molecules/field/email';
import MFieldSetPassword from 'molecules/field/set-password';
import MFieldText from 'molecules/field/text';

export default {
  name: 'o-form-sign-in',
  mixins: [mixins.form],
  components: {
    MFieldText,
    MFieldSetPassword,
    MFieldEmail,
    AButtonSubmit,
  },
  data: () => ({
    values: {
      email: '',
      password: '',
      patrolName: '',
      eventId: '',
    },
    blockForm: false,
    isSending: false,
    message: '',
    formSend: false,
  }),
  methods: {
    onSignUp () {
      this.formSend = true;
      this.isSending = false;
      this.blockForm = false;
    },
    signUp () {
      this.isSending = true;
      this.blockForm = true;
      api.signUp(this.values)
        .then(this.onSignUp)
        .catch(this.onError);
    },
  },
};
</script>
