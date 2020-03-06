<template>
  <button @click="$emit('click')" class="a-button f-secondary">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'a-button-secondary',
};
</script>
