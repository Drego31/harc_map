<template>
  <div class="t-page">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 't-page',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted () {
    this.$store.commit('header/setPageTitle', this.title);
  },
};
</script>
