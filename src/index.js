import Vue from 'vue';
import App from './components/app.vue';
import router from './router';
import { store } from './store';
import { styleManager } from 'utils/style-manager';
import './directives';
import './validation';
import { ROUTES } from 'utils/macros/routes';
import { ICONS } from './__jscash__/icons-names-list';
import { ACCOUNT_TYPES, permissions } from 'utils/permissions';

styleManager.init();

Vue.config.productionTip = false;

if (PRODUCTION === false) {
  console.log(APP_NAME + ' v' + VERSION + ' in development mode');
}

Vue.mixin({
  computed: {
    ROUTES: () => ROUTES,
    ICONS: () => ICONS,
    ACCOUNT_TYPES: ACCOUNT_TYPES,
  },
  methods: {
    checkPermissions: permissions.check(),
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
