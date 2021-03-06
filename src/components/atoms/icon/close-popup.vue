<template>
  <a-icon
    class="a-icon f-close-popup"
    :class="addClass"
    :name="ICONS.close"
    :size="size"
    @click="$emit('click')"
  />
</template>

<script>
import AIcon from 'atoms/icon';

export default {
  name: 'a-icon-close-popup',
  components: { AIcon },
  props: {
    size: {
      type: Number,
      default: 32,
    },
    addClass: {
      type: String || Array,
      default: '',
    },
  },
};
</script>
