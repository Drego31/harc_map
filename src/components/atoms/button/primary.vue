<template>
  <a-button
    @click="$emit('click')"
    :add-class="['f-primary', addClass]"
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
  props: ['loading', 'addClass'],
};
</script>
