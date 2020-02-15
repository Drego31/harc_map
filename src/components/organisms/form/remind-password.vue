<template>
  <div class="f-pb-1">
    <a-input
      v-model="email"
      placeholder="e-mail"
      :disabled="blockForm"
    />
    <a-button
      @click="remindPassword()"
      :disabled="blockForm"
    >
      {{ isSending ? 'Sprawdzamy...' : (message ? message : 'Dalej') }}
    </a-button>
  </div>
</template>

<script>
import AButton from 'atoms/button'
import AInput from 'atoms/input'

export default {
  name: 'remind-password.vue',
  components: {
    AButton,
    AInput,
  },
  data: () => ({
    email: '',
    blockForm: false,
    isSending: false,
    message: '',
  }),
}
</script>
