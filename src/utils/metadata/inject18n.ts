import { getObjectKeys } from '@xenopomp/advanced-utils';
import { MetadataRoute } from 'next';

import { dictionaries } from '@/get-dictionary';

export type Sitemap = MetadataRoute.Sitemap;

/**
 * Inject i18n routing to sitemap.
 *
 * @param canonicalUrl
 * @param routes
 *
 * @example
 * return injectI18n('http://localhost:3000', [
 *     {
 *       url: '',
 *     },
 *     {
 *       url: '/projects',
 *     },
 * ]);
 */
export const injectI18n = (canonicalUrl: string, routes: Sitemap): Sitemap => {
  return routes.flatMap(({ url, ...rest }) => {
    /** Get all locales as array. */
    const locales = getObjectKeys(dictionaries);

    /** Filters url from unexpected chars. */
    const filterUrl = (target: string): string => {
      return target.replace(/\/{2,}/gi, '/');
    };

    return locales.map(loc => ({
      url: filterUrl(`${canonicalUrl}/${loc}/${url}`),
      ...rest,
    }));
  });
};
