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
          'primary': '#047dfc',
          'secondary': '#044c8d',
          'accent': '#74b6e8',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
