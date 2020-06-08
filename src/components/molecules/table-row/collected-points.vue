<template>
  <m-table-row :has-details="true" add-class="f-collected-points">
    <template v-slot:cols>
      <div>
        <icon-star :size="64" class="a-icon" :class="category.imageColor"/>
      </div>

      <div class="f-text-32 f-text-bold">
        {{ quantity }}
      </div>

      <div class="f-text-32 f-text-bold">
        {{ value }}
      </div>

    </template>
    <template v-slot:details="{ isOpen }">
      <template v-if="isOpen">
        <div class="f-text-14 f-text-italic f-line-18"> Nazwa kategorii: <strong>{{ category.name }}</strong></div>
        <div class="f-text-14 f-text-italic f-line-18">
          Wartość pojedynczego punktu:<strong> {{ category.pointValue }}</strong>
        </div>
      </template>
    </template>
  </m-table-row>
</template>

<script>
import IconStar from 'icons/Star';
import MTableRow from 'molecules/table-row';

export default {
  name: 'm-table-row-collected-points',
  components: {
    MTableRow,
    IconStar,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },

};
</script>
