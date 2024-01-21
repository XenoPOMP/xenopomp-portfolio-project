import { Config } from 'tailwindcss';
import tailwindThemer from 'tailwindcss-themer';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    tailwindThemer({
      defaultTheme: {
        extend: {
          colors: {
            highlight: '#2678C2',
            'highlight-font': '#FFFFFF',
            primary: '#FFFFFF',
            'nav-highlight': '#22C55E',
            'social-media-bg': '#E1E1E1',
            'social-media-icon': '#5E5E5E',
            'social-media-icon-inactive': '#7B7979',
            'font-primary': '#000000',
            'font-secondary': '#757575',
            'font-third-rate': '#585555',
            'project-preview-primary': '#724AE4',
            'btn-primary': '#000000',
            'btn-secondary': '#FFFFFF',
            'footer-primary': '#000000',
            'footer-secondary': '#FFFFFF',
            'tooltip-bg': '#000000',
            'tooltip-font': '#FFFFFF',
            'og-tag-next-primary': '#000000',
            'og-tag-next-secondary': '#FFFFFF',
          },
        },
      },
      themes: [
        {
          name: 'dark-theme',
          extend: {
            colors: {
              highlight: '#22C55E',
              'highlight-font': '#000000',
              primary: '#0F0E0E',
              'nav-highlight': '#2678C2',
              'social-media-bg': '#252424',
              'social-media-icon': '#9A9A9A',
              'social-media-icon-inactive': '#575252',
              'font-primary': '#FFFFFF',
              'font-secondary': '#B9B5B5',
              'font-third-rate': '#89C4C8',
              'project-preview-primary': '#432237',
              'btn-primary': '#FFFFFF',
              'btn-secondary': '#000000',
              'footer-primary': '#000000',
              'footer-secondary': '#FFFFFF',
              'tooltip-bg': '#FFFFFF',
              'tooltip-font': '#000000',
              'og-tag-next-primary': '#000000',
              'og-tag-next-secondary': '#FFFFFF',
            },
          },
        },
      ],
    }),
  ],
};

export default config;
