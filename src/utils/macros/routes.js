export const ROUTES = {
  welcome: {
    path: '/',
    name: 'welcome',
    label: 'Strona startowa',
    shortLabel: 'Strona startowa',
  },
  about: {
    path: '/about',
    name: 'about',
    label: 'O nas',
    shortLabel: 'O nas',
  },
  signIn: {
    path: '/sign-in',
    name: 'sign-in',
    label: 'Logowanie',
    shortLabel: 'Logowanie',
  },
  signUp: {
    path: '/sign-up',
    name: 'sign-up',
    label: 'Rejestracja',
    shortLabel: 'Rejestracja',
  },
  remindPassword: {
    path: '/remind-password',
    name: 'remind-password',
    label: 'Przypomnij hasło',
    shortLabel: 'Przypomnij hasło',
  },
  changePassword: {
    path: '/user/remind/',
    pathWithParam: '/user/remind/:key',
    name: 'change-password',
    label: 'Zmień hasło',
    shortLabel: 'Zmień hasło',
  },
  start: {
    path: '/start',
    name: 'start',
    label: 'Start',
    shortLabel: 'Start',
  },
  temporaryPoints: {
    path: '/temporary-points',
    name: 'temporary-points',
    label: 'Punkty czasowe',
    shortLabel: 'Czasowe',
  },
  collectPoint: {
    path: '/collect-point',
    name: 'collect-point',
    label: 'Zbierz punkt',
    shortLabel: 'Zbierz pkt',
  },
  collectedPoints: {
    path: '/collected-points',
    name: 'collected-points',
    label: 'Zebrane punkty',
    shortLabel: 'Zebrane',
  },
  map: {
    path: '/map',
    name: 'map',
    label: 'Mapa',
    shortLabel: 'Mapa',
  },
};
