/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          'primary': '#047dfc',
          'secondary': '#047dfc',
          'accent': '#facc15',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
