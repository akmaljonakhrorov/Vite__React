import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import uzTranslation from "../public/uz.json";
import ruTranslation from "../public/ru.json";
import enTranslation from "../public/en.json";
const language = localStorage.getItem("i18nextLng") || "uz";
i18n
  .use(Backend)
  // detect the language
  .use(languageDetector)
  // connect the language
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: language,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation },
    },
  });
export default i18n;
