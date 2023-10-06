import Link from 'next/link';
import { ComponentProps } from 'react';

export interface ButtonProps
  extends ComponentProps<'button'>,
    Partial<Pick<ComponentProps<typeof Link>, 'href'>> {
  variant?: 'primary' | 'secondary';
}
