import Link from 'next/link';
import { ComponentProps } from 'react';

export interface LogotypeProps
  extends Omit<ComponentProps<typeof Link>, 'href'> {}
