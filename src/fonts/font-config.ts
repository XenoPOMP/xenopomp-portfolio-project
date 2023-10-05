import { ArrayType } from '@xenopomp/advanced-types';
import localFont from 'next/font/local';

export type LocalFont = Parameters<typeof localFont>[0];

export const normalOrItalic = ({
  pathToNormal,
  pathToItalic,
  fontWeight,
}: {
  pathToNormal: string;
  pathToItalic: string;
  fontWeight: ArrayType<Exclude<LocalFont['src'], string>>['weight'];
}): Exclude<LocalFont['src'], string> => {
  return [
    {
      path: pathToNormal,
      weight: fontWeight,
      style: 'normal',
    },
    {
      path: pathToItalic,
      weight: fontWeight,
      style: 'italic',
    },
  ];
};
