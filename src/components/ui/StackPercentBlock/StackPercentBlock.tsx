import { summary } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { FC } from 'react';

import styles from './StackPercentBlock.module.scss';
import type { StackPercentBlockProps } from './StackPercentBlock.props';

const StackPercentBlock: FC<StackPercentBlockProps> = ({ title }) => {
  // const totalVotes = summary(...entries.map(ent => ent.votes));

  return (
    <>
      <h3 className={cn(styles.title)}>{title}</h3>
    </>
  );
};

export default StackPercentBlock;
