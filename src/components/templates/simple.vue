<template>
  <div class="t-simple">
    <div class="m-content f-simple">
      <div class="a-icon">
      </div>
      <div class="a-title f-text-24 f-text-uppercase">{{ title }}</div>
      <div class="a-text f-simple">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-simple',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
