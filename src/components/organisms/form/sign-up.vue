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
    <a-button
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
    },
    blockForm: false,
    isSending: false,
    message: '',
  }),
}
</script>
