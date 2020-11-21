import validateCodes from '../../../lib/validateCodes';

export const ERRORS = {
  eventIdIsRequired: '"eventId" param is required',
  elementIdIsRequiredForMap: 'elementId is necessary to create map',
  pointWithPointIdDoesntExist: pointId => `Punkt o kodzie "${pointId}" nie istnieje.`,
  fakeErrorInMockApi: 'Fake error in mockApi',
  dataAfterSignIn: 'Logowanie nie powiodło się ze względu na problem z pobraniem danych dotyczących konta.',
};

export const API_ERRORS = {
  undefined: {
    defaultError: 'Wystąpił niezdefiniowany błąd. Skontaktuj się z twórcą aplikacji.',
  },
  // EVENT
  getEventById: {
    defaultError: 'Pobieranie danych wydarzenia się nie powiodło.',
  },
  getPointsByEventId: {
    defaultError: 'Pobieranie punktów dla wybranego wydarzenia się nie powiodło.',
  },
  getCategoriesByEventId: {
    defaultError: 'Pobieranie kategorii dla wybranego wydarzenia się nie powiodło.',
  },
  collectPoint: {
    defaultError: 'Pobieranie kategorii dla wybranego wydarzenia się nie powiodło.',
    errors: [
      [
        validateCodes.DATABASE_DATA_CONFLICT_ERROR,
        'Punkt o podanym kodzie został zebrany już wcześniej.',
      ],
      [
        validateCodes.DATABASE_NO_RESULT_ERROR,
        'Punkt o podanym kodzie nie istnieje.',
      ],
    ],
  },
  // USER
  signIn: {
    defaultError: 'Logowanie nie powiodło się — błędny e-mail lub hasło.',
    errors: [
      [
        validateCodes.DATABASE_DATA_CONFLICT_ERROR,
        'Punkt o podanym kodzie został zebrany już wcześniej.',
      ],
    ],
  },
  checkYourLoginSession: {
    defaultError: 'Twoja sesja jest pusta — nie jesteś zalogowany.',
  },
  signUp: {
    defaultError: 'Rejestracja nie powiodła się ze względu na błąd serwera.',
  },
  remindPassword: {
    defaultError: 'Wysyłanie przypomnienia hasła nie powiodło się ze względu na błąd serwera.',
  },
  signOut: {
    defaultError: 'Wylogowanie po stronie serwera nie powiodło. Zostałeś wylogowany lokalnie.',
  },
  changePassword: {
    defaultError: 'Zmiana hasła się nie powiodła ze względu na błąd serwera.',
  },
};
