import { hasNoError } from 'api/real/real';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';

const requireMethod = (methodName) => () => {
  throw new Error(methodName + ' method required');
};

export const apiResponseService = {
  takeOverResponse ({
    data,
    success = requireMethod('success'),
    reject = requireMethod('reject'),
    errors = {},
    defaultError = ERRORS.undefinedError,
  }) {
    if (hasNoError(data)) {
      success();
    } else {
      this.catchError({
        data,
        errors,
        reject,
        defaultError,
      });
    }
  },
  catchError ({ data, errors = {}, reject, defaultError }) {
    let errorMessage = defaultError;
    for (const [code, message] of errors) {
      if (data.error === code) {
        errorMessage = message;
        break;
      }
    }
    reject(new ErrorMessage(errorMessage));
  },
};
