import {
  BackendStackTechnology,
  StackTechnology,
} from '@/src/interfaces/IProject';

export type StackPercentEntry = {
  name: StackTechnology | BackendStackTechnology;

  /** Count of technology usages in projects. */
  votes: number;
};

export interface StackPercentBlockProps {
  title?: string;
}
