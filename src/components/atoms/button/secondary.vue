<template>
  <a-button
    @click="$emit('click')"
    class="a-button f-secondary"
    :loading="loading"
    loading-img="/img/zhp-green.png"
  >
    <slot/>
  </a-button>
</template>

<script>
import AButton from 'atoms/button';
export default {
  name: 'a-button-secondary',
  components: { AButton },
  props: ['loading'],
};
</script>
