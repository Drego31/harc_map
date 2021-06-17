import { generateRandomStringWithoutSimilarChars } from 'vendors/random';
import { store } from 'store';
import { uCheck } from '@dbetka/utils';

export const idUtils = {
  generateNewId () {
    function getRandomId () {
      const id = generateRandomStringWithoutSimilarChars(4);
      if (uCheck.isUndefined(store.getters['event/getPointById'](id))) {
        return id;
      }
      return getRandomId();
    }

    return getRandomId();
  },
};
