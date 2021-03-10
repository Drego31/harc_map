<template>
  <div class="f-relative f-z-index-6">
    <div class="m-pointer" :style="{backgroundColor: pointColor}"></div>
  </div>
</template>

<script>

export default {
  name: 'm-pointer-map',
  props: {
    pointColor: {
      type: String,
      required: true,
    },
  },
};
</script>
