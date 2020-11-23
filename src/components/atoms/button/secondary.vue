<template>
  <a-button
    @click="$emit('click', $event)"
    :add-class="['f-secondary', addClass]"
    :loading="loading"
    loading-img="/img/zhp-green-52.png"
    :disabled="disabled"
  >
    <slot/>
  </a-button>
</template>

<script>
import AButton from 'atoms/button';
export default {
  name: 'a-button-secondary',
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
  },
};
</script>
