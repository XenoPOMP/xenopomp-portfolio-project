import advancedTypesPreview from '@/public/previews/advanced-types-preview.png';
import imageGrabberExtensionPreview from '@/public/previews/image-grabber-preview.png';
import oldubilExtPreview from '@/public/previews/oldubil-ext-preview.png';
import ptPlatinumPreview from '@/public/previews/pt-platinum-preview.png';
import smartAcePreview from '@/public/previews/smart-ace-preview.png';
import wepPegasTwoPreview from '@/public/previews/web-pegas-2.0-preview.png';
import { IProject } from '@/src/interfaces/IProject';
import sortProjects from '@/src/utils/sortProjects';

const projectData: IProject[] = sortProjects([
  {
    title: 'Вебсайт SmartAce',
    priority: 'high',
    description: [
      'Этот проект - это мой курсовой проект за 2023 год. Тема проекта - веб-приложение для компании, предоставляющей IT-услуги.',
      'На данный момент этот проект - мой самый сложный и технологичный. В нем я использовал все свои наработки в области React.',
    ],
    madeOn: {
      react: true,
      vite: true,
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
    title: 'WebPegas 2.0',
    priority: 'high',
    description: [
      'Данный проект - переосмысление моего предыдущего проекта. написанный на новом стеке.',
    ],
    madeOn: {
      next: true,
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
    title: 'advanced-types',
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
    title: 'Расширение для браузера Image Grabber',
    description: [
      'Это расширение нужно для того, чтобы просматривать все картинки на сайте. Вы также можете посмотреть информацию об этих картинках, скопировать или скачать их.',
    ],
    madeOn: {
      react: true,
      vite: true,
      'chrome-api': true,
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
    title: 'Расширение для браузера Oldubil Calculator',
    description: [
      'Это расширение я разработал для того, чтобы считать, сколько мне нужно будет заплатить рублей, чтобы пополнить мою виртуальную карточку Oldubil. Также расширение может показывать, сколько стоит введенная сумма рублей в долларах, евро и тенге.',
    ],
    madeOn: {
      react: true,
      vite: true,
      'chrome-api': true,
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
    title: 'Сайт Pizza Tower Platinum',
    priority: 'high',
    description: [
      'Однажды я захотел пройти игру Pizza Tower на все достижения. Поэтому я создал сайт, на котором я бы мог отслеживать свой прогресс в прохождении игры на платину, а также посмотреть условия выполнения неполученных достижений.',
    ],
    madeOn: {
      react: true,
      vite: true,
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
]);

export default projectData;
