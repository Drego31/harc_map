<template>
  <div>
    <div class="m-grid f-split-3" :class="addClass">
      <slot name="cols"/>
    </div>

    <div class="f-flex f-flex-col f-flex-al-center">
      <slot name="details"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'm-table-row',
  props: {
    addClass: {
      type: String,
      default: '',
    },
  },
};
</script>
