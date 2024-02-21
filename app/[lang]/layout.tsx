import { WithParams, WithSearchParams } from '@xenopomp/advanced-types';
import type { Metadata, ResolvingMetadata } from 'next';
import Metrika from 'next-metrika';
import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types';
import { Geologica } from 'next/font/google';
import Script from 'next/script';

import { AppConstants } from '@/app/app.constants';
import { getDictionary } from '@/get-dictionary';
import ogImage from '@/public/arts/OpenGraph image Medium.png';
import ogSquareImage from '@/public/arts/OpenGraph image Square.png';
import Footer from '@/src/components/layout/Footer/Footer';
import Header from '@/src/components/layout/Header/Header';
import Providers from '@/src/components/layout/Providers/Providers';
import SFProDisplay from '@/src/fonts/sf-pro-display-font';
import { useEnv } from '@/src/hooks/useEnv';
import { LangParams } from '@/src/types/LangParams';
import { generateStaticMetadata } from '@/src/utils/generateStaticMetadata';

import './globals.scss';

// const mainFont = SFProDisplay;

const mainFont = Geologica({ subsets: ['latin', 'cyrillic'] });

export async function generateMetadata(
  {
    params: { lang },
    searchParams,
  }: WithSearchParams<WithParams<{}, never>, never> & LangParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dict = await getDictionary(lang);
  const { desc: description, keywords, ogTitle } = dict.meta;

  return generateStaticMetadata({
    title: AppConstants.appName,
    description,
    keywords,
    openGraph: {
      ...AppConstants.sharedOpenGraphConfig,

      images: [
        ...(AppConstants.sharedOpenGraphConfig?.images ?? []),
        {
          url: ogImage.src,
          width: 1080,
          height: 608,
          alt: ogTitle,
        },
      ],
      type: 'website',
      title: ogTitle,
      description,
    },
  });
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
} & LangParams) {
  const { METRIKA_DISABLED } = useEnv();

  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={mainFont.className}>
        <Providers>
          <Header
            locales={{
              nav: dict.header.nav,
            }}
          />

          {children}

          <Footer lang={lang} />

          {/* Disable Metrika in dev environment. */}
          {!METRIKA_DISABLED && <Metrika id={95183872} />}
        </Providers>
      </body>
    </html>
  );
}
