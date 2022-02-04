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
                        nav: {
                            dashboard: 'Dashboard',
                            buy: 'Buy / Sell',
                            news: 'News',
                            send: 'Send money',
                            deposit: 'Deposit',
                            transactions: 'Transactions',
                            account: 'Account',
                            settings: 'Settings'
                        }
                    }
                }
            },
            ru: {
                translation: {
                    nav: {
                        dashboard: 'Панель',
                        buy: 'Купить / Продать',
                        news: 'Новости',
                        send: 'Отправить деньги',
                        deposit: 'Депозит',
                        transactions: 'Переводы',
                        account: 'Аккаунт',
                        settings: 'Настройки'
                    }
                }
            },
            ua: {
                translation: {
                    nav: {
                        dashboard: 'Панель',
                        buy: 'Купити / Продати',
                        news: 'Новини',
                        send: 'Відправити гроші',
                        deposit: 'Депозит',
                        transactions: 'Перекази',
                        account: 'Аккаунт',
                        settings: 'Налаштування'
                    }
                }
            }
        }
    });

export default i18n;