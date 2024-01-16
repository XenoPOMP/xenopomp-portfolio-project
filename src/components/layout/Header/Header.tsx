import cn from 'classnames';
import { Unbounded } from 'next/font/google';
import Link from 'next/link';
import { FC } from 'react';

import MobileMenu from '@/src/components/layout/MobileMenu/MobileMenu';
import Logotype from '@/src/components/ui/Logotype/Logotype';
import Navbar from '@/src/components/ui/Navbar/Navbar';
import ThemeSwitcher from '@/src/components/ui/ThemeSwitcher/ThemeSwitcher';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import SFMono from '@/src/fonts/sf-mono-font';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

// const font = SFMono;

const font = Unbounded({ subsets: ['latin', 'cyrillic'] });

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(font.className, styles.appHeader)}>
      <UiContainer className={cn(styles.container)}>
        <Logotype />

        <article className={cn('flex gap-[2em] items-center')}>
          <Navbar className={cn(styles.desktop)} />

          <ThemeSwitcher className={cn(styles.desktop)} />
        </article>

        <MobileMenu className={cn(styles.mobile)} />
      </UiContainer>
    </header>
  );
};

export default Header;
