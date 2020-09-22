<template>
  <div>
    <div class="m-grid f-split-3" :class="addClass">
      <slot name="cols"/>
    </div>

    <div
      class="f-flex f-flex-col f-flex-al-center"
      @click="toggleDetails()"
    >
      <slot name="details" :isOpen="isOpen"/>
      <a-icon
        v-if="hasDetails"
        :name="isOpen ? 'arrow_drop_up' : 'arrow_drop_down'"
      />
    </div>
  </div>
</template>

<script>
import AIcon from 'atoms/icon';

export default {
  name: 'm-table-row',
  components: { AIcon },
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
  }),
  methods: {
    toggleDetails () {
      this.isOpen = this.isOpen === false;
    },
  },
};
</script>
