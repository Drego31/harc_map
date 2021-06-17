export default {
  state: {
    mapLongitude: 0,
    mapLatitude: 0,
    mapDefaultLongitude: 0,
    mapDefaultLatitude: 0,
    mapZoom: 2,
    mapDefaultZoom: 2,
    mapRefreshTime: 60,
  },
  getters: {
    mapRefreshTime: state => state.mapRefreshTime,
    mapPosition: state => ({
      mapLongitude: state.mapLongitude,
      mapLatitude: state.mapLatitude,
      mapZoom: state.mapZoom,
    }),
    mapDefaultPosition: state => ({
      mapDefaultLongitude: state.mapDefaultLongitude,
      mapDefaultLatitude: state.mapDefaultLatitude,
      mapDefaultZoom: state.mapDefaultZoom,
    }),
  },
  mutations: {
    setDefaultMapPositionAndZoom: (state) => {
      state.mapLatitude = state.mapDefaultLatitude;
      state.mapLongitude = state.mapDefaultLongitude;
      state.mapZoom = state.mapDefaultZoom;
    },
    setMapPosition: (state, { mapLatitude, mapLongitude }) => {
      state.mapLatitude = mapLatitude;
      state.mapLongitude = mapLongitude;
    },
    setMapZoom: (state, mapZoom) => (state.mapZoom = mapZoom),
  },
  actions: {},
};
