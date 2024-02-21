import { Locale } from '@/i18n-config';

export type LangParams = {
  params: { lang: Locale };
};

/**
 * Helper type to add lang param to any component props.
 */
export type WithLocale<T> = T & Pick<LangParams['params'], 'lang'>;
