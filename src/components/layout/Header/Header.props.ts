import { LocalizationData } from '@/get-dictionary';

export interface HeaderProps {
  locales: Pick<LocalizationData['header'], 'nav'>;
}
