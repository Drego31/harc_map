<template>
  <a-icon :name="ICONS.stop_circle" :class="categoryStyleById(categoryId)"/>
</template>

<script>
import AIcon from 'atoms/icon';
import { mapGetters } from 'vuex';

export default {
  name: 'a-icon-category',
  components: { AIcon },
  props: {
    categoryId: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    ...mapGetters('theme', [
      'categoryStyleById',
    ]),
  },
};
</script>
