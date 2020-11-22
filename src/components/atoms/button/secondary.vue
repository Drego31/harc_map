<template>
  <a-button
    @click="$emit('click')"
    :add-class="['f-secondary', addClass]"
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
  props: ['loading', 'addClass'],
};
</script>
