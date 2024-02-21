import { ProjectViewProps } from '@/src/components/ui/ProjectView/ProjectView.props';
import { Localized } from '@/src/interfaces/IProject';

export interface MadeOnBlockProps extends Pick<ProjectViewProps, 'lang'> {
  reversed?: boolean;
  label?: Localized<string>;
}
