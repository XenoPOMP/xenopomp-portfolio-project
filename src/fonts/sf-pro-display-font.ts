import localFont from 'next/font/local';

const SFProDisplay = localFont({
  src: [
    {
      path: './SF Pro Display/SF-Pro-Display-Regular.otf',
      weight: '400',
    },

    {
      path: './SF Pro Display/SF-Pro-Display-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },

    {
      path: './SF Pro Display/SF-Pro-Display-Medium.otf',
      weight: '500',
    },

    {
      path: './SF Pro Display/SF-Pro-Display-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },

    // ...normalOrItalic({
    //   pathToNormal: '',
    //   pathToItalic: '',
    //   fontWeight: FontWeight.Medium,
    // }),

    // ...normalOrItalic({
    //   pathToNormal: './SF Pro Display/SF-Pro-Display-Black.otf',
    //   pathToItalic: './SF Pro Display/SF-Pro-Display-BlackItalic.otf',
    //   fontWeight: FontWeight.Black,
    // }),
    //
    // ...normalOrItalic({
    //   pathToNormal: './SF Pro Display/SF-Pro-Display-Bold.otf',
    //   pathToItalic: './SF Pro Display/SF-Pro-Display-BoldItalic.otf',
    //   fontWeight: FontWeight.Bold,
    // }),
    //
    // ...normalOrItalic({
    //   pathToNormal: './SF Pro Display/SF-Pro-Display-Heavy.otf',
    //   pathToItalic: './SF Pro Display/SF-Pro-Display-HeavyItalic.otf',
    //   fontWeight: FontWeight.Heavy,
    // }),
    //
    // ...normalOrItalic({
    //   pathToNormal: './SF Pro Display/SF-Pro-Display-Light.otf',
    //   pathToItalic: './SF Pro Display/SF-Pro-Display-LightItalic.otf',
    //   fontWeight: FontWeight.Light,
    // }),
    //
    //
    // ...normalOrItalic({
    //   pathToNormal: './SF Pro Display/SF-Pro-Display-Regular.otf',
    //   pathToItalic: './SF Pro Display/SF-Pro-Display-RegularItalic.otf',
    //   fontWeight: FontWeight.Regular,
    // }),
    //
    // ...normalOrItalic({
    //   pathToNormal: './SF Pro Display/SF-Pro-Display-Semibold.otf',
    //   pathToItalic: './SF Pro Display/SF-Pro-Display-SemiboldItalic.otf',
    //   fontWeight: FontWeight.Semibold,
    // }),
    //
    // ...normalOrItalic({
    //   pathToNormal: './SF Pro Display/SF-Pro-Display-Thin.otf',
    //   pathToItalic: './SF Pro Display/SF-Pro-Display-ThinItalic.otf',
    //   fontWeight: FontWeight.Thin,
    // }),
    //
    // ...normalOrItalic({
    //   pathToNormal: './SF Pro Display/SF-Pro-Display-Ultralight.otf',
    //   pathToItalic: './SF Pro Display/SF-Pro-Display-UltralightItalic.otf',
    //   fontWeight: FontWeight.Ultralight,
    // }),
  ],
  variable: '--font-sf-pro-display',
});

export default SFProDisplay;
