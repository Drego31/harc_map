export const ERRORS = {
  eventIdIsRequired: '"eventId" param is required',
  getEventById: 'Event data can not be download',
  elementIdIsRequiredForMap: 'elementId is necessary to create map',
  pointWithPointIdDoesntExist: pointId => `Punkt o kodzie "${pointId}"` +
    ' nie istnieje.',
  fakeErrorInMockApi: 'Fake error in mockApi',
  signIn: 'Logowanie nie powiodło się - błędny e-mail lub hasło.',
  signUp: 'Sign up went wrong',
  remindPassword: 'Wysyłanie przypomnienia hasła nie powiodło się. ' +
    'Skontaktuj się z administratorem wydarzenia.',
  signOut: 'Sign out went wrong',
  collectPoint: 'Collecting point went wrong',
  updateEvent: 'Something went wrong, event has not been updated',
};
