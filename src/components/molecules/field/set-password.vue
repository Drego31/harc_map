<template>
  <validation-observer>
    <validation-provider
      :name="labels.password"
      :rules="rules.password"
      v-slot="{ errors }"
      vid="password"
    >
      <m-input
        :disabled="disabled"
        :placeholder="labels.password"
        type="password"
        :error="errors.length > 0"
        :assist="errors[0]"
        v-model="vModel"
      />
    </validation-provider>
    <validation-provider
      :name="labels.confirmation"
      :rules="rules.passwordConfirmation"
      v-slot="{ errors }"
    >
      <m-input
        :disabled="disabled"
        :placeholder="labels.confirmation"
        type="password"
        :error="errors.length > 0"
        :assist="errors[0]"
        v-model="passwordConfirmation"
      />
    </validation-provider>
  </validation-observer>
</template>

<script>
import MInput from 'molecules/input';
import { mixins } from 'mixins/base';

export default {
  name: 'm-field-set-password',
  mixins: [mixins.vModel, mixins.validation],
  components: { MInput },
  data: () => ({
    labels: {
      password: 'Hasło',
      confirmation: 'Powtórz hasło',
    },
    passwordConfirmation: '',
  }),
  props: {
    disabled: Boolean,
  },
};
</script>
