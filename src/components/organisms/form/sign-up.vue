<template>
  <div class="f-pb-1">

    <div v-if="!formSend" class="f-flex f-flex-col">
      <ValidationProvider
        name="E-mail"
        rules="required|email"
        v-slot="{ errors }"
      >
        <m-input
          :disabled="blockForm"
          placeholder="E-mail"
          type="email"
          :error="errors.length > 0"
          :assist="errors[0]"
          v-model.trim="values.email"
        />
      </ValidationProvider>
      <ValidationObserver>
        <ValidationProvider
          name="Hasło"
          rules="required|min:8|max:64|hasNumber|hasCapitalize"
          v-slot="{ errors }"
          vid="password"
        >
          <m-input
            :disabled="blockForm"
            placeholder="Hasło"
            type="password"
            :error="errors.length > 0"
            :assist="errors[0]"
            v-model="values.password"
          />
        </ValidationProvider>
        <ValidationProvider
          name="Hasło"
          rules="confirmed:password"
          v-slot="{ errors }"
        >
          <m-input
            :disabled="blockForm"
            placeholder="Powtórz hasło"
            type="password"
            :error="errors.length > 0"
            :assist="errors[0]"
            v-model="repeatedPassword"
          />
        </ValidationProvider>
      </ValidationObserver>
      <ValidationProvider
        name="E-mail"
        rules="required"
        v-slot="{ errors }"
      >
        <m-input
          :disabled="blockForm"
          placeholder="Nazwa patrolu"
          :error="errors.length > 0"
          :assist="errors[0]"
          v-model="values.patrolName"
        />
      </ValidationProvider>
      <ValidationProvider
        name="E-mail"
        rules="required"
        v-slot="{ errors }"
      >
        <m-input
          :disabled="blockForm"
          placeholder="Kod wydarzenia"
          :error="errors.length > 0"
          :assist="errors[0]"
          v-model="values.eventId"
        />
      </ValidationProvider>
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
