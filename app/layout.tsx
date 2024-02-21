import { Metadata } from 'next';

import { AppConstants } from '@/app/app.constants';
import ogImage from '@/public/arts/OpenGraph image Medium.png';

export const metadata: Metadata = {
  title: AppConstants.appName,
  description:
    'Привет, меня зовут Александр. Я являюсь front-end разработчиков, специализирующимся на React, TypeScript, Vite и Next.',
  keywords: [
    'Александр Наумов',
    'XenoPOMP',
    'xenopomp',
    'react',
    'next',
    'портфолио',
  ],
  openGraph: {
    ...AppConstants.sharedOpenGraphConfig,

    images: [
      ...(AppConstants.sharedOpenGraphConfig?.images ?? []),
      {
        url: ogImage.src,
        width: 1080,
        height: 608,
        alt: 'XenoPOMP Портфолио',
      },
    ],
    type: 'website',
    title: 'Портфолио XenoPOMP',
    description:
      'Привет, меня зовут Александр. Я являюсь front-end разработчиков, специализирующимся на React, TypeScript, Vite и Next.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
