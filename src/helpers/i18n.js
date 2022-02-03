import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    translation: {
                        description: {
                            part1: 'Edit <1>src/App.js</1> and save to reload.',
                        }
                    }
                }
            },
            ru: {
                translation: {
                    description: {
                        part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
                    }
                }
            }
        }
    });

export default i18n;