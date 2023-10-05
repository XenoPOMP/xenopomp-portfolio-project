import cn from 'classnames';
import Link from 'next/link';
import { ComponentProps, FC } from 'react';

import styles from './Navbar.module.scss';
import type { NavbarProps } from './Navbar.props';

const Navbar: FC<NavbarProps> = ({}) => {
  const linkArray: Array<{
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

  return (
    <nav className={cn(styles.navbar)}>
      <ul>
        {linkArray.map((link, index) => {
          const { text, href } = link;

          return (
            <li key={`navbar-li-elem-${index}`}>
              <Link href={href} scroll={false}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
