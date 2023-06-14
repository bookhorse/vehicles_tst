import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationRU from './ru/translation.json';

export const resources = {
  en: {
    label: 'English',
    translation: translationEN,
  },
  ru: {
    label: 'Russian',
    translation: translationRU,
  },
};

export const changeLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
