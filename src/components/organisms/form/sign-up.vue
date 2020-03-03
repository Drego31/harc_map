<template>
  <div class="f-pb-1">
    <div v-if="!formSend">
      <a-input
        :disabled="blockForm"
        placeholder="e-mail"
        type="email"
        v-model="values.email"
      />
      <a-input
        :disabled="blockForm"
        placeholder="hasło"
        type="password"
        v-model="values.password"
      />
      <a-input
        :disabled="blockForm"
        placeholder="powtórz hasło"
        type="password"
        v-model="repeatedPassword"
      />
      <a-input
        :disabled="blockForm"
        placeholder="nazwa patrolu"
        v-model="values.patrolName"
      />
      <a-input
        :disabled="blockForm"
        placeholder="kod wydarzenia"
        v-model="values.eventCode"
      />
      <a-button-submit
        class="a-button f-primary"
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
import AInput from 'atoms/input';
import { api } from 'api/index';
import AButtonSubmit from 'atoms/button/submit';
import { mixins } from 'mixins/base';

export default {
  name: 'o-form-sign-in',
  mixins: [mixins.form],
  components: {
    AButtonSubmit,
    AInput,
  },
  data: () => ({
    values: {
      email: '',
      password: '',
      patrolName: '',
      eventCode: '',
    },
    repeatedPassword: '',
    blockForm: false,
    isSending: false,
    message: '',
    formSend: false,
  }),
  methods: {
    checkValues () {
      const { email, password, patrolName, eventCode } = this.values;
      const validEmail = email.length >= 5;
      const validPassword = password.length >= 5 && password === this.repeatedPassword;
      const validPatrolName = patrolName.length >= 3;
      const validEventCode = eventCode === '111';
      return validEmail && validPassword && validPatrolName && validEventCode;
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
