<template>
  <validation-observer>
    <validation-provider
      :name="label.toLowerCase()"
      :rules="rules.email"
      v-slot="{ errors }"
    >
      <m-input
        type="email"
        v-model.trim="vModel"
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
import { translator } from 'src/dictionary';

export default {
  name: 'm-field-email',
  mixins: [mixins.vModel, mixins.validation],
  components: { MInput },
  props: {
    disabled: Boolean,
    label: {
      type: String,
      default: translator.t('form.field.email'),
    },
    assist: {
      type: String,
      default: '',
    },
  },
};
</script>
