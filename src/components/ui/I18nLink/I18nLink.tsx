import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { Locale } from '@/i18n-config';

import styles from './I18nLink.module.scss';
import { I18nLinkProps } from './I18nLink.props';

const I18nLink: VariableFC<typeof Link, I18nLinkProps, 'href'> = ({
  className,
  href,
  targetLang,
  ...props
}) => {
  /** If href is not defined, use router hook instead. */
  const targetLink = href ?? usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!targetLink) return '/';

    const segments = targetLink.split('/');
    segments[1] = locale;

    return segments.join('/');
  };

  return (
    <Link
      href={redirectedPathName(targetLang)}
      className={cn(className)}
      {...props}
    ></Link>
  );
};

export default I18nLink;
