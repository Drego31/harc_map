import Vue from 'vue';
import i18n from './dictionary';
import router from './router';
import uuidInit from './utils/uuid';
import { store } from 'store';
import { styleManager } from 'utils/style-manager';
import './directives';
import './validation';
import { ROUTES } from 'utils/macros/routes';
import { ICONS } from './__jscash__/icons-names-list';
import { ACCOUNT_TYPES, permissions } from 'utils/permissions';
import App from './components/app.vue';
import { App as NativeApp } from '@capacitor/app';
import VueEllipseProgress from 'vue-ellipse-progress';
import Vue2TouchEvents from 'vue2-touch-events';
import 'utils/dev-mode/auto-login';
import VueMaterialIcons from '@dbetka/vue-material-icons';
import { LocalNotifications } from '@capacitor/local-notifications';

styleManager.init();
uuidInit();

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

// LocalNotifications.schedule({
//   notifications: [
//     {
//       title: 'On sale',
//       body: 'Widgets are 10% off. Act fast!',
//       id: 1,
//       schedule: { at: new Date(Date.now() + 1000 * 5) },
//       sound: null,
//       attachments: null,
//       actionTypeId: '',
//       extra: null,
//     },
//   ],
// });
LocalNotifications.addListener(
  'localNotificationActionPerformed',
  some => alert('ok ' + JSON.stringify(some)),
);

NativeApp.addListener('backButton', ({ canGoBack }) => {
  if (canGoBack) router.back();
  else NativeApp.exitApp();
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
