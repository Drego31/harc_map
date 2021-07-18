<template>
  <vue-ellipse-progress
    :progress="progress"
    :angle="-90"
    :color="color"
    :emptyColor="`${color}55`"
    :size="size"
    thickness="7%"
    lineMode="in-over"
    emptyThickness="12%"
    animation="reverse 1000 700"
    :legend="true"
    :legendValue="numberOfCompleted"
    :noData="false"
    :loading="false"
    :half="false"
    :gap="10"
    fontSize="16px">
    <span slot="legend-value">/{{ maxRange }}</span>
  </vue-ellipse-progress>
</template>

<script>
export default {
  name: 'm-circle-progress',
  props: {
    progress: {
      type: Number,
      required: true,
    },
    numberOfCompleted: {
      type: Number,
      required: true,
    },
    maxRange: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      default: 90,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>
