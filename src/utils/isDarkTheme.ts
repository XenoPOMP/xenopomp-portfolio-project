import { AppConstants } from '@/app/app.constants';

export const isDarkTheme = document.body.classList.contains(
  AppConstants.themeNames.dark
);
