<template>
  <validation-observer tag="div" v-slot="{ handleSubmit }">
    <form
      class="f-flex f-flex-col f-pb-1 f-text-left"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <slot v-if="isSend === false"/>
      <slot name="form" v-if="isSend === false"/>
      <slot v-else name="response"/>
    </form>
  </validation-observer>
</template>

<script>
export default {
  name: 'o-form',
  props: {
    onSubmit: {
      type: Function,
      default: () => undefined,
    },
    isSend: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
