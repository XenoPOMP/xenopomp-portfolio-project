/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        highlight: '#2678C2',
        'nav-highlight': 'rgb(34 197 94)',
        'social-media-bg': '#E1E1E1',
        'social-media-icon': '#5E5E5E',
        'social-media-icon-inactive': '#7B7A7A',
        'font-primary': '#000000',
        'font-secondary': '#767575',
        'font-third-rate': '#585555',
        'project-preview-primary': '#724AE4',
        'btn-primary': '#000000',
        'btn-secondary': '#FFFFFF',
        'footer-primary': '#000000',
        'footer-secondary': '#FFFFFF',
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
