'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: [0, 1],
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
        }}
        className={cn(styles.bar)}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
