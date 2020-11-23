<template>
  <div class="m-area f-button" @click="$emit('click', $event)">
    <button
      class="a-button"
      :class="addClass"
      ref="button"
      :disabled="disabled"
    >
      <slot v-if="loading === false"/>
      <a-loader v-if="loading" :add-class="addClass" :img="loadingImg"/>
    </button>
  </div>
</template>

<script>
import ALoader from 'atoms/loader';

export default {
  name: 'a-button',
  components: { ALoader },
  inheritAttrs: false,
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
    loadingImg: {
      type: String,
      default: '',
    },
  },
};
</script>
