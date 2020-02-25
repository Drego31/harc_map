<template>
  <button @click="$emit('click')" class="a-button f-icon">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'a-button-icon',
};
</script>
