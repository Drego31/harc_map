<template>
  <div class="f-pb-1">
    <div v-if="!formSend">
      <a-input
        v-model="values.email"
        placeholder="e-mail"
        type="email"
        :disabled="blockForm"
      />
      <a-input
        v-model="values.password"
        placeholder="hasło"
        type="password"
        :disabled="blockForm"
      />
      <a-input
        v-model="repeatedPassword"
        placeholder="powtórz hasło"
        type="password"
        :disabled="blockForm"
      />
      <a-input
        v-model="values.patrolName"
        placeholder="nazwa patrolu"
        :disabled="blockForm"
      />
      <a-input
        v-model="values.eventCode"
        placeholder="kod wydarzenia"
        :disabled="blockForm"
      />
      <a-button-submit
        :message="message"
        :disabled="blockForm"
        :is-sending="isSending"
        @click="signUp()"
      />
    </div>
    <p v-else>
      Link aktywacyjny został wysłany na wskazany adres e-mail: {{values.email}}
    </p>
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
      const { email, password, patrolName, eventCode } = this.values
      const validEmail = email.length >= 5
      const validPassword = password.length >= 5 && password === this.repeatedPassword
      const validPatrolName = patrolName.length >= 3
      const validEventCode = eventCode === '111'
      return validEmail && validPassword && validPatrolName && validEventCode
    },
    onSignUp () {
      this.setMessage('Zostałeś zarejestrowany')
        .then(() => {
          this.formSend = true
        })
      this.isSending = false
    },
    signUp () {
      this.isSending = true
      this.blockForm = true
      if (this.checkValues()) {
        api.signUp(this.values)
          .then(this.onSignUp)
          .catch(this.onError)
      } else {
        this.onInvalidValues()
      }
    },
  },
}
</script>
