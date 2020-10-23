<template>
  <o-form :on-submit="signIn">
    <m-input
      :disabled="blockForm"
      placeholder="E-mail"
      v-model="values.user"
    />
    <m-input
      :disabled="blockForm"
      placeholder="Hasło"
      type="password"
      v-model="values.password"
    />
    <div class="f-text-center f-text-danger" v-text="message"/>
    <a-button-submit
      :disabled="blockForm"
      :is-sending="isSending"
    />
  </o-form>
</template>

<script>
import { api } from 'api/index';
import { mixins } from 'mixins/base';
import { ROUTES } from 'utils/macros/routes';
import { uPromise } from '@dbetka/utils';
import MInput from 'molecules/input';
import AButtonSubmit from 'atoms/button/submit';
import OForm from 'organisms/form';

export default {
  name: 'o-form-sign-in',
  mixins: [mixins.form],
  components: {
    OForm,
    AButtonSubmit,
    MInput,
  },
  data: () => ({
    values: {
      user: '',
      password: '',
    },
    blockForm: false,
    isSending: false,
    message: '',
  }),
  mounted () {
    if (PRODUCTION === false) {
      this.signInAutomatically();
    }
  },
  methods: {
    onSignIn (data) {
      this.$store.dispatch('user/signIn', data)
        .then(() => {
          this.$router.push(ROUTES.start.path);
          this.isSending = false;
          this.blockForm = false;
        });
    },
    signIn () {
      this.isSending = true;
      this.blockForm = true;
      api.signIn(this.values)
        .then(this.onSignIn)
        .catch(this.onErrorOccurs);
    },
    signInAutomatically () {
      this.isSending = true;
      this.blockForm = true;
      this.values.user = USER;
      this.values.password = PASSWORD;
      uPromise.timeout(500)
        .then(() => this.signIn());
    },
  },
};
</script>
