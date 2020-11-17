import { hasNoError } from 'api/real/real';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';

const requireMethod = (methodName) => () => {
  throw new Error(methodName + ' method required');
};

/**
 * @param errors - example:
 *   errors: [
 *     [validateCodes.DATABASE_DATA_CONFLICT_ERROR, ERRORS.pointIsCollected],
 *     [validateCodes.DATABASE_NO_RESULT_ERROR, ERRORS.pointNotExists],
 *   ],
 */
export const apiResponseService = {
  takeOverResponse ({
    data,
    resolve = requireMethod('success'),
    reject = requireMethod('reject'),
    errors = [],
    defaultError = ERRORS.undefinedError,
  }) {
    if (hasNoError(data)) {
      resolve();
    } else {
      this.catchError({
        data,
        reject,
        errors,
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
