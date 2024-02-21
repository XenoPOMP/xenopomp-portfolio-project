import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

import { LocalizationData } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { IProject } from '@/src/interfaces/IProject';
import { LangParams } from '@/src/types/LangParams';

export interface ProjectViewProps
  extends Omit<ComponentProps<typeof motion.article>, 'children'> {
  project: IProject;
  reversed?: boolean;
  lang: Locale;
}
