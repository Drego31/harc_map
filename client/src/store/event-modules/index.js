import pointStatistic from 'store/event-modules/points-statistics';
import categories from 'store/event-modules/categories';
import map from 'store/event-modules/map';
import points from 'store/event-modules/points';
/*
  We decided to use pure js modules upon vuex modules,
  because event store is more like one big module than group of independent submodules
  and we didn't want to using 'rootGetters' etc.
  We did spread manually for vuex to recognize it as part of event-store.
*/
export const eventStoreModules = {
  state: {
    ...pointStatistic.state,
    ...categories.state,
    ...points.state,
    ...map.state,
  },
  getters: {
    ...pointStatistic.getters,
    ...categories.getters,
    ...points.getters,
    ...map.getters,
  },
  mutations: {
    ...pointStatistic.mutations,
    ...categories.mutations,
    ...points.mutations,
    ...map.mutations,
  },
  actions: {
    ...pointStatistic.actions,
    ...categories.actions,
    ...points.actions,
    ...map.actions,
  },
};
