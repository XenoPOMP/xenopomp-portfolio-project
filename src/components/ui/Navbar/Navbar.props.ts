import { ComponentProps } from 'react';

import { DesktopNavProps } from '@/src/components/layout/DesktopNav/DesktopNav.props';

export interface NavbarProps
  extends Omit<ComponentProps<'nav'>, 'children'>,
    Pick<DesktopNavProps, 'locales'> {
  variant?: 'header';
}
