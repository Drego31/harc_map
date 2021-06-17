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

export default {
  name: 'a-icon-close-popup',
  props: {
    size: {
      type: [Number, String],
      default: 32,
    },
    addClass: {
      type: [String, Array],
      default: '',
    },
  },
};
</script>
