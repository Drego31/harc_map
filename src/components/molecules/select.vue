<template>
  <div class="m-input f-relative">
    <div
      class="a-field f-select"
      :class="{ 'f-filled': label !== '' }"
      @click="toggleOptions"
      v-click-outside="closeOptions"
    >
      <input
        :id="id"
        class="a-input f-select"
        ref="input"
        :value="label"
        readonly
        @focusout="closeOptions"
      />
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
      @click.stop="focusAndToggle"
    />
    <div class="m-options" v-if="optionsAreOpen">
      <div
        v-for="option of options"
        :key="option.value"
        class="a-option"
        :class="{ 'f-selected': option.value === vModel }"
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
    optionsAreOpen: false,
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
    focusAndToggle () {
      this.$refs.input.focus();
      this.toggleOptions();
    },
    closeOptions () {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.optionsAreOpen = false;
          resolve();
        });
      });
    },
    toggleOptions () {
      this.optionsAreOpen = this.optionsAreOpen === false;
    },
    chooseOption ({ value }) {
      this.closeOptions()
        .then(() => {
          this.$emit('change', value);
          this.vModel = value;
        });
    },
  },
};
</script>
