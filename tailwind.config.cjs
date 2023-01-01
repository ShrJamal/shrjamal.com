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
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
