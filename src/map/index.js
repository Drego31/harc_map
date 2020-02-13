import { createMap } from 'src/map/create'

export const map = {
  realMap: null,
  create: config => createMap(config),
}
