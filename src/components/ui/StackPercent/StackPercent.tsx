import cn from 'classnames';
import { FC } from 'react';

import techIcons from '@/src/data/tech-icons';

import styles from './StackPercent.module.scss';
import type { StackPercentProps } from './StackPercent.props';

const StackPercent: FC<StackPercentProps> = ({ techName, percent }) => {
  const { component: Icon, title } = techIcons[techName];

  return <div className={cn(styles.stackPercent)}>{Icon}</div>;
};

export default StackPercent;
