<template>
  <button class="a-button" @click="$emit('click')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'a-button',
}
</script>
