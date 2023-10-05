import { Defined } from '@xenopomp/advanced-types';

import { IProject } from '@/src/interfaces/IProject';

const sortProjects = (targetArray: IProject[]): IProject[] => {
  const priorityQueues: Record<Defined<IProject['priority']>, IProject[]> = {
    high: targetArray.filter(project => project.priority === 'high'),
    medium: targetArray.filter(project => project.priority === 'medium'),
    low: targetArray.filter(project => project.priority === 'low'),
  };

  const { high, medium, low } = priorityQueues;

  return [...high, ...medium, ...low];
};

export default sortProjects;
