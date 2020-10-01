<template>
  <a-icon :name="ICONS.stop_circle" :class="categoryClassById"/>
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
    ...mapGetters('event', [
      'getCategoryById',
    ]),
    categoryClassById () {
      const pointShape = this.getCategoryById(this.categoryId).pointShape;
      switch (pointShape) {
        case 1:
          return 'f-text-info';
        case 2:
          return 'f-text-warning';
        case 3:
          return 'f-text-danger';
        default:
          return '';
      }
    },
  },
};
</script>
