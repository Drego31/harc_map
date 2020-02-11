import Vue from 'vue'
import Router from 'vue-router'
import Products from 'components/pages/products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products,
      showCart: true,
    },
  ],
})
