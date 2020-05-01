<template>
  <div class="m-list-element">
    <div>
      <icon-star :size="64" class="a-icon" :class="point.imageColor"/>
    </div>
    <div class="a-list-tile">
      <slot/>
    </div>
  </div>
</template>

<script>
import IconStar from 'vue-material-design-icons/Star';
export default {
  components: {
    IconStar,
  },
  name: 'm-list-element',
  props: {
    point: {
      type: Object,
      required: true,
    },
  },
  methods: {

  },
};
</script>
