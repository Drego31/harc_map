import { vueModel } from '../extends/base'

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
}
