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
    if (this.title) {
      document.title = `${this.title} - ${APP_NAME}`;
    } else {
      document.title = APP_NAME;
    }
  },
};
</script>
