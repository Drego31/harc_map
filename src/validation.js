import Vue from 'vue';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/pl.json';
import validateTools from 'vendors/validate-tools';

// Register it globally
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);

// Register all rules
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});

extend('hasNumber', {
  validate (value) {
    return validateTools.hasNumber(value);
  },
  message: 'Pole {_field_} powinno zawierać conajmniej jedną cyfrę',
});

extend('hasCapitalize', {
  validate (value) {
    return /[A-Z]/.test(value);
  },
  message: 'Pole {_field_} powinno zawierać conajmniej jedną wielką literę',
});
