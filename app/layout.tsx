import type { Metadata } from 'next';
import Script from 'next/script';

import { AppConstants } from '@/app/app.constants';
import Footer from '@/src/components/layout/Footer/Footer';
import Header from '@/src/components/layout/Header/Header';
import Providers from '@/src/components/layout/Providers/Providers';
import SFProDisplay from '@/src/fonts/sf-pro-display-font';

import './globals.scss';

const mainFont = SFProDisplay;

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mainFont.className}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>

        <Script id={'metrika-counter'} strategy={'afterInteractive'}>
          {`   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();
           for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
           k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
           ym(95183872, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
           });`}
        </Script>
      </body>
    </html>
  );
}
