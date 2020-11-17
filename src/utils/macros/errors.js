export const ERRORS = {
  undefinedError: 'Wystąpił niezdefiniowany błąd. Skontaktuj się z twórcą aplikacji.',
  eventIdIsRequired: '"eventId" param is required',
  getEventById: 'Pobieranie danych wydarzenia nie powiodło się.',
  getPoints: 'Pobieranie punktów dla wybranego wydarzenia nie powiodło się.',
  getCategories: 'Pobieranie kategorii dla wybranego wydarzenia nie powiodło się.',
  elementIdIsRequiredForMap: 'elementId is necessary to create map',
  pointWithPointIdDoesntExist: pointId => `Punkt o kodzie "${pointId}" nie istnieje.`,
  pointIsCollected: 'Punkt o podanym kodzie został zebrany już wcześniej.',
  pointNotExists: 'Punkt o podanym kodzie nie istnieje.',
  fakeErrorInMockApi: 'Fake error in mockApi',
  signIn: 'Logowanie nie powiodło się - błędny e-mail lub hasło.',
  dataAfterSignIn: 'Logowanie nie powiodło się ze względu na problem z pobraniem danych dotyczących konta.',
  signUp: 'Sign up went wrong',
  remindPassword: 'Wysyłanie przypomnienia hasła nie powiodło się. ' +
    'Skontaktuj się z administratorem wydarzenia.',
  signOut: 'Wylogowanie po stronie serwera nie powiodło. Zostałeś wylogowany lokalnie.',
  collectPoint: 'Zabranie punktu nie powiodło się przez problem z serwerem.',
};
