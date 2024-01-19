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

    projectData.forEach(({ madeOn, backendStack }) => {
      const isNameInArray = (
        item: ComponentProps<typeof StackPercentBlock>['entries'],
        name: FullstackTechnology
      ) => {
        return item?.map(item => item.techName).includes(name);
      };

      const incrementEntry = (
        items: ComponentProps<typeof StackPercentBlock>['entries'],
        key: string
      ): boolean => {
        const entryIndex = items.findIndex(item => item.techName === key);

        if (entryIndex === -1) {
          return false;
        }

        items[entryIndex].percent++;
        return true;
      };

      getObjectKeys(madeOn ?? {}).forEach(key => {
        if (isNameInArray(frontend, key)) {
          incrementEntry(frontend, key);

          return;
        }

        if (madeOn![key]) {
          frontend.push({ techName: key, percent: 1 });
        }
      });

      getObjectKeys(backendStack ?? {}).forEach(key => {
        if (isNameInArray(backend, key)) {
          incrementEntry(backend, key);

          return;
        }

        if (backendStack![key]) {
          backend.push({ techName: key, percent: 1 });
        }
      });
    });

    return {
      frontend: frontend.map(item => {
        const totalCountOfItems = frontend.length;

        return {
          techName: item.techName,
          percent: (item.percent / totalCountOfItems) * 100,
        };
      }),
      backend: backend.map(item => {
        const totalCountOfItems = backend.length;

        return {
          techName: item.techName,
          percent: (item.percent / totalCountOfItems) * 100,
        };
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
