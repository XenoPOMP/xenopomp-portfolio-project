import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

import { IProject } from '@/src/interfaces/IProject';

export interface ProjectViewProps
  extends Omit<ComponentProps<typeof motion.article>, 'children'> {
  project: IProject;
  reversed?: boolean;
}
