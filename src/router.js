import Vue from 'vue'
import Router from 'vue-router'
import PSignIn from 'components/pages/sign-in'
import PSignUp from 'components/pages/sign-up'
import PMap from 'components/pages/map'
import store from 'store'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: PSignIn,
      meta: {
        requiredAuth: false,
      },
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: PSignUp,
      meta: {
        requiredAuth: false,
      },
    },
    {
      path: '/map',
      name: 'map',
      component: PMap,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth === true) {
    const isLogin = store.getters['user/isLogin'] === true

    next(isLogin ? undefined : '/')
  } else {
    next()
  }
})
