'use client';

import { RecordValue } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { util } from 'zod';

import AsyncImage from '@/src/components/ui/AsyncImage/AsyncImage.ts';
import Button from '@/src/components/ui/Button/Button';
import MadeOnBlock from '@/src/components/ui/MadeOnBlock/MadeOnBlock';
import WithTooltip from '@/src/components/ui/WithTooltip/WithTooltip';
import techIcons from '@/src/data/tech-icons';
import { extractLocalized } from '@/src/interfaces/IProject';

import styles from './ProjectView.module.scss';
import type { ProjectViewProps } from './ProjectView.props';

import objectKeys = util.objectKeys;

const ProjectView: FC<ProjectViewProps> = ({
  project,
  reversed,
  className,
  lang,
  ...props
}) => {
  const { title, description, madeOn, backendStack, links, image } = project;

  const getMadeOnString = (options?: { isBackend?: boolean }): ReactNode => {
    const selectedTechnologies: Array<RecordValue<typeof techIcons>> = [];

    let target: typeof madeOn | typeof backendStack = madeOn;

    if (options?.isBackend) {
      target = backendStack;
    }

    if (!isUndefined(target)) {
      objectKeys(target).map(key => {
        const objectKey = key as keyof typeof target;

        if (target![objectKey]) {
          selectedTechnologies.push(techIcons[objectKey]);
        }
      });
    }

    return (
      <div className={cn('flex flex-wrap gap-[.4em] items-center')}>
        {selectedTechnologies.map(tech => {
          if (tech === undefined) {
            return undefined;
          }

          return (
            <>
              <WithTooltip
                tooltip={{
                  id: `${tech.title}-tooltip`,
                  content: tech.title,
                  placement: 'bottom',
                }}
              >
                {tech.component}
              </WithTooltip>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <motion.article
      className={cn(styles.projectView, reversed && styles.reversed, className)}
      initial={{
        opacity: 0,
        x: !reversed ? '-50%' : '50%',
      }}
      whileInView={{
        opacity: 1,
        x: '0',
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
        ease: 'anticipate',
      }}
      {...props}
    >
      <div className={cn(styles.photoBlock)}>
        {image && (
          <AsyncImage
            src={image.src}
            alt={image.alt}
            className={cn(
              image.orientation === 'square' && styles.square,
              image.orientation === 'vertical' && styles.vertical,
              image.orientation === 'horizontal' && styles.horizontal
            )}
            priority={false}
          />
        )}
      </div>

      <div className={cn(styles.textBlock)}>
        <header className={cn(styles.titleBlock)}>
          <h2>{extractLocalized(title, lang)}</h2>

          <div className={cn(styles.body)}>
            <div>
              {typeof description !== 'undefined' &&
                extractLocalized(description, lang)?.map(str => {
                  return <p>{str}</p>;
                })}
            </div>

            <>
              <MadeOnBlock reversed={reversed}>{getMadeOnString()}</MadeOnBlock>

              {backendStack && (
                <MadeOnBlock reversed={reversed} label={'Backend:'}>
                  {getMadeOnString({
                    isBackend: true,
                  })}
                </MadeOnBlock>
              )}
            </>
          </div>
        </header>

        <footer className={cn(styles.buttonBlock)}>
          {links?.primary && (
            <Button href={links.primary.href}>{links.primary.content}</Button>
          )}

          {links?.secondary && (
            <Button variant={'secondary'} href={links.secondary.href}>
              {links.secondary.content}
            </Button>
          )}
        </footer>
      </div>
    </motion.article>
  );
};

export default ProjectView;
