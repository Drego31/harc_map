<template>
  <a-button-primary
    :disabled="disabled"
    @click="$emit('click')"
    class="f-primary"
  >
    {{ isSending ? 'Sprawdzamy...' : (message ? message : 'Dalej') }}
  </a-button-primary>
</template>

<script>
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'a-button-submit',
  components: { AButtonPrimary },
  props: {
    isSending: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
