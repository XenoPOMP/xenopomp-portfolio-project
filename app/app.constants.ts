import ogSquareImage from '@/public/arts/OpenGraph image Square.png';
import IAppConstants from '@/src/interfaces/AppConstants.interface';

export const AppConstants: IAppConstants = {
  appName: 'xeno.pomp',
  maxContainerWidth: '1440px',
  sharedOpenGraphConfig: {
    images: [
      {
        url: ogSquareImage.src,
        width: 200,
        height: 200,
      },
    ],
    siteName: 'XenoPOMP',
    url: process.env.CANONICAL_URL,
  },
  themeNames: {
    dark: 'dark-theme',
  },
};
