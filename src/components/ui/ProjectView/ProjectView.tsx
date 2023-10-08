'use client';

import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import { util } from 'zod';

import Button from '@/src/components/ui/Button/Button';
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

  const getMadeOnString = (): string => {
    const outputStrings: Record<StackTechnology, string> = {
      react: 'React',
      vite: 'Vite',
      next: 'Next.js',
      'chrome-api': 'Chrome API',
      typescript: 'TypeScript',
    };

    const selectedTechnologies: string[] = [];

    if (!isUndefined(madeOn)) {
      objectKeys(madeOn).map(key => {
        const objectKey = key as keyof typeof madeOn;

        if (madeOn[objectKey]) {
          selectedTechnologies.push(outputStrings[objectKey]);
        }
      });
    }

    return selectedTechnologies.join(', ');
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

            <div className={cn('text-font-third-rate')}>
              Сделан на:{' '}
              <strong className={cn('font-normal')}>{getMadeOnString()}</strong>
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
