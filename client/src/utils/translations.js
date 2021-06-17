import { translator } from 'src/dictionary';

export const apiErrorTranslationFactory = (category) => {
  const root = 'apiError';
  const categoryPrefix = `${root}.${category}`;
  return (name) => translator.t(`${categoryPrefix}.${name}`);
};
