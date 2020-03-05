<template>
  <div class="m-input">
    <input
      :id="id"
      class="a-input"
      :class="additionalClasses"
      :type="type"
      v-model="vModel"
    />
    <label
      class="a-label f-input"
      :class="{ 'f-error': error }"
      :for="id"
    >
      {{ placeholder }}
    </label>
    <div
      class="a-assist"
      :class="{ 'f-error': error }"
    >
      {{ assist }}
    </div>
  </div>
</template>

<script>
import { mixins } from 'mixins/base';

export default {
  name: 'm-input',
  mixins: [mixins.vModel],
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    assist: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    id: '',
  }),
  mounted () {
    const randomNumber = Math.floor(Math.random() * 10000);
    this.id = 'id-input-' + randomNumber;
  },
  computed: {
    additionalClasses () {
      return {
        'f-filled': this.vModel !== '',
        'f-error': this.error,
      };
    },
  },
};
</script>
