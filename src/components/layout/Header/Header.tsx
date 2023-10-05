import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import MobileMenu from '@/src/components/layout/MobileMenu/MobileMenu';
import Navbar from '@/src/components/ui/Navbar/Navbar';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import SFMono from '@/src/fonts/sf-mono-font';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const font = SFMono;

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(font.className, styles.appHeader)}>
      <UiContainer className={cn(styles.container)}>
        <Link href={'/'} className={cn('font-bold', styles.logo)}>
          xeno.pomp
        </Link>

        <Navbar className={cn(styles.desktop)} />

        <MobileMenu className={cn(styles.mobile)} />
      </UiContainer>
    </header>
  );
};

export default Header;
