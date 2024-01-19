import { ElementType } from 'react';
import { Replace } from 'type-fest';

type HeadingElement = Extract<ElementType, `h${number}`>;

export interface HeadingProps {
  level: Replace<HeadingElement, 'h', ''>;
}
