export const ERRORS = {
  eventIdIsRequired: '"eventId" param is required',
  getEventById: 'Event data can not be download',
  elementIdIsRequiredForMap: 'elementId is necessary to create map',
  pointWithPointIdDoesntExist: pointId => `Punkt o kodzie "${pointId}"` +
    ' nie istnieje.',
  fakeErrorInMockApi: 'Fake error in mockApi',
  signIn: 'Logowanie nie powiodło się - błędny e-mail lub hasło.',
  dataAfterSignIn: 'Logowanie nie powiodło się ze względu na problem z pobraniem danych dotyczących konta.',
  signUp: 'Sign up went wrong',
  remindPassword: 'Wysyłanie przypomnienia hasła nie powiodło się. ' +
    'Skontaktuj się z administratorem wydarzenia.',
  signOut: 'Wylogowanie po stronie serwera nie powiodło. Zostałeś wylogowany lokalnie.',
  collectPoint: 'Zabranie punktu nie powiodło się przez problem z serwerem.',
  pointIsCollected: 'Punkt o podanym kodzie został zebrany już wcześniej.',
};
