<template>
  <validation-observer>
    <validation-provider
      :name="label.toLowerCase()"
      :rules="rules"
      v-slot="{ errors }"
    >
      <m-input
        type="text"
        v-model="vModel"
        :disabled="disabled"
        :placeholder="label"
        :error="errors.length > 0"
        :assist="errors[0] || assist"
      />
    </validation-provider>
  </validation-observer>
</template>

<script>
import MInput from 'molecules/input';
import { mixins } from 'mixins/base';

export default {
  name: 'm-field-text',
  mixins: [mixins.vModel],
  components: { MInput },
  props: {
    disabled: Boolean,
    label: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
    assist: {
      type: String,
      default: '',
    },
  },
};
</script>
