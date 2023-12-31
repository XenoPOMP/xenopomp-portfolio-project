import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import { useUniqueId } from '@/src/hooks/useUniqueId';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

interface UiContainerNestedProps
  extends PropsWith<
    'children' | 'className' | 'id' | 'style',
    UiContainerProps
  > {}

const UiContainer: FC<UiContainerNestedProps> = ({
  children,
  className,
  id,
  style,
  margin,
  maxWidth,
  ...props
}) => {
  return (
    <section
      style={
        {
          '--max-container-width': maxWidth ?? AppConstants.maxContainerWidth,
          '--margin': margin,
          ...style,
        } as CSSProperties
      }
      className={cn(styles.uiContainer, className)}
      id={id ?? useUniqueId()}
      {...props}
    >
      {children}
    </section>
  );
};

export default UiContainer;
