import Link from 'next/link';
import { ComponentProps } from 'react';

import advancedTypesPreview from '@/public/previews/advanced-types-preview.png';
import cubeVistaPreview from '@/public/previews/cube-vista-preview.png';
import gstPreview from '@/public/previews/gst_preview.png';
import imageGrabberExtensionPreview from '@/public/previews/image-grabber-preview.png';
import oldubilExtPreview from '@/public/previews/oldubil-ext-preview.png';
import ptPlatinumPreview from '@/public/previews/pt-platinum-preview.png';
import shopGuidePreview from '@/public/previews/shop-guide-preview.png';
import smartAcePreview from '@/public/previews/smart-ace-preview.png';
import wepPegasTwoPreview from '@/public/previews/web-pegas-2.0-preview.png';
import yskPreview from '@/public/previews/ysk_preview.png';
import { IProject } from '@/src/interfaces/IProject';
import sortProjects from '@/src/utils/sortProjects';

const generateLinks = {
  website: (props: {
    siteAddress: string;
    repo: string;
  }): Required<IProject['links']> => {
    const { siteAddress, repo } = props;

    return {
      primary: {
        content: 'Посетить сайт',
        href: siteAddress,
      },

      secondary: {
        content: 'Исход. код',
        href: repo,
      },
    };
  },

  sourceCodeOnly: ({
    repo: href,
  }: {
    repo: ComponentProps<typeof Link>['href'];
  }): IProject['links'] => {
    return {
      secondary: {
        content: 'Исход. код',
        href,
      },
    };
  },
};

const genericStack = {
  /** React Vite template */
  rvt: {
    madeOn: {
      react: true,
      vite: true,
      typescript: true,
      redux: true,
    },
  },

  /** Nest, Prisma */
  nepr: {
    backendStack: {
      nest: true,
      prisma: true,
    },
  },
} satisfies Record<string, Pick<IProject, 'madeOn' | 'backendStack'>>;

const projectData: IProject[] = sortProjects([
  {
    title: {
      ru: 'Вебсайт SmartAce',
      en: 'SmartAce website',
    },
    priority: 'high',
    description: [
      'Этот проект - это мой курсовой проект за 2023 год. Тема проекта - веб-приложение для компании, предоставляющей IT-услуги.',
      'На данный момент этот проект - мой самый сложный и технологичный. В нем я использовал все свои наработки в области React.',
    ],
    madeOn: {
      react: true,
      vite: true,
      typescript: true,
      redux: true,
    },
    backendStack: {
      nest: true,
      mssql: true,
    },
    links: {
      primary: {
        content: 'Посетить сайт',
        href: 'https://xeno-coursework-2023.netlify.app/',
      },

      secondary: {
        content: 'Исход. код',
        href: 'https://github.com/XenoPOMP/coursework-2023',
      },
    },
    image: {
      src: smartAcePreview,
      alt: 'Сайт SmartAce',
      orientation: 'square',
    },
  },

  {
    title: {
      ru: 'WebPegas 2.0',
    },
    priority: 'high',
    description: [
      'Данный проект - переосмысление моего предыдущего проекта. написанный на новом стеке.',
    ],
    madeOn: {
      next: true,
      react: true,
      typescript: true,
    },
    links: {
      primary: {
        content: 'Посетить сайт',
        href: 'https://web-pegas-2-0.vercel.app/',
      },

      secondary: {
        content: 'Исход. код',
        href: 'https://github.com/XenoPOMP/web-pegas-2.0',
      },
    },
    image: {
      src: wepPegasTwoPreview,
      alt: 'Сайт WebPegas 2.0',
      orientation: 'square',
    },
  },

  {
    title: {
      ru: 'advanced-types',
    },
    priority: 'medium',
    description: [
      'TypeScript библиотека, которая содержит в себе различные полезные типы. Эта библиотека наполнялась типами по мере создания мною проектов.',
    ],
    madeOn: {
      typescript: true,
    },
    links: {
      primary: {
        content: 'Документация',
        href: 'https://xenopomp.github.io/advanced-types/',
      },

      secondary: {
        content: 'Исход. код',
        href: 'https://github.com/XenoPOMP/advanced-types',
      },
    },
    image: {
      src: advancedTypesPreview,
      alt: 'Библиотека advanced-types',
      orientation: 'horizontal',
    },
  },

  {
    title: {
      ru: 'Расширение для браузера Image Grabber',
      en: 'Image Grabber - the Chrome extension',
    },
    description: [
      'Это расширение нужно для того, чтобы просматривать все картинки на сайте. Вы также можете посмотреть информацию об этих картинках, скопировать или скачать их.',
    ],
    madeOn: {
      react: true,
      vite: true,
      typescript: true,
      'chrome-api': true,
      redux: true,
    },
    links: {
      secondary: {
        content: 'Исход. код',
        href: 'https://github.com/XenoPOMP/image-grabber-extension',
      },
    },
    image: {
      src: imageGrabberExtensionPreview,
      alt: 'Расширение Image Grabber',
      orientation: 'vertical',
    },
  },

  {
    title: {
      ru: 'Расширение для браузера Oldubil Calculator',
      en: 'Oldubil Calculator - the Chrome extension',
    },
    description: [
      'Это расширение я разработал для того, чтобы считать, сколько мне нужно будет заплатить рублей, чтобы пополнить мою виртуальную карточку Oldubil. Также расширение может показывать, сколько стоит введенная сумма рублей в долларах, евро и тенге.',
    ],
    madeOn: {
      react: true,
      vite: true,
      typescript: true,
      'chrome-api': true,
      redux: true,
    },
    links: {
      secondary: {
        content: 'Исход. код',
        href: 'https://github.com/XenoPOMP/oldubil_calculator_extension',
      },
    },
    image: {
      src: oldubilExtPreview,
      alt: 'Расширение для браузера Oldubil Calculator',
      orientation: 'vertical',
    },
  },

  {
    title: {
      ru: 'Сайт Pizza Tower Platinum',
      en: 'Pizza Tower Platinum site',
    },
    priority: 'medium',
    description: [
      'Однажды я захотел пройти игру Pizza Tower на все достижения. Поэтому я создал сайт, на котором я бы мог отслеживать свой прогресс в прохождении игры на платину, а также посмотреть условия выполнения неполученных достижений.',
    ],
    madeOn: {
      react: true,
      vite: true,
      typescript: true,
      redux: true,
    },
    links: {
      primary: {
        content: 'Посетить сайт',
        href: 'https://pizza-tower-platinum.netlify.app/',
      },

      secondary: {
        content: 'Исход. код',
        href: 'https://github.com/XenoPOMP/pt-platinum',
      },
    },
    image: {
      src: ptPlatinumPreview,
      alt: 'Сайт Pizza Tower',
      orientation: 'square',
    },
  },

  {
    title: {
      ru: 'Лендинг для Cube Vista (Minecraft сервер)',
      en: 'Cube Vista landing (Minecraft server)',
    },
    priority: 'high',
    description: [
      'Cube Vista - сервер по Майнкрафту, который я планировал создать.',
      'На главной странице сайта имеется возможность посмотреть, онлайн ли сейчас сервер, или нет.',
    ],
    madeOn: {
      next: true,
      react: true,
      typescript: true,
    },
    links: {
      ...generateLinks.website({
        siteAddress: 'https://cube-vista-landing.vercel.app',
        repo: 'https://github.com/XenoPOMP/cube-vista-landing',
      }),
    },
    image: {
      src: cubeVistaPreview,
      alt: 'Лендинг для Cube Vista',
      orientation: 'square',
    },
  },

  {
    title: {
      ru: 'Лендинг для ShopGuide',
      en: 'ShopGuide landing',
    },
    priority: 'medium',
    description: [
      'Тестовое задание в компанию Перцы (Ярославль).',
      'Особенностью этого проекта является скорость его написания - всего 2 дня.',
    ],
    madeOn: {
      next: true,
      react: true,
      typescript: true,
    },
    links: {
      ...generateLinks.website({
        siteAddress: 'https://peppers-test-landing.vercel.app',
        repo: 'https://github.com/XenoPOMP/peppers-test-landing',
      }),
    },
    image: {
      src: shopGuidePreview,
      alt: 'Лендинг для ShopGuide',
      orientation: 'square',
    },
  },

  {
    title: {
      ru: 'Game Size Tracker',
    },
    priority: 'medium',
    description: [
      'Game Size Tracker - программа, которая позволяет вам отследить, сколько весят все установленные на вашем ПК игры.',
      'В этом приложении я впервые смог реализовать смену тем в десктопном приложении на React + Vite + Electron',
    ],
    madeOn: {
      react: true,
      vite: true,
      typescript: true,
      electron: true,
      redux: true,
    },
    links: {
      ...generateLinks.sourceCodeOnly({
        repo: 'https://github.com/XenoPOMP/game-size-tracker',
      }),
    },
    image: {
      src: gstPreview,
      alt: 'Game Size Tracker',
      orientation: 'horizontal',
    },
  },

  {
    title: {
      ru: 'YaSK website',
    },
    description: [
      'Этот проект я выполнял во время практики в 2022 году.',
      'В этом проекте я впервые начал использовать Framer Motion.',
    ],
    madeOn: {
      ...genericStack.rvt.madeOn,
      redux: false,
    },
    links: {
      ...generateLinks.website({
        siteAddress: 'https://ysk-college-work.netlify.app',
        repo: 'https://github.com/XenoPOMP/college-2022-practice-project/tree/master',
      }),
    },
    image: {
      src: yskPreview,
      alt: 'Сайт для компании ЯСК',
      orientation: 'square',
    },
  },
]);

export default projectData;
