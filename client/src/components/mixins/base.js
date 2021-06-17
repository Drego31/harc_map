import { vueModel } from 'extends/base';
import { formMixin as form } from './form';
import { validationMixin as validation } from './validation';

const vModel = {
  props: {
    value: {},
  },
  computed: {
    vModel: vueModel,
  },
};

export const mixins = {
  vModel,
  form,
  validation,
};
