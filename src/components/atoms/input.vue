<template>
  <div class="m-input">
    <input
      :id="id"
      class="a-input"
      :class="vModel !== '' ? 'f-filled' : ''"
      v-model="vModel"
    />
    <label class="a-label f-input" :for="id">
      {{ placeholder }}
    </label>
  </div>
</template>

<script>
import { mixins } from 'mixins/base';

export default {
  name: 'a-input',
  mixins: [mixins.vModel],
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    id: '',
  }),
  mounted () {
    this.id = 'id-input-' + Math.floor(Math.random() * 10000);
  },
};
</script>
