<template>
  <div class="f-pb-1">
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
      type="email"
      :disabled="blockForm"
    />
    <a-input
      v-model="values.eventCode"
      placeholder="kod wydarzenia"
      type="email"
      :disabled="blockForm"
    />
    <a-button
      @click="signUp()"
      :disabled="blockForm"
    >
      {{ isSending ? 'Sprawdzamy...' : (message ? message : 'Dalej') }}
    </a-button>
  </div>
</template>

<script>
import AInput from 'atoms/input'
import AButton from 'atoms/button'
import { api } from 'api/index'

export default {
  name: 'o-form-sign-in',
  components: {
    AInput,
    AButton,
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
    setMessage (text) {
      return new Promise(resolve => {
        this.message = text
        setTimeout(() => {
          this.message = ''
          this.blockForm = false
          resolve()
        }, 2000)
      })
    },
    onSignUp () {
      this.setMessage('Konto utoworzono pomyślnie - kliknij w link aktywacyjny na swojej skrzynce mailowej')
        .then(() => {
          this.$router.push('/')
        })
      this.isSending = false
    },
    onError () {
      this.setMessage('Spróbuj ponownie...')
      this.isSending = false
    },
    onInvalidValues () {
      this.setMessage('Błędne dane')
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
