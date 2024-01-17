'use client';

import { useEffect } from 'react';

import { AppConstants } from '@/app/app.constants';
import useBoolean from '@/src/hooks/useBoolean';
import { ClassWatcher } from '@/src/utils/ClassWatcher';

export const isDarkTheme: boolean = (() => {
  return document.body.classList.contains(AppConstants.themeNames.dark);
})();

export const useTheme = () => {
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
