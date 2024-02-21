'use client';

import { PropsWith } from '@xenopomp/advanced-types';
import { getObjectKeys } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { Locale } from '@/i18n-config';

import styles from './LocaleSwitcher.module.scss';
import type { LocaleSwitcherProps } from './LocaleSwitcher.props';

const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ lang }) => {
  const langNames: Record<Locale, string> = {
    ru: 'Русский',
    en: 'English',
  };

  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const LocaleButton = ({
    lang: targetLang,
  }: Pick<LocaleSwitcherProps, 'lang'>) => {
    const isActive = lang === targetLang;

    return (
      <Link
        href={redirectedPathName(targetLang)}
        className={cn(!isActive && 'opacity-60')}
      >
        {langNames[targetLang]}
      </Link>
    );
  };

  return (
    <article>
      <ul className={cn('flex gap-[1em]')}>
        {getObjectKeys(langNames).map(tLang => (
          <li>
            <LocaleButton lang={tLang} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default LocaleSwitcher;
