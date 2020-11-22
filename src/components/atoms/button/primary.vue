<template>
  <a-button
    @click="$emit('click')"
    class="f-primary"
    :loading="loading"
    loading-img="/img/zhp.png"
  >
    <slot/>
  </a-button>
</template>

<script>
import AButton from 'atoms/button';

export default {
  name: 'a-button-primary',
  components: { AButton },
  props: ['loading'],
};
</script>
