import { ComponentProps } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

export interface ProjectSectionProps
  extends ComponentProps<typeof UiContainer> {
  displayLimit?: number;
}
