<template>
  <div class="m-slide">
    <div class="a-title f-size-28 f-mt-3">{{ title }}</div>
    <div>
      <slot/>
    </div>
    <div class="f-flex-1"></div>
    <div class="f-mt-3 f-mb-6 f-pb-6 f-text-primary f-text-center">
      <a-icon
        :name="icon"
        size="150"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'm-slide',
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
  },
};
</script>
