import { Sitemap, injectI18n } from '@/src/utils/metadata';

export default function sitemap(): Sitemap {
  const CANONICAL = process.env.CANONICAL_URL ?? 'http://localhost:3000';

  return injectI18n(CANONICAL, [
    {
      url: '',
    },
  ]);
}
