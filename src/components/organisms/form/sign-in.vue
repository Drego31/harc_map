<template>
  <div class="f-pb-1">
    <a-input
      v-model="values.email"
      placeholder="e-mail"
      :disabled="blockForm"
    />
    <a-input
      v-model="values.password"
      placeholder="hasło"
      type="password"
      :disabled="blockForm"
    />
    <a-button-submit
      :message="message"
      :disabled="blockForm"
      :is-sending="isSending"
      @click="signIn()"
    />
  </div>
</template>

<script>
import AInput from 'atoms/input'
import { api } from 'api/index'
import AButtonSubmit from 'atoms/button/submit'
import { mixins } from 'mixins/base'

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
    },
    blockForm: false,
    isSending: false,
    message: '',
  }),
  methods: {
    checkValues () {
      return this.values.email.length >= 5 && this.values.password.length >= 6
    },
    onSignIn ({ eventId, score, email, patrolName }) {
      this.setMessage('Zostałeś zalogowany!')
        .then(() => {
          this.$store.commit('event/setId', eventId)
          this.$store.commit('user/setEmail', email)
          this.$store.commit('user/setScore', score)
          this.$store.commit('user/setTeamName', patrolName)
          this.$router.push('/map')
        })
      this.isSending = false
    },
    signIn () {
      this.isSending = true
      this.blockForm = true
      if (this.checkValues()) {
        api.signIn(this.values)
          .then(this.onSignIn)
          .catch(this.onError)
      } else {
        this.onInvalidValues()
      }
    },
  },
}
</script>
