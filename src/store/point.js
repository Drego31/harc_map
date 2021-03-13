import { MAP_POINTS } from 'utils/macros/map-point-types';
import { MACROS } from 'utils/macros';
import { generateRandomStringWithoutSimilarChars } from 'vendors/random';
import { ROUTES } from 'utils/macros/routes';

const getDefaultState = () => ({
  isUpdateMode: false,
  pointId: generateRandomStringWithoutSimilarChars(4),
  pointName: '',
  pointLongitude: null,
  pointLatitude: null,
  pointType: MACROS.pointType.permanent,
  pointCategory: MACROS.pointCategory[0].categoryId,
  pointAppearanceTime: null,
  pointCollectionTime: null,
  pointExpirationTime: null,
});

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    point: state => state,
    pointId: state => state.pointId,
    pointCategory: state => state.pointCategory,
    pointPosition: state => (
      {
        pointLatitude: state.pointLatitude,
        pointLongitude: state.pointLongitude,
      }
    ),
    getPointColor: state => MAP_POINTS[state.pointCategory]().fillColor,
    hasPositionSet: state => (state.pointLongitude && state.pointLatitude),
    getPointBasicInformation: state => ({
      pointName: state.pointName,
      pointType: state.pointType,
      pointCategory: state.pointCategory,
      pointExpirationTime: state.pointExpirationTime,
      pointAppearanceTime: state.pointAppearanceTime,
    }),
    isUpdateMode: state => state.isUpdateMode,
    routeBackFromMap: state => state.isUpdateMode
      ? {
        name: ROUTES.editPoint.name,
        params: { pointId: state.pointId },
      }
      : {
        name: ROUTES.newPoint.name,
      },

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
      pointAppearanceTime = null,
    }) => {
      state.pointName = pointName;
      state.pointType = pointType;
      state.pointCategory = pointCategory;
      state.pointExpirationTime = pointExpirationTime;
      state.pointAppearanceTime = pointAppearanceTime;
    },
    setPointFullInformation: (state, {
      pointName,
      pointType,
      pointCategory,
      pointExpirationTime,
      pointAppearanceTime,
      pointId,
      pointLongitude,
      pointLatitude,
    }) => {
      state.pointName = pointName;
      state.pointType = pointType;
      state.pointCategory = pointCategory;
      state.pointExpirationTime = pointExpirationTime;
      state.pointAppearanceTime = pointAppearanceTime;
      state.pointId = pointId;
      state.pointLongitude = pointLongitude;
      state.pointLatitude = pointLatitude;
    },
    resetPointState: (state) => {
      Object.assign(state, getDefaultState());
    },
    setUpdateMode: (state) => {
      state.isUpdateMode = true;
    },
    unsetUpdateMode: (state) => {
      state.isUpdateMode = false;
    },
  },
  actions: {},
};
