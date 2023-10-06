import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
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
    <article
      className={cn(styles.projectView, reversed && styles.reversed, className)}
      {...props}
    >
      <div className={cn(styles.photoBlock)}>
        {image && <Image src={image.src} alt={image.alt} />}
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
    </article>
  );
};

export default ProjectView;
