import { VariableFC } from '@xenopomp/advanced-types';
import { getObjectKeys } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { ComponentProps } from 'react';

import Heading from '@/src/components/ui/Heading/Heading';
import StackPercentBlock from '@/src/components/ui/StackPercentBlock/StackPercentBlock';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import projectData from '@/src/data/project-data';
import {
  BackendStackTechnology,
  FullstackTechnology,
  StackTechnology,
} from '@/src/interfaces/IProject';

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
    const frontEndEntries: Partial<Record<StackTechnology, number>> = {};
    const backEndEntries: Partial<Record<BackendStackTechnology, number>> = {};

    projectData.forEach(({ madeOn, backendStack }) => {
      if (madeOn !== undefined) {
        getObjectKeys(madeOn).forEach(stackName => {
          const isStackUsed = !!madeOn[stackName];

          if (!isStackUsed) {
            return;
          }

          if (frontEndEntries[stackName] === undefined) {
            frontEndEntries[stackName] = 1;
            return;
          }

          frontEndEntries[stackName]!++;
        });
      }

      if (backendStack !== undefined) {
        getObjectKeys(backendStack).forEach(backendStackName => {
          const isStackUsed = !!backendStack[backendStackName];

          if (!isStackUsed) {
            return;
          }

          if (backEndEntries[backendStackName] === undefined) {
            backEndEntries[backendStackName] = 1;
            return;
          }

          backEndEntries[backendStackName]!++;
        });
      }
    });

    const traverse = <T extends FullstackTechnology>(
      obj: Partial<Record<T, number>>,
      options?: { backendOnly?: boolean }
    ): ComponentProps<typeof StackPercentBlock>['entries'] => {
      const keys = getObjectKeys(obj);

      const projects = !!options?.backendOnly
        ? projectData.filter(project => project.backendStack !== undefined)
        : projectData;

      return keys.map(key => ({
        techName: key,
        percent: (obj[key]! / projects.length) * 100,
      }));
    };

    return {
      frontend: traverse(frontEndEntries),
      backend: traverse(backEndEntries, {
        backendOnly: true,
      }),
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
