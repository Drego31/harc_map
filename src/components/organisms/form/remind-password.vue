<template>
  <div class="f-pb-1">
    <div v-if="!formSend">
      <a-input
        v-model="email"
        placeholder="e-mail"
        :disabled="blockForm"
      />
      <a-button-submit
        :message="message"
        :disabled="blockForm"
        :is-sending="isSending"
        @click="remindPassword()"
      />
    </div>
    <p v-else>Link do odzyskania hasła wysłano na podany email.</p>
  </div>
</template>

<script>
import AButtonSubmit from 'atoms/button/submit'
import AInput from 'atoms/input'
import { api } from 'api/index'
import { formMixin } from 'mixins/form'

export default {
  name: 'remind-password.vue',
  mixins: [formMixin],
  components: {
    AButtonSubmit,
    AInput,
  },
  data: () => ({
    email: '',
    blockForm: false,
    isSending: false,
    message: '',
    formSend: false,
  }),
  methods: {
    checkValues () {
      return this.email.length >= 6 && this.email.includes('@')
    },
    remindPassword () {
      this.isSending = true
      this.blockForm = true
      if (this.checkValues()) {
        api.remindPassword(this.email)
          .then(this.onRemindPassword)
          .catch(this.onError)
      } else {
        this.onInvalidValues()
      }
    },
    onRemindPassword () {
      this.setMessage('Zakończono pomyślnie!')
        .then(() => {
          this.formSend = true
        })
      this.isSending = false
    },
  },
}
</script>
