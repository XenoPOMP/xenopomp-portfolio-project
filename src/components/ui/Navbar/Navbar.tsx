import { Defined } from '@xenopomp/advanced-types';
import { getObjectKeys } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Navbar.module.scss';
import type { NavbarProps } from './Navbar.props';

export const appNavbarLinks: Array<{
  text: string;
  href: string;
}> = [
  {
    text: 'Проекты',
    href: '#projects',
  },

  {
    text: 'Обо мне',
    href: '#about-me',
  },
];

export const navbarLinks: Record<keyof NavbarProps['locales'], string> = {
  projects: '/#projects',
  aboutMe: '/#about-me',
};

const Navbar: FC<NavbarProps> = ({
  className,
  variant = 'header',
  locales,
  ...props
}) => {
  const variantStyles: Record<
    Defined<typeof variant>,
    {
      className?: string;
    }
  > = {
    header: {
      className: cn(styles.header),
    },
  };

  const LocaleElement = ({ loc }: { loc: keyof NavbarProps['locales'] }) => {
    return (
      <li>
        <Link href={navbarLinks[loc]}>{locales[loc]}</Link>
      </li>
    );
  };

  return (
    <nav
      className={cn(styles.navbar, variantStyles[variant].className, className)}
      {...props}
    >
      <ul>
        {getObjectKeys(locales).map((key, index) => {
          return <LocaleElement loc={key} key={`nav-element-${index}`} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
