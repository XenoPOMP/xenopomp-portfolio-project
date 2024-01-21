import { PropsWith, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from './MadeOnBlock.module.scss';
import { MadeOnBlockProps } from './MadeOnBlock.props';

const MadeOnBlock: VariableFC<'div', MadeOnBlockProps> = ({
  reversed,
  children,
  className,
  label = 'Сделан на:',
}) => {
  return (
    <>
      <div
        className={cn(
          'text-font-primary flex flex-wrap gap-[.5em] items-center',
          reversed && 'justify-end',
          className
        )}
      >
        <span className={cn('text-font-third-rate')}>{label}</span>
        {children}
      </div>
    </>
  );
};

export default MadeOnBlock;
