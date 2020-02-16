import { vueModel } from '../extends/base'
import { formMixin as form } from './form'

const vModel = {
  props: {
    value: {},
  },
  computed: {
    vModel: vueModel,
  },
}

export const mixins = {
  vModel,
  form,
}
