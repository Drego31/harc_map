<template>
  <button @click="$emit('click')" class="a-button f-primary">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'a-button-primary',
};
</script>
