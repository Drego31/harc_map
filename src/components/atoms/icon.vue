<template>
  <i class="a-icon f-material">
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
  },
};
</script>
