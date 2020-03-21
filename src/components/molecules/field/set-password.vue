<template>
  <validation-observer>
    <validation-provider
      name="Hasło"
      rules="required|min:8|max:64|hasNumber|hasCapitalize"
      v-slot="{ errors }"
      vid="password"
    >
      <m-input
        :disabled="disabled"
        placeholder="Hasło"
        type="password"
        :error="errors.length > 0"
        :assist="errors[0]"
        v-model="vModel"
      />
    </validation-provider>
    <validation-provider
      name="Powtórz hasło"
      rules="required|confirmed:password"
      v-slot="{ errors }"
    >
      <m-input
        :disabled="disabled"
        placeholder="Powtórz hasło"
        type="password"
        :error="errors.length > 0"
        :assist="errors[0]"
        v-model="repeatedPassword"
      />
    </validation-provider>
  </validation-observer>
</template>

<script>
import MInput from 'molecules/input';
import { mixins } from 'mixins/base';

export default {
  name: 'm-field-set-password',
  mixins: [mixins.vModel],
  components: { MInput },
  data: () => ({
    repeatedPassword: '',
  }),
  props: {
    disabled: Boolean,
    label: {
      type: String,
      default: 'E-mail',
    },
  },
};
</script>
