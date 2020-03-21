<template>
  <o-form
    :is-send="formSend"
    :on-submit="signUp"
  >
    <template slot="form">
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
        :rules="rules.userTeam"
        v-model="values.patrolName"
        :disabled="blockForm"
      />
      <m-field-text
        label="Kod wydarzenia"
        :rules="rules.eventId"
        v-model="values.eventId"
        :disabled="blockForm"
      />
      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
        :message="message"
      />
    </template>

    <template slot="response">
      <div class="f-py-2">
        <div class="f-pb-2 f-bold">Rejestracja przebiegła pomyślnie!</div>
        Link aktywacyjny został wysłany na wskazany adres e-mail:
        <span class="f-bold">{{ values.email }}</span>
      </div>
      <a-button-primary @click="$router.push(ROUTES.signIn.path)">
        Przejdź do logowania
      </a-button-primary>
    </template>
  </o-form>
</template>

<script>
import { api } from 'api/index';
import { mixins } from 'mixins/base';
import AButtonSubmit from 'atoms/button/submit';
import MFieldEmail from 'molecules/field/email';
import MFieldSetPassword from 'molecules/field/set-password';
import MFieldText from 'molecules/field/text';
import OForm from 'organisms/form';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'o-form-sign-in',
  mixins: [mixins.form, mixins.validation],
  components: {
    AButtonPrimary,
    OForm,
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
