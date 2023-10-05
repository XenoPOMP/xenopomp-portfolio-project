import localFont from 'next/font/local';

const SFMono = localFont({
  src: [
    {
      path: './SF Mono/SF-Mono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SF Mono/SF-Mono-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },

    {
      path: './SF Mono/SF-Mono-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SF Mono/SF-Mono-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-sf-mono',
});

export default SFMono;
