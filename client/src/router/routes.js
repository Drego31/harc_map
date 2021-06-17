import { getDataForRouter, ROUTES } from 'utils/macros/routes';
import PWelcome from 'pages/welcome';
import PError from 'pages/error';

export const routes = [
  [ROUTES.error, PError],
  [ROUTES.welcome, PWelcome],
  [ROUTES.about, () => import('pages/about.vue')],
  [ROUTES.signIn, () => import('pages/sign-in.vue')],
  [ROUTES.signUp, () => import('pages/sign-up.vue')],
  [ROUTES.activationDone, () => import('pages/activation-done.vue')],
  [ROUTES.activationWrong, () => import('pages/activation-wrong.vue')],
  [ROUTES.remindPassword, () => import('pages/remind-password.vue')],
  [ROUTES.changePassword, () => import('pages/change-password.vue')],
  [ROUTES.start, () => import('pages/start.vue')],
  [ROUTES.timeoutPoints, () => import('pages/timeout-points.vue')],
  [ROUTES.collectPoint, () => import('pages/collect-point.vue')],
  [ROUTES.collectedPoints, () => import('pages/collected-points.vue')],
  [ROUTES.map, () => import('pages/map.vue')],
  [ROUTES.adminPanel, () => import('pages/admin/panel.vue')],
  [ROUTES.spectatorPanel, () => import('pages/admin/panel.vue')],
  [ROUTES.editEvent, () => import('pages/admin/edit-event.vue')],
  [ROUTES.newPoint, () => import('pages/admin/new-point.vue')],
  [ROUTES.editPoint, () => import('pages/admin/edit-point.vue')],
  [ROUTES.scoreboard, () => import('pages/admin/scoreboard.vue')],
  [ROUTES.searchPoint, () => import('pages/admin/search-point.vue')],
]
  .map(([route, component]) => ({
    ...getDataForRouter(route),
    component,
  }));
