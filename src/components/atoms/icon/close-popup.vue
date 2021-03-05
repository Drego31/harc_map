<template>
  <a-icon
    class="a-icon f-close-popup"
    :name="ICONS.close"
    :size="32"
    @click="$emit('click')"
  />
</template>

<script>
import AIcon from 'atoms/icon';

export default {
  name: 'a-icon-close-popup',
  components: { AIcon },
};
</script>
