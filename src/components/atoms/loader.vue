<template>
  <span class="a-loader">
    <img
      class="a-img f-loader"
      :class="additionalClass"
      src="/img/zhp.png"
      alt="logo"
    />
  </span>
</template>

<script>
export default {
  name: 'a-loader',
  props: {
    additionalClass: {
      type: String,
      default: '',
    },
  },
};
</script>
