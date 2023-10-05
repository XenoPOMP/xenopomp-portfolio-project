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
        href: '',
      },

      secondary: {
        content: 'Исход. код',
        href: '',
      },
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
        href: '',
      },

      secondary: {
        content: 'Исход. код',
        href: '',
      },
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
        href: '',
      },

      secondary: {
        content: 'Исход. код',
        href: '',
      },
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
        href: '',
      },
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
        href: '',
      },
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
        href: '',
      },

      secondary: {
        content: 'Исход. код',
        href: '',
      },
    },
  },
]);

export default projectData;
