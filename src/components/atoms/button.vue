<template>
  <button @click="$emit('click')" class="a-button">
    <slot v-if="loading === false"/>
    <a-loader v-if="loading" :img="loadingImg"/>
  </button>
</template>

<script>
import ALoader from 'atoms/loader';

export default {
  name: 'a-button',
  components: { ALoader },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    loadingImg: {
      type: String,
      default: '',
    },
  },
};
</script>
