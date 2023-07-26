const { fontFamily } = require('tailwindcss/defaultTheme')
const themes = require('daisyui/src/theming/themes')

module.exports = {
  content: ['./src/**/*.{html,jsx,tsx,astro,vue,svelte}'],
  darkMode: ['class', '[data-theme="main"]'],
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
        main: {
          ...themes['[data-theme=dark]'],
          primary: '#10aebd',
          secondary: '#42DEE1',
          accent: '#6DECB9',
        },
      },
    ],
  },
}
