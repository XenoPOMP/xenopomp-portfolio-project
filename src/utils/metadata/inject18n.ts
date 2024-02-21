import { getObjectKeys } from '@xenopomp/advanced-utils';
import { MetadataRoute } from 'next';

import { dictionaries } from '@/get-dictionary';

export type Sitemap = MetadataRoute.Sitemap;

/**
 * Inject i18n routing to sitemap.
 * @param canonicalUrl
 * @param routes
 */
export const injectI18n = (canonicalUrl: string, routes: Sitemap): Sitemap => {
  return routes.flatMap(({ url, ...rest }) => {
    const locales = getObjectKeys(dictionaries);

    return locales.map(loc => ({
      url: `${canonicalUrl}/${loc}/${url}`,
      ...rest,
    }));
  });
};
