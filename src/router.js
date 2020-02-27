import Vue from 'vue';
import Router from 'vue-router';
import PSignIn from 'pages/sign-in';
import PSignUp from 'pages/sign-up';
import PRemindPassword from 'pages/remind-password';
import PMap from 'pages/map';
import store from 'store';
import PChangePassword from 'pages/change-password';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: PSignIn,
      meta: {
        beforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: PSignUp,
      meta: {
        beforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: '/remind-password',
      name: 'remind-password',
      component: PRemindPassword,
      meta: {
        beforeLogin: true,
        requiredAuth: false,
      },
    },
    {
      path: '/map',
      name: 'map',
      component: PMap,
      meta: {
        beforeLogin: false,
        requiredAuth: true,
      },
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: PChangePassword,
      meta: {
        beforeLogin: true,
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

  if (isLogin) {
    if (to.meta.beforeLogin) {
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
