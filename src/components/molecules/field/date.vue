<template>
  <validation-observer>
    <validation-provider
      :name="label.toLowerCase()"
      :rules="rules"
      v-slot="{ errors }"
    >
      <m-input
        type="date"
        v-model="vModel"
        :disabled="disabled"
        :placeholder="label"
        :error="errors.length > 0"
        :assist="errors[0]"
      />
    </validation-provider>
  </validation-observer>
</template>

<!-- USAGE EXAMPLE
  <m-field-date
    :label="$t('form.field.date')"
    v-model="date"
    :rules="rules.date"
    :disabled="blockForm"
  />
-->

<script>
import MInput from 'molecules/input';
import { mixins } from 'mixins/base';

export default {
  name: 'm-field-date',
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
  },
};
</script>
