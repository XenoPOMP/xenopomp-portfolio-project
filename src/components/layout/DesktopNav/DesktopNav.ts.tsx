import { PropsWith, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from '@/src/components/layout/Header/Header.module.scss';
import Navbar from '@/src/components/ui/Navbar/Navbar';
import ThemeSwitcher from '@/src/components/ui/ThemeSwitcher/ThemeSwitcher';

import type { DesktopNavProps } from './DesktopNav.props';

const DesktopNav: VariableFC<'div', DesktopNavProps, 'children'> = ({
  className,
  style,
  locales,
  ...props
}) => {
  return (
    <div
      className={cn(className)}
      style={{
        display: 'inherit',
        gap: 'inherit',
        alignItems: 'inherit',
        ...style,
      }}
      {...props}
    >
      <Navbar className={cn(styles.desktop)} locales={locales} />

      <ThemeSwitcher className={cn(styles.desktop)} />
    </div>
  );
};

export default DesktopNav;
