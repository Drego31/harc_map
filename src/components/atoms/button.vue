<template>
  <button @click="$emit('click')" class="a-button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'a-button',
};
</script>
