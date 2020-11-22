<template>
  <a-button-secondary
    @click="$emit('click', $event)"
    class="f-fill"
    :add-class="['f-fill', addClass]"
    :loading="loading"
  >
    <slot/>
  </a-button-secondary>
</template>

<script>
import AButtonSecondary from 'atoms/button/secondary';

export default {
  name: 'a-button-fill-secondary',
  components: { AButtonSecondary },
  props: ['loading', 'addClass'],
};
</script>
