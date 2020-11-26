import validateCodes from '../../../lib/validateCodes';
import { translator } from 'src/dictionary';

export const ERRORS = {
  eventIdIsRequired: translator.t('error.eventIdIsRequired'),
  elementIdIsRequiredForMap: translator.t('error.elementIdIsRequiredForMap'),
  fakeErrorInMockApi: translator.t('error.fakeErrorInMockApi'),
  dataAfterSignIn: translator.t('error.dataAfterSignIn'),
};

export const API_ERRORS = {
  undefined: {
    defaultError: translator.t('apiError.undefined'),
  },
  // EVENT
  getEventById: {
    defaultError: translator.t('apiError.getEventById'),
  },
  getPointsByEventId: {
    defaultError: translator.t('apiError.getPointsByEventId'),
  },
  getCategoriesByEventId: {
    defaultError: translator.t('apiError.getCategoriesByEventId'),
  },
  updateEvent: {
    defaultError: translator.t('apiError.updateEvent'),
  },
  collectPoint: {
    defaultError: translator.t('apiError.collectPoint'),
    errors: [
      [
        [validateCodes.DATABASE_DATA_CONFLICT_ERROR],
        translator.t('apiError.pointCollectedEarlier'),
      ],
      [
        [validateCodes.DATABASE_NO_RESULT_ERROR],
        translator.t('apiError.pointNoExist'),
      ],
    ],
  },

  // USER
  signIn: {
    defaultError: translator.t('apiError.signIn'),
    errors: [
      [
        [
          validateCodes.SESSION_ERROR,
          validateCodes.IS_NOT_EMAIL,
          validateCodes.PASSWORD_TOO_SHORT,
          validateCodes.PASSWORD_HAS_NOT_NUMBER,
        ],
        translator.t('apiError.signInData'),
      ],
    ],
  },
  checkYourLoginSession: {
    defaultError: translator.t('apiError.checkYourLoginSession'),
  },
  signUp: {
    defaultError: translator.t('apiError.signUp'),
  },
  remindPassword: {
    defaultError: translator.t('apiError.remindPassword'),
  },
  signOut: {
    defaultError: translator.t('apiError.signOut'),
  },
  changePassword: {
    defaultError: translator.t('apiError.changePassword'),
  },
};
