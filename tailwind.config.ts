import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],

  darkMode: 'class',

  theme: {
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

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
