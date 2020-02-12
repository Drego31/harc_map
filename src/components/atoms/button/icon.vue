<template>
  <button class="a-button f-icon" @click="$emit('click')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'a-button-icon',
}
</script>
