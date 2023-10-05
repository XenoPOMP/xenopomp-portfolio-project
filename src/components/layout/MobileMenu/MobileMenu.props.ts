import { ComponentProps } from 'react';

export interface MobileMenuProps
  extends Omit<ComponentProps<'article'>, 'children'> {}
