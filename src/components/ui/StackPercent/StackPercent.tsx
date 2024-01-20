import { roundNumber } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { FC } from 'react';

import ProgressBar from '@/src/components/ui/ProgressBar/ProgressBar';
import techIcons from '@/src/data/tech-icons';

import styles from './StackPercent.module.scss';
import type { StackPercentProps } from './StackPercent.props';

const StackPercent: FC<StackPercentProps> = ({ techName, percent }) => {
  const { component: Icon, title } = techIcons[techName];

  return (
    <div className={cn(styles.stackPercent)}>
      {Icon}

      <ProgressBar value={percent} max={100} className={cn(styles.progress)} />

      <div className={cn(styles.percentLabel)}>{roundNumber(percent, 0)}%</div>
    </div>
  );
};

export default StackPercent;
