import { MACROS } from 'utils/macros';
import { uCheck } from '@dbetka/utils';
import moment from 'moment';
import Cookies from 'js-cookie';
import { eventUtils } from 'utils/event';
import { map } from 'map';
import { eventStoreModules as Modules } from 'store/event-modules';

export default {
  namespaced: true,
  state: {
    eventId: '',
    eventName: '',
    eventStartDate: null,
    eventEndDate: null,
    ...Modules.state,
  },
  getters: {
    event: state => state,
    eventName: state => state.eventName,
    eventStartDate: state => state.eventStartDate,
    eventEndDate: state => state.eventEndDate,
    eventId: state => state.eventId,
    eventBasicInformation: (state) => ({
      eventId: state.eventId,
      eventName: state.eventName,
      eventStartDate: state.eventStartDate,
      eventEndDate: state.eventEndDate,
      mapZoom: state.mapZoom,
      mapLongitude: state.mapLongitude,
      mapLatitude: state.mapLatitude,
      mapRefreshTime: state.mapRefreshTime,
    }),
    pointsVisibleOnMap: (state, getters, rootState, rootGetters) => {
      return state.points.filter(({
        pointId,
        pointCollectionTime,
        pointType,
        pointAppearanceTime,
        pointExpirationTime,
      }) => {
        // Hide if it's hide point
        if (pointId === getters.hidePoint.pointId) return false;

        // Admin can see all points on map
        if (permissions.checkIsAdmin()) return true;

        if (pointType === MACROS.pointType.permanent) {
          // Point is not collected
          if (uCheck.isNull(pointCollectionTime)) return true;

          // Display points collected by user
          if (rootGetters['user/collectedPointsIds'].includes(pointId) === true) return true;

          // Point is permanent and collected, but user don't know it to next gap time
          // Gap time is last full time from mapRefreshTime counting from full hours
          const mapRefreshTimeInMinutes = state.mapRefreshTime / 60;
          const now = moment();
          const lastGapEndTime = moment(now).minutes((now.minute() - (now.minute() % mapRefreshTimeInMinutes))).seconds(0);
          const isBeforeLastGapEndTime = moment(pointCollectionTime).isBefore(lastGapEndTime);
          return isBeforeLastGapEndTime === false;
        }
        return rootGetters['event/checkTimeoutPointIsVisible']({
          pointAppearanceTime,
          pointExpirationTime,
        });
      });
    },
    ...Modules.getters,
  },
  mutations: {
    setEvent: (state, data) => {
      Object.assign(state, { ...data });
      state.mapDefaultLatitude = data.mapLatitude;
      state.mapDefaultLongitude = data.mapLongitude;
      state.mapDefaultZoom = data.mapZoom;
      const cookieJSON = Cookies.get('mapPosition');
      if (cookieJSON) {
        const cookie = JSON.parse(cookieJSON);
        state.mapLatitude = cookie.mapLatitude;
        state.mapLongitude = cookie.mapLongitude;
        state.mapZoom = cookie.mapZoom;
      }
    },
    setId: (state, payload) => (state.eventId = payload),
    ...Modules.mutations,
  },
  actions: {
    download (context, eventId = context.state.eventId) {
      return new Promise((resolve, reject) => {
        let event;
        api.getEventById({ eventId })
          .then(data => (event = data))
          .then(api.getCategoriesByEventId)
          .then(categories => (event.categories = categories))
          .then(() => {
            const IsBeforeStart = eventUtils.checkIfIsBeforeStart(event);
            const IsCommonUser = permissions.checkIsCommon();
            if (IsBeforeStart && IsCommonUser) return [];
            else return api.getPointsByEventId(event);
          })
          .then(points => {
            event.points = points.map(point => ({ ...point }));
            context.commit('setEvent', event);
            resolve(event);
          })
          .catch(reject);
      });
    },
    collectPoint (context, pointId) {
      return new Promise((resolve, reject) => {
        api.collectPoint({
          eventId: context.getters.eventId,
          user: context.rootGetters['user/user'],
          pointId,
        })
          .then(() => {
            context.commit('updatePoint', {
              pointId,
              pointCollectionTime: Date.now(),
            });
            context.commit('user/addCollectedPointId', pointId, { root: true });
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    updateEvent (context, updatedEvent = context.getters.eventBasicInformation) {
      return new Promise((resolve, reject) => {
        api.updateEvent(updatedEvent)
          .then(() => map.updateMapFeatures())
          .then(() => resolve())
          .catch(reject);
      });
    },
    ...Modules.actions,
  },
};
