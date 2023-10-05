import localFont from 'next/font/local';

import { normalOrItalic } from '@/src/fonts/font-config';
import { FontWeight } from '@/src/fonts/font-weight';

const SFProDisplay = localFont({
  src: [
    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Black.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-BlackItalic.otf',
      fontWeight: FontWeight.Black,
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Bold.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-BoldItalic.otf',
      fontWeight: FontWeight.Bold,
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Heavy.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-HeavyItalic.otf',
      fontWeight: FontWeight.Heavy,
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Light.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-LightItalic.otf',
      fontWeight: FontWeight.Light,
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Medium.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-MediumItalic.otf',
      fontWeight: FontWeight.Medium,
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Regular.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-RegularItalic.otf',
      fontWeight: FontWeight.Regular,
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Semibold.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-SemiboldItalic.otf',
      fontWeight: FontWeight.Semibold,
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Thin.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-ThinItalic.otf',
      fontWeight: FontWeight.Thin,
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Ultralight.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-UltralightItalic.otf',
      fontWeight: FontWeight.Ultralight,
    }),
  ],
  variable: '--font-sf-pro-display',
});

export default SFProDisplay;
