import Vue from 'vue';
import App from './components/app.vue';
import router from './router';
import { store } from './store';
import { styleManager } from 'utils/style-manager';

styleManager.init();

Vue.config.productionTip = false;

if (PRODUCTION === false) {
  console.log(APP_NAME + ' v' + VERSION + ' in development mode');
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
