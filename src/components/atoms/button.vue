<template>
  <button @click="$emit('click')" class="a-button">
    <slot v-if="loading === false"/>
    <span
      v-if="loading"
      class="a-loader"
    >
      <img class="a-img f-loader" src="/img/zhp.png" alt="logo"/>
    </span>
  </button>
</template>

<script>
export default {
  name: 'a-button',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
