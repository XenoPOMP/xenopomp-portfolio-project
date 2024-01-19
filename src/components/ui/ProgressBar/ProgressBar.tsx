import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { CSSProperties, ComponentProps, FC } from 'react';

import styles from './ProgressBar.module.scss';
import type { ProgressBarProps } from './ProgressBar.props';

const ProgressBar: VariableFC<
  'div',
  ProgressBarProps & Pick<ComponentProps<'progress'>, 'value' | 'max'>,
  'children' | 'role'
> = ({
  className,
  value = 0,
  max,
  'aria-valuemin': valueMin = 0,
  'aria-valuemax': valueMax = 100,
  style,
  ...props
}) => {
  return (
    <div
      className={cn(styles.progressBar, className)}
      role={'progressbar'}
      aria-valuenow={+value}
      aria-valuemin={valueMin}
      style={
        {
          '--percent': `${value}%`,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      <div className={cn(styles.bar)}></div>
    </div>
  );
};

export default ProgressBar;
