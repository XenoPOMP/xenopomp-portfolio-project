import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';

export type ProjectPriority = 'high' | 'medium' | 'low';

export type StackTechnology =
  | 'react'
  | 'vite'
  | 'next'
  | 'chrome-api'
  | 'typescript';

export interface IProject {
  priority?: ProjectPriority;
  title: string;
  description?: string[];
  madeOn?: Partial<Record<StackTechnology, boolean>>;
  links?: Partial<
    Record<
      'primary' | 'secondary',
      {
        content: ReactNode;
      } & Pick<ComponentProps<typeof Link>, 'href'>
    >
  >;
  image?: Pick<ComponentProps<typeof Image>, 'src'> & {
    orientation: 'square' | 'horizontal' | 'vertical';
  };
}
