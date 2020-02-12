import Vue from 'vue'
import Router from 'vue-router'
import PSignIn from 'components/pages/sign-in'
import PSignUp from 'components/pages/sign-up'
import PMap from 'components/pages/map'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: PSignIn,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: PSignUp,
    },
    {
      path: '/map',
      name: 'map',
      component: PMap,
    },
  ],
})
