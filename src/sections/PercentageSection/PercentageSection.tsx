import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import Heading from '@/src/components/ui/Heading/Heading';
import StackPercentBlock from '@/src/components/ui/StackPercentBlock/StackPercentBlock';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import projectData from '@/src/data/project-data';

import styles from './PercentageSection.module.scss';
import type { PercentageSectionProps } from './PercentageSection.props';

const PercentageSection: VariableFC<
  typeof UiContainer,
  PercentageSectionProps,
  'children' | 'as'
> = ({ className, ...props }) => {
  const sus = projectData;

  return (
    <UiContainer
      as={'section'}
      className={cn(styles.percentage, className)}
      {...props}
    >
      <Heading level={'2'}>Используемые технологии в моих проектах</Heading>

      <article className={cn(styles.groups)}>
        <StackPercentBlock title={'Front-end'} />
        <StackPercentBlock title={'Back-end'} />
      </article>
    </UiContainer>
  );
};

export default PercentageSection;
