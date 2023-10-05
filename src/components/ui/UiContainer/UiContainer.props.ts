import { ComponentProps } from 'react';

export interface UiContainerProps extends ComponentProps<'section'> {
  margin?: string;
  maxWidth?: string;
}
