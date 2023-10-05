import localFont from 'next/font/local';

import { normalOrItalic } from '@/src/fonts/font-config';

const SFProDisplay = localFont({
  src: [
    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Black.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-BlackItalic.otf',
      fontWeight: '900',
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Bold.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-BoldItalic.otf',
      fontWeight: '700',
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Heavy.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-HeavyItalic.otf',
      fontWeight: '800',
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Light.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-LightItalic.otf',
      fontWeight: '300',
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Medium.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-MediumItalic.otf',
      fontWeight: '500',
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Regular.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-RegularItalic.otf',
      fontWeight: '400',
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Semibold.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-SemiboldItalic.otf',
      fontWeight: '600',
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Thin.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-ThinItalic.otf',
      fontWeight: '200',
    }),

    ...normalOrItalic({
      pathToNormal: './SF Pro Display/SF-Pro-Display-Ultralight.otf',
      pathToItalic: './SF Pro Display/SF-Pro-Display-UltralightItalic.otf',
      fontWeight: '100',
    }),
  ],
  variable: '--font-sf-pro-display',
});

export default SFProDisplay;
