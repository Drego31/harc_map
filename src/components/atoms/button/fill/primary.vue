<template>
  <a-button-primary
    @click="$emit('click')"
    class="f-fill"
    :add-class="['f-fill', addClass]"
    :loading="loading"
  >
    <slot/>
  </a-button-primary>
</template>

<script>
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'a-button-fill-primary',
  components: { AButtonPrimary },
  props: ['loading', 'addClass'],
};
</script>
