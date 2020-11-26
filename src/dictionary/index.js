import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { pl } from 'src/dictionary/language/pl';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'pl',
  messages: {
    pl,
  },
});

export const translator = i18n;
export default i18n;
