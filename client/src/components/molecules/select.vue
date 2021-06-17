<template>
  <div class="m-input f-relative">
    <div
      class="a-field f-select"
      :class="additionalClasses"
      @click="makeFocus($event)"
    >
      <input
        :id="id"
        class="a-input f-select"
        :class="additionalClasses"
        ref="input"
        :value="label"
        readonly
        @click="focusIn"
        @focusin="focusIn"
        @focusout="focusOut"
        @keyup.esc.prevent="closeOptions"
        @keyup.enter.space.prevent="chooseAndToggleOptions"
        @keyup.up.prevent="optionUp"
        @keyup.down.prevent="optionDown"
      />
    </div>
    <label
      class="a-label f-field"
      :for="id"
      :class="{ 'f-correct': correct, 'f-error': error }"
    >
      {{ placeholder }}
    </label>
    <a-icon
      :name="ICONS.arrow_drop_down"
      class="f-input"
      @click.stop="makeFocus($event)"
    />
    <div
      class="m-options"
      :class="{ 'f-top': optionsAreOutsideWindow }"
      v-if="optionsAreOpen"
      ref="options"
    >
      <div
        v-for="(option, index) of options"
        :key="option.value"
        class="a-option"
        :class="{ 'f-selected': option.value === vModel, 'f-pointed': pointedOption === index }"
        @click="chooseOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
    <div
      class="a-assist"
      :class="{ 'f-error': error, 'f-disabled': disabled}"
    >
      {{ assist }}
    </div>
  </div>
</template>

<!-- USAGE EXAMPLE
  <m-select
    :options="[{label: '5 min', value: 5 * 60}]"
    :placeholder="$t('form.field.mapRefreshTime')"
    v-model="values.mapRefreshTime"
  />
-->

<script>
import { mixins } from 'mixins/base';
import { logical } from 'vendors/logical';

export default {
  name: 'm-select',
  mixins: [mixins.vModel],
  props: {
    /**
     * options: [{label: String, value: String}]
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    correct: {
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
    optionsAreOpen: false,
    optionsAreOutsideWindow: false,
    pointedOption: -1,
  }),
  mounted () {
    const randomNumber = Math.floor(Math.random() * 10000);
    this.id = 'id-select-' + randomNumber;
    this.resetPointedOption();
  },
  computed: {
    label () {
      const option = this.options.find(option => (option.value === this.vModel));
      return option ? option.label : '';
    },
    additionalClasses () {
      return {
        'f-filled': this.label !== '',
        'f-error': this.error,
        'f-correct': this.correct,
        'f-disabled': this.disabled,
      };
    },
  },
  methods: {
    focusIn () {
      clearTimeout(this.$options.timeoutId);
      this.$options.timeoutId = setTimeout(() => {
        this.toggleOptions(true);
      }, 100);
    },
    focusOut () {
      clearTimeout(this.$options.timeoutId);
      this.$options.timeoutId = setTimeout(() => {
        this.toggleOptions(false);
      }, 100);
    },
    resetPointedOption (value = this.vModel) {
      if (logical.isNull(value)) {
        this.pointedOption = -1;
      } else {
        this.pointedOption = this.options.findIndex(option => option.value === value);
      }
    },
    makeFocus (event) {
      event.preventDefault();
      this.$refs.input.focus();
    },
    closeOptions (config = { resetPointedOption: true }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.optionsAreOpen = false;
          if (config.resetPointedOption) {
            this.resetPointedOption();
          }
          resolve();
        });
      });
    },
    toggleOptions (newState) {
      if (this.disabled) return;

      const oppositeState = this.optionsAreOpen === false;
      this.optionsAreOpen = newState !== undefined ? newState : oppositeState;
      this.resetPointedOption();

      if (this.optionsAreOpen) {
        this.$nextTick(() => {
          const options = this.$refs.options;
          const optionsProps = options.getBoundingClientRect();
          const optionsHeight = optionsProps.height;
          const optionsTop = optionsProps.top;
          const windowHeight = window.outerHeight;
          this.optionsAreOutsideWindow = optionsHeight + optionsTop + 8 >= windowHeight;
        });
      } else {
        this.optionsAreOutsideWindow = false;
      }
    },
    chooseOption ({
      value,
      index,
    }) {
      if (this.disabled) return;

      if (logical.isDefined(index)) {
        value = this.options[index].value;
      }

      this.closeOptions({ resetPointedOption: false })
        .then(() => {
          this.$emit('change', value);
          this.vModel = value;
          this.resetPointedOption(value);
        });
    },
    chooseAndToggleOptions () {
      const index = this.pointedOption;
      if (this.optionsAreOpen && index >= 0) {
        this.chooseOption({ index });
      } else {
        this.toggleOptions();
      }
    },
    optionSwitch (index) {
      if (this.optionsAreOpen === false) {
        this.chooseOption({ index });
      }
    },
    optionUp () {
      if (this.pointedOption - 1 < 0) {
        this.pointedOption = this.options.length - 1;
      } else {
        this.pointedOption -= 1;
      }

      this.optionSwitch(this.pointedOption);
    },
    optionDown () {
      if (this.disabled) return;

      if (this.pointedOption + 1 > this.options.length - 1) {
        this.pointedOption = 0;
      } else {
        this.pointedOption += 1;
      }

      this.optionSwitch(this.pointedOption);
    },
  },
};
</script>
