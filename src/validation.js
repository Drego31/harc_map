import Vue from 'vue';
import { extend, ValidationProvider } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/pl.json';

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);

// Register all rules
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});
