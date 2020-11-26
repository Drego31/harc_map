import { ICONS } from 'src/__jscash__/icons-names-list';
import { translator } from 'src/dictionary';

export const ROUTES = {
  welcome: {
    path: '/',
    name: 'welcome',
    label: translator.t('title.welcome'),
    shortLabel: translator.t('title.welcome'),
    icon: ICONS.sensor_door,
  },
  about: {
    path: '/about',
    name: 'about',
    label: translator.t('title.about'),
    shortLabel: translator.t('title.about'),
    icon: ICONS.emoji_objects,
  },
  signIn: {
    path: '/sign-in',
    name: 'sign-in',
    label: translator.t('title.signIn'),
    shortLabel: translator.t('title.signIn'),
    icon: ICONS.login,
  },
  signUp: {
    path: '/sign-up',
    name: 'sign-up',
    label: translator.t('title.signUp'),
    shortLabel: translator.t('title.signUp'),
    icon: ICONS.how_to_reg,
  },
  remindPassword: {
    path: '/remind-password',
    name: 'remind-password',
    label: translator.t('title.remindPassword'),
    shortLabel: translator.t('title.remindPassword'),
    icon: ICONS.vpn_key,
  },
  changePassword: {
    path: '/user/remind/',
    pathWithParam: '/user/remind/:key',
    name: 'change-password',
    label: translator.t('title.changePassword'),
    shortLabel: translator.t('title.changePassword'),
    icon: ICONS.create,
  },
  start: {
    path: '/start',
    name: 'start',
    label: translator.t('title.start'),
    shortLabel: translator.t('title.start'),
    icon: ICONS.home,
  },
  temporaryPoints: {
    path: '/temporary-points',
    name: 'temporary-points',
    label: translator.t('title.temporaryPoints'),
    shortLabel: translator.t('title.short.temporaryPoints'),
    icon: ICONS.watch_later,
  },
  collectPoint: {
    path: '/collect-point',
    name: 'collect-point',
    label: translator.t('title.collectPoint'),
    shortLabel: translator.t('title.short.collectPoint'),
    icon: ICONS.star,
  },
  collectedPoints: {
    path: '/collected-points',
    name: 'collected-points',
    label: translator.t('title.collectedPoints'),
    shortLabel: translator.t('title.short.collectedPoints'),
    icon: ICONS.view_list,
  },
  map: {
    path: '/map',
    name: 'map',
    label: translator.t('title.map'),
    shortLabel: translator.t('title.map'),
    icon: ICONS.map,
  },
  editEvent: {
    path: '/edit-event',
    name: 'edit-event',
    label: translator.t('title.editEvent'),
    shortLabel: translator.t('title.short.editEvent'),
    icon: ICONS.edit,
  },
};
