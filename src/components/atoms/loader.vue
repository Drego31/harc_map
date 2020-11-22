<template>
  <span class="a-loader">
    <img
      class="a-img f-loader"
      :class="additionalClass"
      :src="img"
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
    img: {
      type: String,
      default: '/img/zhp.png',
    },
  },
};
</script>
