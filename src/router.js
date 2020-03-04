import Vue from 'vue';
import Router from 'vue-router';
import { store } from 'store';
import PStart from 'pages/start';
import PSignIn from 'pages/sign-in';
import PSignUp from 'pages/sign-up';
import PRemindPassword from 'pages/remind-password';
import PMap from 'pages/map';
import PChangePassword from 'pages/change-password';
import PCollectPoint from 'pages/collect-point';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: PStart,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: PSignIn,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: PSignUp,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: '/remind-password',
      name: 'remind-password',
      component: PRemindPassword,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: '/map',
      name: 'map',
      component: PMap,
      meta: {
        onlyBeforeLogin: false,
        requiredAuth: true,
      },
    },
    {
      path: '/collect-point',
      name: 'collect-point',
      component: PCollectPoint,
      meta: {
        onlyBeforeLogin: false,
        requiredAuth: true,
      },
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: PChangePassword,
      meta: {
        onlyBeforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: '*',
      redirect: '/',
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
      next('/map');
      return;
    }
  } else {
    if (to.meta.requiredAuth === true) {
      next('/');
      return;
    }
  }
  next();
}
