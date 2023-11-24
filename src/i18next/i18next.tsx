
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const storedLanguage = localStorage.getItem('language') || 'en'; 


i18n.use(initReactI18next).init({
  resources: {     
    en: { translation: require('./en.json') },
    ru: { translation: require('./ru.json') },
  },
  lng: storedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

