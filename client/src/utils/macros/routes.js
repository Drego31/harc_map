import { ICONS } from '@dbetka/vue-material-icons';
import { translator } from 'src/dictionary';

export function getDataForRouter (route) {
  return {
    path: route.path,
    name: route.name,
    meta: route.meta,
  };
}

export const ROUTES = {
  error: {
    path: '*',
    name: 'error',
    label: translator.t('title.error'),
    shortLabel: translator.t('title.short.error'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: false,
    },
  },
  welcome: {
    path: '/',
    name: 'welcome',
    label: '',
    shortLabel: '',
    icon: ICONS.sensor_door,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  about: {
    path: '/about',
    name: 'about',
    label: translator.t('title.about'),
    shortLabel: translator.t('title.about'),
    icon: ICONS.emoji_objects,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: false,
    },
  },
  signIn: {
    path: '/sign-in',
    name: 'signIn',
    label: translator.t('title.signIn'),
    shortLabel: translator.t('title.signIn'),
    icon: ICONS.login,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  signUp: {
    path: '/sign-up',
    name: 'signUp',
    label: translator.t('title.signUp'),
    shortLabel: translator.t('title.signUp'),
    icon: ICONS.how_to_reg,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  activationDone: {
    path: '/activation-done',
    name: 'activationDone',
    label: translator.t('title.activationDone'),
    shortLabel: translator.t('title.activationDone'),
    icon: ICONS.how_to_reg,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  activationWrong: {
    path: '/activation-wrong',
    name: 'activationWrong',
    label: translator.t('title.activationWrong'),
    shortLabel: translator.t('title.activationWrong'),
    icon: ICONS.how_to_reg,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  remindPassword: {
    path: '/remind-password',
    name: 'remindPassword',
    label: translator.t('title.remindPassword'),
    shortLabel: translator.t('title.remindPassword'),
    icon: ICONS.vpn_key,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  changePassword: {
    path: '/user/remind/:key',
    pathWithoutParam: '/user/remind/',
    name: 'changePassword',
    label: translator.t('title.changePassword'),
    shortLabel: translator.t('title.changePassword'),
    icon: ICONS.create,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  start: {
    path: '/start',
    name: 'start',
    label: translator.t('title.start'),
    shortLabel: translator.t('title.start'),
    icon: ICONS.home,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  timeoutPoints: {
    path: '/timeout-points',
    name: 'timeoutPoints',
    label: translator.t('title.timeoutPoints'),
    shortLabel: translator.t('title.short.timeoutPoints'),
    icon: ICONS.watch_later,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  collectPoint: {
    path: '/collect-point',
    name: 'collectPoint',
    label: translator.t('title.collectPoint'),
    shortLabel: translator.t('title.short.collectPoint'),
    icon: ICONS.add,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  collectedPoints: {
    path: '/collected-points',
    name: 'collectedPoints',
    label: translator.t('title.collectedPoints'),
    shortLabel: translator.t('title.short.collectedPoints'),
    icon: ICONS.bar_chart,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  map: {
    path: '/map',
    name: 'map',
    label: translator.t('title.map'),
    shortLabel: translator.t('title.map'),
    icon: ICONS.map,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  adminPanel: {
    path: '/admin-panel',
    name: 'adminPanel',
    label: translator.t('title.adminPanel'),
    shortLabel: translator.t('title.short.adminPanel'),
    icon: ICONS.settings,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
      unlimitedOnly: true,
    },
  },
  spectatorPanel: {
    path: '/spectator-panel',
    name: 'spectatorPanel',
    label: translator.t('title.spectatorPanel'),
    shortLabel: translator.t('title.short.spectatorPanel'),
    icon: ICONS.settings,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
    },
  },
  editEvent: {
    path: '/edit-event',
    name: 'editEvent',
    label: translator.t('title.editEvent'),
    shortLabel: translator.t('title.short.editEvent'),
    icon: ICONS.event,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
      unlimitedOnly: true,
    },
  },
  newPoint: {
    path: '/new-point',
    name: 'newPoint',
    label: translator.t('title.newPoint'),
    shortLabel: translator.t('title.newPoint'),
    icon: ICONS.add_location_alt,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
      unlimitedOnly: true,
    },
  },
  editPoint: {
    path: '/edit-point/:pointId',
    name: 'editPoint',
    label: translator.t('title.editPoint'),
    shortLabel: translator.t('title.editPoint'),
    icons: ICONS.edit,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
      unlimitedOnly: true,
    },
  },
  scoreboard: {
    path: '/scoreboard',
    name: 'scoreboard',
    label: translator.t('title.scoreboard'),
    shortLabel: translator.t('title.short.scoreboard'),
    icon: ICONS.bar_chart,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
    },
  },
  searchPoint: {
    path: '/search-point',
    name: 'searchPoint',
    label: translator.t('title.searchPoint'),
    shortLabel: translator.t('title.short.searchPoint'),
    icon: ICONS.search,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
    },
  },
};
