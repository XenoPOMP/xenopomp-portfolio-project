import { ComponentProps } from 'react';

export interface NavbarProps extends Omit<ComponentProps<'nav'>, 'children'> {
  variant?: 'header';
}
