import cn from 'classnames';
import { Unbounded } from 'next/font/google';
import { FC } from 'react';

import DesktopNav from '@/src/components/layout/DesktopNav/DesktopNav.ts';
import MobileMenu from '@/src/components/layout/MobileMenu/MobileMenu';
import Logotype from '@/src/components/ui/Logotype/Logotype';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

// const font = SFMono;

const font = Unbounded({ subsets: ['latin', 'cyrillic'] });

const Header: FC<HeaderProps> = ({ locales: { nav: navLocales } }) => {
  return (
    <header className={cn(font.className, styles.appHeader)}>
      <UiContainer className={cn(styles.container)}>
        <Logotype />

        <article className={cn('flex gap-[2em] items-center')}>
          <DesktopNav
            className={cn(styles.desktopWrapper)}
            locales={navLocales}
          />
        </article>

        <MobileMenu locales={navLocales} className={cn(styles.mobile)} />
      </UiContainer>
    </header>
  );
};

export default Header;
