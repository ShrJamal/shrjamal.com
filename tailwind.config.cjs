/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          'primary': '#37d3b6',
          'secondary': '#dd9e77',
          'accent': '#036975',
          'neutral': '#1C151E',
          'base-100': '#2B2947',
          'info': '#61B7DB',
          'success': '#2FE48D',
          'warning': '#AF610E',
          'error': '#F0608C',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
