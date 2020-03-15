<template>
  <div class="f-flex f-flex-col">
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
    <m-textarea
      placeholder="Blok tekstu"
      v-model="values.email"
    />
    <m-select
      placeholder="Wydarzenie"
      v-model="values.eventId"
      :options="[{label:'RTL trasa HS', value: '1234'}, {label:'RTL trasa W', value: '4321'}]"
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
import { ROUTES } from 'utils/macros/routes';
import MSelect from 'molecules/select';
import MTextarea from 'molecules/textarea';

export default {
  name: 'o-form-sign-in',
  mixins: [mixins.form],
  components: {
    MTextarea,
    MSelect,
    AButtonSubmit,
    MInput,
  },
  data: () => ({
    values: {
      email: '',
      password: '',
      eventId: '',
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
          this.$router.push(ROUTES.home.path);
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
