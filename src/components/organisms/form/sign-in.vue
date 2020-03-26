<template>
  <o-form :on-submit="signIn">
    <m-input
      :disabled="blockForm"
      placeholder="E-mail"
      v-model="values.email"
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
import MInput from 'molecules/input';
import { api } from 'api/index';
import AButtonSubmit from 'atoms/button/submit';
import { mixins } from 'mixins/base';
import { ROUTES } from 'utils/macros/routes';
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
      email: '',
      password: '',
    },
    blockForm: false,
    isSending: false,
    message: '',
  }),
  methods: {
    onSignIn ({ eventId, collectedPointsIds, email, patrolName }) {
      this.$store.commit('event/setId', eventId);
      this.$store.commit('user/setEmail', email);
      this.$store.commit('user/setCollectedPointsIds', collectedPointsIds);
      this.$store.commit('user/setTeamName', patrolName);
      this.$store.dispatch('event/download')
        .then(() => {
          this.$router.push(ROUTES.home.path);
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
  },
};
</script>
