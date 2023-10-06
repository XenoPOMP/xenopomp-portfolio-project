import { Defined } from '@xenopomp/advanced-types';
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

const Navbar: FC<NavbarProps> = ({
  className,
  variant = 'header',
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

  return (
    <nav
      className={cn(styles.navbar, variantStyles[variant].className, className)}
      {...props}
    >
      <ul>
        {appNavbarLinks.map((link, index) => {
          const { text, href } = link;

          return (
            <li key={`navbar-li-elem-${index}`}>
              <Link href={href}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
