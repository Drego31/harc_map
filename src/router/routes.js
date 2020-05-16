import { ROUTES } from 'utils/macros/routes';
import PWelcome from 'pages/welcome';
import PAbout from 'pages/about';
import PSignIn from 'pages/sign-in';
import PSignUp from 'pages/sign-up';
import PRemindPassword from 'pages/remind-password';
import PChangePassword from 'pages/change-password';
import PStart from 'pages/start';
import PTemporaryPoints from 'pages/temporary-points';
import PCollectPoint from 'pages/collect-point';
import PCollectedPoints from 'pages/collected-points';
import PMap from 'pages/map';
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
    component: PAbout,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.signIn.path,
    name: ROUTES.signIn.name,
    component: PSignIn,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.signUp.path,
    name: ROUTES.signUp.name,
    component: PSignUp,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.remindPassword.path,
    name: ROUTES.remindPassword.name,
    component: PRemindPassword,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.changePassword.pathWithParam,
    name: ROUTES.changePassword.name,
    component: PChangePassword,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
  },
  {
    path: ROUTES.start.path,
    name: ROUTES.start.name,
    component: PStart,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  {
    path: ROUTES.temporaryPoints.path,
    name: ROUTES.temporaryPoints.name,
    component: PTemporaryPoints,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  {
    path: ROUTES.collectPoint.path,
    name: ROUTES.collectPoint.name,
    component: PCollectPoint,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  {
    path: ROUTES.collectedPoints.path,
    name: ROUTES.collectedPoints.name,
    component: PCollectedPoints,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
  },
  {
    path: ROUTES.map.path,
    name: ROUTES.map.name,
    component: PMap,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
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
