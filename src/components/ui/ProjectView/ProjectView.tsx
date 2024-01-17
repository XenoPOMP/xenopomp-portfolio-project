'use client';

import { RecordValue } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';
import { util } from 'zod';

import zustandIconImage from '@/public/icons/Zustand Icon.png';
import Button from '@/src/components/ui/Button/Button';
import techIcons from '@/src/data/tech-icons';
import { StackTechnology } from '@/src/interfaces/IProject';

import styles from './ProjectView.module.scss';
import type { ProjectViewProps } from './ProjectView.props';

import objectKeys = util.objectKeys;

const ProjectView: FC<ProjectViewProps> = ({
  project,
  reversed,
  className,
  ...props
}) => {
  const { title, description, madeOn, links, image } = project;

  const getMadeOnString = (): ReactNode => {
    const selectedTechnologies: Array<RecordValue<typeof techIcons>> = [];

    if (!isUndefined(madeOn)) {
      objectKeys(madeOn).map(key => {
        const objectKey = key as keyof typeof madeOn;

        if (madeOn[objectKey]) {
          selectedTechnologies.push(techIcons[objectKey]);
        }
      });
    }

    return (
      <div className={cn('flex flex-wrap gap-[.4em] items-center')}>
        {selectedTechnologies.map(({ component, title }) => (
          <>
            <div
              data-tooltip-id={`${title}-tooltip`}
              data-tooltip-content={title}
              data-tooltip-place='bottom'
            >
              {component}
            </div>

            <Tooltip
              id={`${title}-tooltip`}
              className={cn('bg-tooltip-bg text-tooltip-font bg-opacity-100')}
            />
          </>
        ))}
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
          <Image
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
          <h2>{title}</h2>

          <div className={cn(styles.body)}>
            <div>
              {description?.map(str => {
                return <p>{str}</p>;
              })}
            </div>

            <div
              className={cn(
                'text-font-third-rate flex flex-wrap gap-[.5em] items-center',
                reversed && 'justify-end'
              )}
            >
              <span>Сделан на:</span>
              {getMadeOnString()}
            </div>
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
