import Vue from 'vue';
import Router from 'vue-router';
import { store } from 'store';
import { ROUTES } from 'utils/macros/routes';
import { api } from 'api';
import { promise } from 'utils/promise';
import { routes } from './routes';
import { versionCompatibility } from 'utils/version-compatibility';
import { ErrorMessage } from 'utils/error-message';
import { session } from 'utils/session';

let firstRun = true;

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let promise;
  if (firstRun) {
    firstRun = false;
    promise = makeFirstRun();
  } else {
    promise = Promise.resolve();
  }

  promise
    .catch((error) => {
      if (error instanceof ErrorMessage) error.showMessage();
      else console.error(error);
    })
    .finally(() => {
      redirectIfNotAuth(to, from, next);
      store.commit('menu/close');
    });
});

router.hardReload = function () {
  store.commit('increaseRouterId');
};

export default router;

function makeFirstRun () {
  return new Promise((resolve, reject) => {
    api.information()
      .then(versionCompatibility.check)
      .then(session.tryLogin)
      .then(resolve)
      .catch(reject)
      .finally(() => promise.timeout(1000))
      .finally(() => store.commit('setIsLoading', false));
  });
}

function redirectIfNotAuth (to, from, next) {
  const isLogin = store.getters['user/isLogin'] === true;
  const adminRequired = to.meta.adminOnly === true;
  const unlimitedOnly = to.meta.unlimitedOnly === true;
  const isAdmin = permissions.checkIsAdmin();
  const isLimitedUser = permissions.checkIsLimited();

  if (to === from) {
    next(false);
  }
  if (adminRequired && isAdmin === false) {
    if (isLogin) {
      next(ROUTES.start.path);
    } else {
      next(ROUTES.welcome.path);
    }
    return;
  }
  if (unlimitedOnly && isLimitedUser) {
    if (isLogin) {
      next(ROUTES.start.path);
    } else {
      next(ROUTES.welcome.path);
    }
    return;
  }
  if (isLogin) {
    if (to.meta.onlyBeforeLogin) {
      next(ROUTES.start.path);
      return;
    }
  } else {
    if (to.meta.requiredAuth === true) {
      next(ROUTES.welcome.path);
      return;
    }
  }
  next();
}
