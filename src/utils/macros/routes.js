export const ROUTES = {
  welcome: {
    path: '/',
    name: 'welcome',
    label: 'Strona startowa',
  },
  signIn: {
    path: '/sign-in',
    name: 'sign-in',
    label: 'Logowanie',
  },
  signUp: {
    path: '/sign-up',
    name: 'sign-up',
    label: 'Rejestracja',
  },
  remindPassword: {
    path: '/remind-password',
    name: 'remind-password',
    label: 'Przypomnij hasło',
  },
  changePassword: {
    path: '/user/remind/',
    pathWithParam: '/user/remind/:key',
    name: 'change-password',
    label: 'Zmień hasło',
  },
  start: {
    path: '/start',
    name: 'start',
    label: 'Start',
  },
  temporaryPoints: {
    path: '/temporary-points',
    name: 'temporary-points',
    label: 'Czasowe',
  },
  collectPoint: {
    path: '/collect-point',
    name: 'collect-point',
    label: 'Zbierz punkt',
  },
  collectedPoints: {
    path: '/collected-points',
    name: 'collected-points',
    label: 'Zebrane punkty',
  },
  map: {
    path: '/map',
    name: 'map',
    label: 'Mapa',
  },
};
