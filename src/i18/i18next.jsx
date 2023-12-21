import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ua from "./ua.json";
import ru from "./ru.json";


const resources = {
    en: {
        translation: en,
    },
    ua:{
        translation: ua
    },
    ru:{
        translation: ru
    }
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // Set the default language
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;
