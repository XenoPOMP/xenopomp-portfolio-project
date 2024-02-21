import { ComponentProps } from 'react';

import { LocalizationData } from '@/get-dictionary';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

export interface ProjectSectionProps
  extends ComponentProps<typeof UiContainer> {
  displayLimit?: number;
  locales: LocalizationData['main']['sections']['projects'];
}
