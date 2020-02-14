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
    <a-button
      @click="signIn()"
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
    AButton,
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
    setMessage (text) {
      return new Promise((resolve) => {
        this.message = text
        setTimeout(() => {
          this.message = ''
          this.blockForm = false
          resolve()
        }, 2000)
      })
    },
    onSignIn () {
      this.setMessage('Zostałeś zalogowany!')
        .then(() => {
          this.$router.push('/map')
        })
      this.isSending = false
    },
    onError () {
      this.setMessage('Spróbuj ponownie...')
      this.isSending = false
    },
    onInvalidValues () {
      this.setMessage('Błędne dane...')
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
