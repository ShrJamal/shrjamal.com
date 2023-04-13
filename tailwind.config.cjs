const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,jsx,ts,tsx,astro,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#047dfc',
          secondary: '#047dfc',
          accent: '#facc15',
        },
      },
    ],
  },
}
