import 'server-only';

import { type Locale } from './i18n-config';

export interface LocalizationData {
  header: {
    nav: {
      projects: string;
      aboutMe: string;
    };
  };

  main: {
    sections: {
      aboutMe: {
        heading: string;
        iam: string;
        frontendDev: string;
        desc: string;
      };
    };
  };
}

export const dictionaries: Record<Locale, () => Promise<LocalizationData>> = {
  ru: () => import('./dictionaries/ru.json').then(module => module.default),
  en: () => import('./dictionaries/en.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ru();
