<template>
  <validation-observer>
    <validation-provider
      :name="labels[0].toLowerCase()"
      :rules="rules.password"
      v-slot="{ errors }"
      vid="password"
    >
      <m-input
        :disabled="disabled"
        :placeholder="labels[0]"
        type="password"
        :error="errors.length > 0"
        :assist="errors[0] || assist"
        v-model="vModel"
      />
    </validation-provider>
    <validation-provider
      :name="labels[1].toLowerCase()"
      :rules="rules.passwordConfirmation"
      v-slot="{ errors }"
    >
      <m-input
        :disabled="disabled"
        :placeholder="labels[1]"
        type="password"
        :error="errors.length > 0"
        :assist="errors[0] || assist"
        v-model="passwordConfirmation"
      />
    </validation-provider>
  </validation-observer>
</template>

<script>
import MInput from 'molecules/input';
import { mixins } from 'mixins/base';
import { translator } from 'src/dictionary';

export default {
  name: 'm-field-set-password',
  mixins: [mixins.vModel, mixins.validation],
  components: { MInput },
  data: () => ({
    passwordConfirmation: '',
  }),
  props: {
    disabled: Boolean,
    labels: {
      type: Array,
      default: () => [
        translator.t('form.field.password'),
        translator.t('form.field.rePassword'),
      ],
    },
    assist: {
      type: String,
      default: '',
    },
  },
};
</script>
