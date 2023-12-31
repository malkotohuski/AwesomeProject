import i18next from 'i18next';
import english from './english.json';
import italian from './italian.json';
import german from './german.json';
import french from './french.json';
import { initReactI18next } from 'react-i18next';


i18next.use(initReactI18next).init({
    debug: true,
    lng: 'en',
    resources: {
        en: english,
        it: italian,
        de: german,
        fr: french,
    },
    react: {
        useSuspense: false,
    },
});

export default i18next;