import { ComponentProps } from 'react';

import { IProject } from '@/src/interfaces/IProject';

export interface ProjectViewProps
  extends Omit<ComponentProps<'article'>, 'children'> {
  project: IProject;
  reversed?: boolean;
}
