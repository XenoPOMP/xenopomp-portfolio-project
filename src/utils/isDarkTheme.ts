'use client';

import { AppConstants } from '@/app/app.constants';
import useBoolean from '@/src/hooks/useBoolean';
import { ClassWatcher } from '@/src/utils/ClassWatcher';

interface IUseTheme {
  isDarkTheme: boolean;
}

export const useTheme = (): IUseTheme => {
  if (typeof document === 'undefined') {
    return {
      isDarkTheme: false,
    };
  }

  const [isDarkTheme, _t, setIsDarkTheme] = useBoolean(
    document.body.classList.contains(AppConstants.themeNames.dark)
  );

  const watcher = new ClassWatcher(document.body, {
    classToWatch: AppConstants.themeNames.dark,
    classAddedCallback: () => {
      setIsDarkTheme(true);
    },
    classRemovedCallback: () => {
      setIsDarkTheme(false);
    },
  });

  return {
    isDarkTheme,
  };
};
