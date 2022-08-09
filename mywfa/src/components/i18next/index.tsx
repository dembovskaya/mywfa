import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./translations/en";
import ru from "./translations/ru";

// @ts-ignore
i18n.use(LanguageDetector).init({
  resources: {
    ru,
    en,
  },
  fallbackLng: "en",
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
