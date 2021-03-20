<template>
  <a-button-secondary
    @click="$emit('click', $event)"
    class="f-fill"
    :add-class="['f-fill', addClass]"
    :loading="loading"
    :disabled="disabled"
  >
    <slot/> {{ text }}
  </a-button-secondary>
</template>

<script>
import AButtonSecondary from 'atoms/button/secondary';

export default {
  name: 'a-button-fill-secondary',
  components: { AButtonSecondary },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    addClass: {
      type: [Array, String],
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
