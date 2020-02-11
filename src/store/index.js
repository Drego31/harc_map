import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'
import cart from './cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products,
    cart,
  },
})
export default store
