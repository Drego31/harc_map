<template>
  <a class="a-link f-menu" @click="$emit('click')">
    <a-icon
      :name="icon"
      class="f-menu"
    />
    <div class="f-flex-1 f-pl-3">
      <slot/>
      {{ text }}
    </div>
  </a>
</template>

<script>
import AIcon from 'atoms/icon';
export default {
  name: 'a-link-menu',
  components: { AIcon },
  props: {
    text: { type: String, default: '' },
    icon: { type: String, default: '' },
  },
};
</script>
