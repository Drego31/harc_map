import { createMap } from 'src/map/create'
import { createFeatures } from 'src/map/createFeatures'

export const map = {
  realMap: null,
  create: config => createMap(config),
  features: {
    list: [],
    create: ({ list }) => {
      createFeatures(list)
    },
  },
}
