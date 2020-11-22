<template>
  <div class="m-area f-button" @click="$emit('click')">
    <button class="a-button" :class="addClass">
      <slot v-if="loading === false"/>
      <a-loader v-if="loading" :img="loadingImg"/>
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
    loading: {
      type: Boolean,
      default: false,
    },
    loadingImg: {
      type: String,
      default: '',
    },
    addClass: {
      type: String || Array,
      default: '',
    },
  },
};
</script>
