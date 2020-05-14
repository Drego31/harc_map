<template>
  <div>
    <div class="m-grid f-split-3 f-collected-points"> <!--m-table-row .f-collected-points-->
      <div>
        <icon-star :size="64" class="a-icon" :class="point.imageColor"/>
      </div>

      <div class="f-text-32 f-text-bold">
        <slot name="value"></slot>
      </div>

      <div class="f-text-32 f-text-bold">
        <slot name="quantity"></slot>
      </div>
    </div>

    <transition name="fade">
      <div class="f-flex f-flex-col f-flex-al-center">
        <template v-if="point.isDetailsOpen">
          <div class="f-text-14 f-text-italic f-line-18"> Nazwa kategorii: <strong>{{ point.name }}</strong></div>
          <div class="f-text-14 f-text-italic f-line-18"> Wartość pojedynczego punktu:<strong> {{ point.pointValue }}</strong></div>
        </template>
        <component
          :is="point.isDetailsOpen ? ArrowUp : ArrowDown"
          @click="toggleDetails(point)"
          :size="24"
          class="a-icon"
          :class="point.imageColor"/>
      </div>
    </transition>
  </div>
</template>

<script>
import IconStar from 'vue-material-design-icons/Star';
import ArrowDown from 'vue-material-design-icons/ArrowDown';
import ArrowUp from 'vue-material-design-icons/ArrowUp';

export default {
  components: {
    IconStar,
  },
  name: 'm-collected-points-table-row',
  data: () => ({
    ArrowUp,
    ArrowDown,
  }),
  props: {
    point: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleDetails (point) {
      this.$emit('toggle-details', point);
    },
  },
};
</script>
