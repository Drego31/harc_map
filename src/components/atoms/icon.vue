<template>
  <i
    class="a-icon f-material"
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
      required: true,
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
