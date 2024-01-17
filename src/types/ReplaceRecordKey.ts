import { type RecordValue } from '@xenopomp/advanced-types';

/**
 * Replace type of T record with R.
 *
 * @example
 * type FrontendStackTech = Record<'react' | 'next', boolean>;
 *
 * type BackendStackTech = ReplaceRecordKey<FrontendStackTech, 'nest' | 'prisma'>;
 * // This type will contain keys 'nest' and 'prisma'
 */
export type ReplaceRecordKey<
  T extends Record<any, any>,
  R extends PropertyKey
> = T extends Record<any, any> ? Record<R, RecordValue<T>> : never;
