import { MAP_POINTS } from 'utils/macros/map-point-types';
import { MACROS } from 'utils/macros';
import generateRandomString from 'utils/macros/random';
const random = generateRandomString;
const getDefaultState = () => ({
  pointId: random(4),
  pointName: '',
  pointLongitude: null,
  pointLatitude: null,
  pointType: MACROS.pointType.permanent,
  pointCategory: MACROS.pointCategory[0].categoryId,
  pointCollectionTime: null,
  pointExpirationTime: null,
});

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    point: state => state,
    pointCategory: state => state.pointCategory,
    pointPosition: state => (
      { pointLatitude: state.pointLatitude, pointLongitude: state.pointLongitude }
    ),
    getPointColor: state => MAP_POINTS[state.pointCategory]().fillColor,
    hasPositionSet: state => state.pointLongitude && state.pointLatitude,
    getPointBasicInformation: state => ({
      pointName: state.pointName,
      pointType: state.pointType,
      pointCategory: state.pointCategory,
      expirationTime: state.pointExpirationTime,
    }),
  },
  mutations: {
    setPointPosition: (state, {
      pointLatitude,
      pointLongitude,
    }) => {
      state.pointLatitude = pointLatitude;
      state.pointLongitude = pointLongitude;
    },
    setPointBasicInformation: (state, {
      pointName,
      pointType,
      pointCategory,
      pointExpirationTime = null,
    }) => {
      state.pointName = pointName;
      state.pointType = pointType;
      state.pointCategory = pointCategory;
      state.pointExpirationTime = pointExpirationTime;
    },
    resetPointState: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {

  },
};
