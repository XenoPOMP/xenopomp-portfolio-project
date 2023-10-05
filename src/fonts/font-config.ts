import { ArrayType } from '@xenopomp/advanced-types';
import localFont from 'next/font/local';

import { FontStyle } from '@/src/fonts/font-style';

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
      style: FontStyle.Normal,
    },
    {
      path: pathToItalic,
      weight: fontWeight,
      style: FontStyle.Italic,
    },
  ];
};
