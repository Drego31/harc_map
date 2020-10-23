import Vue from 'vue';
import Router from 'vue-router';
import { store } from 'store';
import { ROUTES } from 'utils/macros/routes';
import { api } from 'api/index';
import { promise } from 'utils/promise';
import { routes } from './routes';

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
    .catch((e) => console.error(e))
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
    api.checkYourLoginSession()
      .then(data => store.dispatch('user/signIn', data))
      .then(() => resolve())
      .catch(reject)
      .finally(() => promise.timeout(1000))
      .finally(() => store.commit('setIsLoading', false));
  });
}

function redirectIfNotAuth (to, from, next) {
  const isLogin = store.getters['user/isLogin'] === true;

  if (to === from) {
    next(false);
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
