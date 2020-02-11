import Vue from 'vue'
import App from 'components/app.vue'
import router from './router'
import store from './store'

import './style'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
