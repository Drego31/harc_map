<template>
  <validation-observer>
    <validation-provider
      :name="label.toLowerCase()"
      :rules="rules"
      v-slot="{ errors }"
    >
      <m-input
        type="datetime-local"
        v-model="vModel"
        :disabled="disabled"
        :placeholder="label"
        :error="errors.length > 0"
        :assist="errors[0] || assist"
      />
    </validation-provider>
  </validation-observer>
</template>

<!-- USAGE EXAMPLE
  <m-field-datetime
    :label="$t('form.field.date')"
    v-model="date"
    :rules="rules.date"
    :disabled="blockForm"
  />
-->

<script>
import MInput from 'molecules/input';
import { mixins } from 'mixins/base';
import moment from 'moment';

export default {
  name: 'm-field-datetime',
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
  computed: {
    vModel: {
      get () {
        if (this.value) return moment(new Date(this.value)).format('YYYY-MM-DDTHH:mm');
        else return null;
      },
      set (value) {
        if (value) this.$emit('input', moment(value, 'YYYY-MM-DDTHH:mm').valueOf());
        else return null;
      },
    },
  },
};
</script>
