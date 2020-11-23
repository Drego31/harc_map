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
import i18n from './dictionary';

styleManager.init();

Vue.config.productionTip = false;

if (PRODUCTION === false) {
  console.log(APP_NAME + ' v' + VERSION + ' in development mode');
}

Vue.mixin({
  computed: {
    ROUTES: () => ROUTES,
    ICONS: () => ICONS,
    ACCOUNT_TYPES: () => ACCOUNT_TYPES,
  },
  methods: {
    checkPermissions: permissions.check,
    checkIsAdmin: permissions.checkIsAdmin,
    checkIsCommon: permissions.checkIsCommon,
  },
});

console.log(i18n.t('hi'));

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
