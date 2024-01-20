import { ComponentProps } from 'react';

export interface WithTooltipProps {
  tooltip: {
    id: string;
    content?: ComponentProps<'div'>['data-tooltip-content'];
    placement?: ComponentProps<'div'>['data-tooltip-place'];
  };
}
