<template>
  <a-button-icon
    class="f-footer"
    @click="$emit('click')"
  >
    <a-icon
      :name="icon"
      class="a-icon f-footer"
      :class="iconClass"
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
  components: {
    AButtonIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    iconClass: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
