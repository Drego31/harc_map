<template>
  <validation-observer>
    <validation-provider
      :name="label.toLowerCase()"
      :rules="rules.password"
      v-slot="{ errors }"
      vid="password"
    >
      <m-input
        type="password"
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
  name: 'm-field-password',
  mixins: [mixins.vModel, mixins.validation],
  components: { MInput },
  props: {
    disabled: Boolean,
    label: {
      type: String,
      default: 'E-mail',
    },
    assist: {
      type: String,
      default: '',
    },
  },
};
</script>
