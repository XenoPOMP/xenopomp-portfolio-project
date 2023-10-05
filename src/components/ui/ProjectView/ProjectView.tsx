import cn from 'classnames';
import { FC } from 'react';

import styles from './ProjectView.module.scss';
import type { ProjectViewProps } from './ProjectView.props';

const ProjectView: FC<ProjectViewProps> = ({
  project,
  reversed,
  className,
  ...props
}) => {
  return (
    <article
      className={cn(styles.projectView, reversed && styles.reversed, className)}
      {...props}
    >
      <div>1</div>
      <div>2</div>
    </article>
  );
};

export default ProjectView;
