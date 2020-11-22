<template>
  <a-button-primary
    :disabled="disabled"
    @click="$emit('click')"
    class="f-primary"
    type="submit"
    :loading="isSending"
  >
    {{ message ? message : text }}
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
    text: {
      type: String,
      default: 'Dalej',
    },
  },
};
</script>
