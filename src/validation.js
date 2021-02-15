import Vue from 'vue';
import {
  extend as veeExtend,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/pl.json';
import validateTools from 'vendors/validate-tools';
import { translator } from 'src/dictionary';

// Register it globally
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);

messages.required = translator.t('form.validation.required');
messages.email = translator.t('form.validation.email');
messages.min = translator.t('form.validation.min');
messages.max = translator.t('form.validation.max');
messages.confirmed = translator.t('form.validation.confirmed');
messages.length = translator.t('form.validation.length');

// Register all rules
Object.keys(rules).forEach(rule => {
  veeExtend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});

veeExtend('hasNumber', {
  validate (value) {
    return validateTools.hasNumber(value);
  },
  message: translator.t('form.validation.hasNumber'),
});

veeExtend('hasCapitalize', {
  validate (value) {
    return /[A-Z]/.test(value);
  },
  message: translator.t('form.validation.hasCapitalize'),
});
