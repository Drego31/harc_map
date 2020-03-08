<template>
  <div class="f-pb-1">
    <div v-if="!formSend">
      <m-input
        :disabled="blockForm"
        placeholder="E-mail"
        type="email"
        v-model="values.email"
      />
      <m-input
        :disabled="blockForm"
        placeholder="Hasło"
        type="password"
        v-model="values.password"
      />
      <m-input
        :disabled="blockForm"
        placeholder="Powtórz hasło"
        type="password"
        v-model="repeatedPassword"
      />
      <m-input
        :disabled="blockForm"
        placeholder="Nazwa patrolu"
        v-model="values.patrolName"
      />
      <m-input
        :disabled="blockForm"
        placeholder="Kod wydarzenia"
        v-model="values.eventId"
      />
      <a-button-submit
        :disabled="blockForm"
        :is-sending="isSending"
        :message="message"
        @click="signUp()"
      />
    </div>
    <p v-else>
      Link aktywacyjny został wysłany na wskazany adres e-mail: {{ values.email }}
    </p>
  </div>
</template>

<script>
import MInput from 'molecules/input';
import { api } from 'api/index';
import AButtonSubmit from 'atoms/button/submit';
import { mixins } from 'mixins/base';

export default {
  name: 'o-form-sign-in',
  mixins: [mixins.form],
  components: {
    AButtonSubmit,
    MInput,
  },
  data: () => ({
    values: {
      email: '',
      password: '',
      patrolName: '',
      eventId: '',
    },
    repeatedPassword: '',
    blockForm: false,
    isSending: false,
    message: '',
    formSend: false,
  }),
  methods: {
    checkValues () {
      const { email, password, patrolName } = this.values;
      const validEmail = email.length >= 5;
      const validPassword = password.length >= 5 && password === this.repeatedPassword;
      const validPatrolName = patrolName.length >= 3;
      // const validEventCode = eventCode === '111';
      return validEmail && validPassword && validPatrolName; /* && validEventCode */
    },
    onSignUp () {
      this.setMessage('Zostałeś zarejestrowany')
        .then(() => {
          this.formSend = true;
        });
      this.isSending = false;
    },
    signUp () {
      this.isSending = true;
      this.blockForm = true;
      if (this.checkValues()) {
        api.signUp(this.values)
          .then(this.onSignUp)
          .catch(this.onError);
      } else {
        this.onInvalidValues();
      }
    },
  },
};
</script>
