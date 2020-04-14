import Vue from 'vue';
import Router from 'vue-router';
import { store } from 'store';
import PWelcome from 'pages/welcome';
import PSignIn from 'pages/sign-in';
import PSignUp from 'pages/sign-up';
import PRemindPassword from 'pages/remind-password';
import PMap from 'pages/map';
import PChangePassword from 'pages/change-password';
import PCollectPoint from 'pages/collect-point';
import PStart from 'pages/start';
import PCollectedPoints from 'pages/collected-points';
import PTemporaryPoints from 'pages/temporary-points';
import PError from 'pages/error';
import { ROUTES } from 'utils/macros/routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: ROUTES.welcome.path,
      name: ROUTES.welcome.name,
      component: PWelcome,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: ROUTES.signIn.path,
      name: ROUTES.signIn.name,
      component: PSignIn,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: ROUTES.signUp.path,
      name: ROUTES.signUp.name,
      component: PSignUp,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: ROUTES.remindPassword.path,
      name: ROUTES.remindPassword.name,
      component: PRemindPassword,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: ROUTES.changePassword.path,
      name: ROUTES.changePassword.name,
      component: PChangePassword,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: ROUTES.start.path,
      name: ROUTES.start.name,
      component: PStart,
      meta: {
        onlyBeforeLogin: false,
        requiredAuth: true,
      },
    },
    {
      path: ROUTES.temporaryPoints.path,
      name: ROUTES.temporaryPoints.name,
      component: PTemporaryPoints,
      meta: {
        onlyBeforeLogin: false,
        requiredAuth: true,
      },
    },
    {
      path: ROUTES.collectPoint.path,
      name: ROUTES.collectPoint.name,
      component: PCollectPoint,
      meta: {
        onlyBeforeLogin: false,
        requiredAuth: true,
      },
    },
    {
      path: ROUTES.collectedPoints.path,
      name: ROUTES.collectedPoints.name,
      component: PCollectedPoints,
      meta: {
        onlyBeforeLogin: false,
        requiredAuth: true,
      },
    },
    {
      path: ROUTES.map.path,
      name: ROUTES.map.name,
      component: PMap,
      meta: {
        onlyBeforeLogin: false,
        requiredAuth: true,
      },
    },
    {
      path: '*',
      name: 'error',
      component: PError,
      meta: {
        onlyBeforeLogin: false,
        requiredAuth: false,
      },
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  redirectIfNotAuth(to, next);
  store.commit('menu/close');
});

function redirectIfNotAuth (to, next) {
  const isLogin = store.getters['user/isLogin'] === true;

  if (to === next) {
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
