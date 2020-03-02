<template>
  <a-button-icon
    class="f-footer"
    @click="$emit('click')"
  >
    <component
      :is="icon"
      class="a-icon f-footer"
      :size="24"
    />
    <div class="a-label f-button-icon-footer">
      {{ label }}
    </div>
  </a-button-icon>
</template>

<script>
import AButtonIcon from 'atoms/button/icon';

export default {
  name: 'a-button-icon-footer',
  components: { AButtonIcon },
  props: {
    icon: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
