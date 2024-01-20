import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';

import { ReplaceRecordKey } from '@/src/types/ReplaceRecordKey';

export type ProjectPriority = 'high' | 'medium' | 'low';

export type FullstackTechnology = StackTechnology | BackendStackTechnology;

export type StackTechnology =
  | 'react'
  | 'vite'
  | 'next'
  | 'next14'
  | 'chrome-api'
  | 'typescript'
  | 'redux'
  | 'zustand'
  | 'electron'
  | 'expo';

export type BackendStackTechnology = 'nest' | 'prisma' | 'mssql' | 'postgres';

export interface IProject {
  priority?: ProjectPriority;
  title: string;
  description?: string[];
  madeOn?: Partial<Record<StackTechnology, boolean>>;
  backendStack?: Partial<
    ReplaceRecordKey<NonNullable<IProject['madeOn']>, BackendStackTechnology>
  >;
  links?: Partial<
    Record<
      'primary' | 'secondary',
      {
        content: ReactNode;
      } & Pick<ComponentProps<typeof Link>, 'href'>
    >
  >;
  image?: Pick<ComponentProps<typeof Image>, 'src' | 'alt'> & {
    orientation: 'square' | 'horizontal' | 'vertical';
  };
}
