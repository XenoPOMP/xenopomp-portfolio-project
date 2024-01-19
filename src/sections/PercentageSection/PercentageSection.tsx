import { Defined, RecordKey, VariableFC } from '@xenopomp/advanced-types';
import { getObjectKeys } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { ComponentProps, FC } from 'react';

import Heading from '@/src/components/ui/Heading/Heading';
import StackPercentBlock from '@/src/components/ui/StackPercentBlock/StackPercentBlock';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import projectData from '@/src/data/project-data';
import { FullstackTechnology } from '@/src/interfaces/IProject';

import styles from './PercentageSection.module.scss';
import type { PercentageSectionProps } from './PercentageSection.props';

const PercentageSection: VariableFC<
  typeof UiContainer,
  PercentageSectionProps,
  'children' | 'as'
> = ({ className, ...props }) => {
  const getEntries = (): Record<
    'frontend' | 'backend',
    ComponentProps<typeof StackPercentBlock>['entries']
  > => {
    const frontend: ComponentProps<typeof StackPercentBlock>['entries'] = [];
    const backend: ComponentProps<typeof StackPercentBlock>['entries'] = [];

    // TODO: Create normal project stack counter

    return {
      frontend,
      backend,
    };
  };

  return (
    <UiContainer
      as={'section'}
      className={cn(styles.percentage, className)}
      {...props}
    >
      <Heading level={'2'}>Используемые технологии в моих проектах</Heading>

      <div className={cn(styles.groups)}>
        <StackPercentBlock
          title={'Front-end'}
          entries={getEntries().frontend}
        />

        <StackPercentBlock title={'Back-end'} entries={getEntries().backend} />
      </div>
    </UiContainer>
  );
};

export default PercentageSection;
