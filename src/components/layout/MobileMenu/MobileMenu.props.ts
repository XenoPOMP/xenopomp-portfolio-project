import { ComponentProps } from 'react';

import { DesktopNavProps } from '@/src/components/layout/DesktopNav/DesktopNav.props';

export interface MobileMenuProps
  extends Omit<ComponentProps<'article'>, 'children'>,
    Pick<DesktopNavProps, 'locales'> {}
