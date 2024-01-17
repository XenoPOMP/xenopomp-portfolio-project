import { ComponentProps, ElementType } from 'react';

export interface UiContainerProps extends ComponentProps<'section'> {
  margin?: string;
  maxWidth?: string;
  as?: ElementType;
}
