import Vue from 'vue';
import i18n from './dictionary';
import router from './router';
import uuidInit from './utils/uuid';
import { store } from 'store';
import { styleManager } from 'utils/style-manager';
import './directives';
import './validation';
import { ROUTES } from 'utils/macros/routes';
import { ACCOUNT_TYPES, permissions } from 'utils/permissions';
import App from './components/app.vue';
import VueEllipseProgress from 'vue-ellipse-progress';
import Vue2TouchEvents from 'vue2-touch-events';
import 'utils/dev-mode/auto-login';
import VueMaterialIcons from '@dbetka/vue-material-icons';

styleManager.init();
uuidInit();

Vue.config.productionTip = false;

if (PRODUCTION === false) {
  console.log(APP_NAME + ' v' + VERSION + ' in development mode');
}

Vue.mixin({
  computed: {
    ROUTES: () => ROUTES,
    ACCOUNT_TYPES: () => ACCOUNT_TYPES,
  },
  methods: {
    checkPermissions: permissions.checkPermissions,
    checkIsAdmin: permissions.checkIsAdmin,
    checkIsCommon: permissions.checkIsCommon,
    checkIsLimited: permissions.checkIsLimited,
    checkIsNotLimited: permissions.checkIsNotLimited,
    checkLimitingForRoute: permissions.checkLimitingForRoute,
  },
});

Vue.use(Vue2TouchEvents);
Vue.use(VueEllipseProgress);
Vue.use(VueMaterialIcons);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
