<template>
  <t-page>
    <o-form
      :is-send="formSend"
      :on-submit="signUp"
    >
      <template slot="form">
        <m-field-email
          v-model="values.user"
          :disabled="blockForm"
        />
        <m-field-set-password
          v-model="values.password"
          :disabled="blockForm"
        />
        <m-field-text
          :label="$t('form.field.userTeam')"
          :rules="rules.userTeam"
          v-model="values.userTeam"
          :disabled="blockForm"
          :assist="$t('form.assist.userTeam')"
        />
        <m-field-text
          :label="$t('form.field.eventId')"
          :rules="rules.eventId"
          v-model="values.eventId"
          :disabled="blockForm"
        />
        <a-button-submit
          :disabled="blockForm"
          :is-sending="isSending"
        />
      </template>

      <template slot="response">
        <div class="f-py-2">
          <div class="f-pb-2 f-bold">{{ $t('page.signUp.registrationDone') }}</div>
          {{ $t('page.signUp.linkHasBeenSent') }}
          <span class="f-bold">{{ values.user }}</span>
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
import { api } from 'api';
import { mixins } from 'mixins/base';
import AButtonSubmit from 'atoms/button/submit';
import MFieldEmail from 'molecules/field/email';
import MFieldSetPassword from 'molecules/field/set-password';
import MFieldText from 'molecules/field/text';
import OForm from 'organisms/form';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'p-sign-up',
  mixins: [mixins.form, mixins.validation],
  components: {
    TPage,
    AButtonPrimary,
    OForm,
    MFieldText,
    MFieldSetPassword,
    MFieldEmail,
    AButtonSubmit,
  },
  data: () => ({
    values: {
      user: '',
      password: '',
      userTeam: '',
      eventId: '',
    },
    blockForm: false,
    isSending: false,
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
        .catch(this.onErrorOccurs);
    },
  },
};
</script>
