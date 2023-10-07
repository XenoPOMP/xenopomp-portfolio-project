import Link from 'next/link';
import { ComponentProps } from 'react';

export interface MediaLinkProps
  extends Omit<ComponentProps<typeof Link>, 'children' | 'target'> {
  icon?: 'github' | 'hh';
  variant?: 'default' | 'footer';
}
