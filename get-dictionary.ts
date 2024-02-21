import 'server-only';

import { type Locale } from './i18n-config';

interface LocalizationData {
  header: {
    nav: {
      label: string;
    };
  };
}

const dictionaries: Record<Locale, () => Promise<LocalizationData>> = {
  ru: () => import('./dictionaries/ru.json').then(module => module.default),
  en: () => import('./dictionaries/en.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
