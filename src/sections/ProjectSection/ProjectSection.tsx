import cn from 'classnames';
import Link from 'next/link';
import { FC, Fragment } from 'react';

import Heading from '@/src/components/ui/Heading/Heading';
import ProjectView from '@/src/components/ui/ProjectView/ProjectView';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import projectData from '@/src/data/project-data';
import { IProject } from '@/src/interfaces/IProject';

import styles from './ProjectSection.module.scss';
import type { ProjectSectionProps } from './ProjectSection.props';

const ProjectSection: FC<ProjectSectionProps> = ({
  className,
  id,
  displayLimit = -1,
  locales,
  ...props
}) => {
  const hasMoreLink = displayLimit > 0 && projectData.length > displayLimit;

  const displayingProjects: IProject[] = (() => {
    if (hasMoreLink) {
      return projectData.slice(0, displayLimit);
    }

    return projectData;
  })();

  return (
    <>
      <UiContainer
        className={cn(styles.projects, className)}
        id={id ?? 'projects'}
        {...props}
      >
        <Heading level={'2'}>{locales.heading}</Heading>

        {displayingProjects.map((project, index) => {
          return (
            <ProjectView
              project={project}
              key={`project-view-${index}`}
              reversed={!(index % 2 === 0)}
            />
          );
        })}

        {hasMoreLink && (
          <>
            <Link
              href={'/projects'}
              className={cn(
                'text-center text-[1.25em] text-font-primary hover:text-highlight',
                styles.allProjects
              )}
            >
              {locales.allProjects}
            </Link>
          </>
        )}
      </UiContainer>
    </>
  );
};

export default ProjectSection;
