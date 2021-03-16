import { ROUTES } from 'utils/macros/routes';
import PWelcome from 'pages/welcome';
import PError from 'pages/error';

export const routes = [
  {
    path: ROUTES.welcome.path,
    name: ROUTES.welcome.name,
    component: PWelcome,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.about.path,
    name: ROUTES.about.name,
    component: () => import('pages/about.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.signIn.path,
    name: ROUTES.signIn.name,
    component: () => import('pages/sign-in.vue'),
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.signUp.path,
    name: ROUTES.signUp.name,
    component: () => import('pages/sign-up.vue'),
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.remindPassword.path,
    name: ROUTES.remindPassword.name,
    component: () => import('pages/remind-password.vue'),
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.changePassword.pathWithParam,
    name: ROUTES.changePassword.name,
    component: () => import('pages/change-password.vue'),
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.start.path,
    name: ROUTES.start.name,
    component: () => import('pages/start.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  {
    path: ROUTES.temporaryPoints.path,
    name: ROUTES.temporaryPoints.name,
    component: () => import('pages/timeout-points.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  {
    path: ROUTES.collectPoint.path,
    name: ROUTES.collectPoint.name,
    component: () => import('pages/collect-point.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  {
    path: ROUTES.collectedPoints.path,
    name: ROUTES.collectedPoints.name,
    component: () => import('pages/collected-points.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  {
    path: ROUTES.map.path,
    name: ROUTES.map.name,
    component: () => import('pages/map.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  {
    path: ROUTES.adminPanel.path,
    name: ROUTES.adminPanel.name,
    component: () => import('pages/admin/panel.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
    },
  },
  {
    path: ROUTES.editEvent.path,
    name: ROUTES.editEvent.name,
    component: () => import('pages/admin/edit-event.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
    },
  },
  {
    path: ROUTES.scoreboard.path,
    name: ROUTES.scoreboard.name,
    component: () => import('pages/admin/scoreboard.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
    },
  },
  {
    path: ROUTES.editPoint.path,
    name: ROUTES.editPoint.name,
    component: () => import('pages/admin/edit-point.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
    },
  },
  {
    path: ROUTES.newPoint.path,
    name: ROUTES.newPoint.name,
    component: () => import('pages/admin/new-point.vue'),
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
      adminOnly: true,
    },
  },
  {
    path: '*',
    name: 'error',
    component: PError,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: false,
    },
  },
];
