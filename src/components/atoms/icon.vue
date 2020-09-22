<template>
  <i
    class="a-icon"
    :class="classes"
  >
    {{ name }}
    <slot/>
  </i>
</template>

<script>
export default {
  name: 'a-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: 24,
    },
  },
  computed: {
    classes () {
      const classes = {};
      classes['f-size-' + this.size] = true;
      return classes;
    },
  },
};
</script>
