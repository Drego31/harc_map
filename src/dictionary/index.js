import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { messages } from 'src/dictionary/messages';

Vue.use(VueI18n);

export const translator = new VueI18n({
  locale: 'pl',
  messages,
});

export default translator;
