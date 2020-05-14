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
      <div
        v-if="point.isDetailsOpen"
        class="f-flex f-flex-col f-flex-al-center">
        <div class="f-text-14 f-text-italic f-line-18"> Nazwa kategorii: {{ point.name }}</div>
        <div class="f-text-14 f-text-italic f-line-18"> Wartość pojedynczego punktu: {{ point.pointValue }}</div>
        <a-button @click="toggleDetails(point)" class="a-button-transparent" style="margin: 0">
          <arrow-up
            :size="24"
            class="a-icon"
            :class="point.imageColor"
          />
        </a-button>

      </div>

      <div v-else>
        <a-button @click="toggleDetails(point)" class="a-button-transparent" style="margin: 0">
          <arrow-down
            :size="24"
            class="a-icon"
            :class="point.imageColor"
          />
        </a-button>
      </div>
    </transition>
  </div>
</template>

<script>
import IconStar from 'vue-material-design-icons/Star';
import ArrowDown from 'vue-material-design-icons/ArrowDown';
import ArrowUp from 'vue-material-design-icons/ArrowUp';
import AButton from 'atoms/button';

export default {
  components: {
    IconStar,
    ArrowDown,
    ArrowUp,
    AButton,
  },
  name: 'm-collected-points-table-row',
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
