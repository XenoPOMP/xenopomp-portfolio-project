import cn from 'classnames';
import { FC } from 'react';

import ProjectView from '@/src/components/ui/ProjectView/ProjectView';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import projectData from '@/src/data/project-data';

import styles from './ProjectSection.module.scss';
import type { ProjectSectionProps } from './ProjectSection.props';

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
  return (
    <UiContainer className={cn(styles.projects)} id={'projects'}>
      {projectData.map((project, index) => {
        return (
          <ProjectView
            project={project}
            key={`project-view-${index}`}
            reversed={!(index % 2 === 0)}
          />
        );
      })}
    </UiContainer>
  );
};

export default ProjectSection;
