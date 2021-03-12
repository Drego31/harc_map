<template>
  <a-button
    @click="$emit('click')"
    :add-class="['f-primary', addClass]"
    :loading="loading"
    :disabled="disabled"
    :type="type"
    loading-img="/img/zhp-52.png"
  >
    <slot/>
  </a-button>
</template>

<script>
import AButton from 'atoms/button';

export default {
  name: 'a-button-primary',
  components: { AButton },
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
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>
