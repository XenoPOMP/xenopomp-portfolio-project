import type { Metadata } from 'next';
import Metrika from 'next-metrika';
import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types';
import { Geologica } from 'next/font/google';
import Script from 'next/script';

import { AppConstants } from '@/app/app.constants';
import ogImage from '@/public/arts/OpenGraph image Medium.png';
import ogSquareImage from '@/public/arts/OpenGraph image Square.png';
import Footer from '@/src/components/layout/Footer/Footer';
import Header from '@/src/components/layout/Header/Header';
import Providers from '@/src/components/layout/Providers/Providers';
import SFProDisplay from '@/src/fonts/sf-pro-display-font';
import { useEnv } from '@/src/hooks/useEnv';
import { LangParams } from '@/src/types/LangParams';

import './globals.scss';

// const mainFont = SFProDisplay;

const mainFont = Geologica({ subsets: ['latin', 'cyrillic'] });

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
  params: { lang },
}: {
  children: React.ReactNode;
} & LangParams) {
  const { METRIKA_DISABLED } = useEnv();

  return (
    <html lang={lang}>
      <body className={mainFont.className}>
        <Providers>
          <Header />

          {children}

          <Footer />

          {/* Disable Metrika in dev environment. */}
          {!METRIKA_DISABLED && <Metrika id={95183872} />}
        </Providers>
      </body>
    </html>
  );
}
