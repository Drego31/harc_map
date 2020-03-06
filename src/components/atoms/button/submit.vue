<template>
  <a-button
    :disabled="disabled"
    @click="$emit('click')"
    class="f-primary"
  >
    {{ isSending ? 'Sprawdzamy...' : (message ? message : 'Dalej') }}
  </a-button>
</template>

<script>
import AButton from 'atoms/button';

export default {
  name: 'a-button-submit',
  components: { AButton },
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
