import { SelectivePartial } from '@xenopomp/advanced-types';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';

import { DefaultLocale, Locale } from '@/i18n-config';
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

type NonDefaultLocales = Exclude<Locale, DefaultLocale>;

/** Makes localization record. */
export type Localized<T> = SelectivePartial<
  Record<Locale, T>,
  NonDefaultLocales
>;

/**
 * Extract localized project info.
 *
 * @param loc
 * @param lang
 */
export const extractLocalized = <T>(loc: Localized<T>, lang: Locale) => {
  return loc[lang] ?? loc['ru'];
};

export interface IProject {
  priority?: ProjectPriority;
  title: Localized<string>;
  description?: Localized<string[]>;
  madeOn?: Partial<Record<StackTechnology, boolean>>;
  backendStack?: Partial<
    ReplaceRecordKey<NonNullable<IProject['madeOn']>, BackendStackTechnology>
  >;
  links?: Partial<
    Record<
      'primary' | 'secondary',
      {
        content: Localized<ReactNode>;
      } & Pick<ComponentProps<typeof Link>, 'href'>
    >
  >;
  image?: Pick<ComponentProps<typeof Image>, 'src' | 'alt'> & {
    orientation: 'square' | 'horizontal' | 'vertical';
  };
}
