<template>
  <div>
    <div class="m-grid f-split-3" :class="addClass">
      <slot name="cols"/>
    </div>

    <div class="f-flex f-flex-col f-flex-al-center">
      <slot name="details" :isOpen="isOpen"/>
      <component
        v-if="hasDetails"
        :is="isOpen ? IconArrowUp : IconArrowDown"
        @click="toggleDetails()"
        :size="24"
        class="a-icon"
      />
    </div>
  </div>
</template>

<script>

import IconArrowUp from 'icons/ArrowUp';
import IconArrowDown from 'icons/ArrowDown';

export default {
  name: 'm-table-row',
  props: {
    addClass: {
      type: String,
      default: '',
    },
    hasDetails: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isOpen: false,
    IconArrowUp,
    IconArrowDown,
  }),
  methods: {
    toggleDetails () {
      this.isOpen = this.isOpen === false;
    },
  },
};
</script>
