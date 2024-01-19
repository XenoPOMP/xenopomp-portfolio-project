import { summary } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { FC } from 'react';

import StackPercent from '@/src/components/ui/StackPercent/StackPercent';

import styles from './StackPercentBlock.module.scss';
import type { StackPercentBlockProps } from './StackPercentBlock.props';

const StackPercentBlock: FC<StackPercentBlockProps> = ({ title }) => {
  // const totalVotes = summary(...entries.map(ent => ent.votes));

  return (
    <article className={cn(styles.block)}>
      <h3 className={cn(styles.title)}>{title}</h3>

      <div className={cn(styles.items)}>
        <StackPercent techName={'react'} percent={95.5} />
      </div>
    </article>
  );
};

export default StackPercentBlock;
