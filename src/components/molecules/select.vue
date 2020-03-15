<template>
  <div class="m-input f-relative">
    <div
      class="a-field f-select"
      :class="{ 'f-filled': label !== '' }"
    >
      <div class="f-flex f-flex-row">
        <input
          :id="id"
          class="a-input f-select"
          ref="input"
          :value="label"
          readonly
        />
      </div>
    </div>
    <label
      class="a-label f-field"
      :for="id"
    >
      {{ placeholder }}
    </label>
    <icon-cancel
      class="a-icon f-input"
      :size="26"
      @click="$refs.input.focus()"
    />
    <div>
      <div
        v-for="option of options"
        :key="option.value"
        @click="chooseOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { mixins } from 'mixins/base';
import IconCancel from 'icons/ArrowDown';

export default {
  name: 'm-select',
  components: { IconCancel },
  mixins: [mixins.vModel],
  props: {
    /**
     * options: [{label: String, value: String}]
     */
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    id: '',
  }),
  mounted () {
    const randomNumber = Math.floor(Math.random() * 10000);
    this.id = 'id-select-' + randomNumber;
  },
  computed: {
    label () {
      const option = this.options.find(option => (option.value === this.vModel));
      return option ? option.label : '';
    },
  },
  methods: {
    chooseOption ({ value }) {
      console.log(value);
      this.vModel = value;
      this.$emit('change', value);
    },
  },
};
</script>
