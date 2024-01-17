import { AppConstants } from '@/app/app.constants';

export const isDarkTheme: boolean = (() => {
  return document.body.classList.contains(AppConstants.themeNames.dark);
})();
