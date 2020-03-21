<template>
  <div class="f-pb-1">
    <validation-observer v-slot="{ handleSubmit }">
      <form
        v-if="!isSend"
        class="f-flex f-flex-col"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <slot name="form"/>
      </form>

      <slot v-else name="response"/>
    </validation-observer>
  </div>
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
