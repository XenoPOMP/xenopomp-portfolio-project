'use client';

import cn from 'classnames';
import { FC } from 'react';

import styles from '@/src/components/layout/Header/Header.module.scss';
import Navbar from '@/src/components/ui/Navbar/Navbar';
import ThemeSwitcher from '@/src/components/ui/ThemeSwitcher/ThemeSwitcher';

import type { DesktopNavProps } from './DesktopNav.props';

const DesktopNav: FC<DesktopNavProps> = ({}) => {
  return (
    <>
      <Navbar className={cn(styles.desktop)} />

      <ThemeSwitcher className={cn(styles.desktop)} />
    </>
  );
};

export default DesktopNav;
