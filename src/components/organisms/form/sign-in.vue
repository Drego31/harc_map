<template>
  <div class="f-pb-1 f-flex f-flex-col">
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
    <a-button-submit
      :disabled="blockForm"
      :is-sending="isSending"
      :message="message"
      @click="signIn()"
    />
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
    },
    blockForm: false,
    isSending: false,
    message: '',
  }),
  methods: {
    checkValues () {
      return this.values.email.length >= 5 && this.values.password.length >= 6;
    },
    onSignIn ({ eventId, collectedPointsIds, email, patrolName }) {
      this.$store.commit('event/setId', eventId);
      this.$store.commit('user/setEmail', email);
      this.$store.commit('user/setCollectedPointsIds', collectedPointsIds);
      this.$store.commit('user/setTeamName', patrolName);
      this.$store.dispatch('event/download')
        .then(() => {
          this.$router.push('/home');
          this.isSending = false;
        });
    },
    signIn () {
      this.isSending = true;
      this.blockForm = true;
      if (this.checkValues()) {
        api.signIn(this.values)
          .then(this.onSignIn)
          .catch(this.onError);
      } else {
        this.onInvalidValues();
      }
    },
  },
};
</script>
