import Link from 'next/link';
import { ComponentProps } from 'react';

import { Locale } from '@/i18n-config';

export interface I18nLinkProps {
  href?: string;
  targetLang: Locale;
}
