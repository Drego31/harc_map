<template>
  <i
    class="a-icon"
    :class="classes"
    v-on="{ ...$listeners }"
  >
    {{ name }}
    <slot/>
  </i>
</template>

<script>
import { uCheck } from '@dbetka/utils';

export default {
  name: 'a-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: undefined,
    },
  },
  computed: {
    classes () {
      const classes = {};
      if (uCheck.isDefined(this.size)) {
        classes['f-size-' + this.size] = true;
      }
      return classes;
    },
  },
};
</script>
