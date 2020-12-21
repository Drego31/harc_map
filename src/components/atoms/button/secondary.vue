<template>
  <a-button
    @click="$emit('click', $event)"
    :add-class="['f-secondary', addClass]"
    :loading="loading"
    :loading-img="loadingImg"
    :disabled="disabled"
  >
    <slot/>
  </a-button>
</template>

<script>
import AButton from 'atoms/button';
import { THEMES } from 'utils/style-manager';

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
  computed: {
    loadingImg () {
      if (this.$store.getters['theme/name'] === THEMES.dark) {
        return '/img/zhp-52.png';
      } else {
        return '/img/zhp-green-52.png';
      }
    },
  },
};
</script>
