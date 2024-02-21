import { Defined, PropsWith, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import { extractLocalized } from '@/src/interfaces/IProject';

import styles from './MadeOnBlock.module.scss';
import { MadeOnBlockProps } from './MadeOnBlock.props';

const MadeOnBlock: VariableFC<'div', MadeOnBlockProps> = ({
  reversed,
  children,
  className,
  label,
  lang,
}) => {
  const labelLocales: Defined<typeof label> = label ?? {
    ru: 'Сделан на: ',
    en: 'Made on: ',
  };

  return (
    <>
      <div
        className={cn(
          'text-font-primary flex flex-wrap gap-[.5em] items-center',
          reversed && 'justify-end',
          className
        )}
      >
        <span className={cn('text-font-third-rate')}>
          {extractLocalized(labelLocales, lang)}
        </span>
        {children}
      </div>
    </>
  );
};

export default MadeOnBlock;
