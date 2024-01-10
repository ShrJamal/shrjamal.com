const { fontFamily } = require('tailwindcss/defaultTheme')
const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,jsx,ts,tsx,astro,vue,svelte,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      screens: {
        '2xs': '375px',
        xs: '475px',
        sm: '640px',
        mb: '520px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [require('daisyui'), addDynamicIconSelectors()],
  daisyui: {
    logs: false,
    themes: [
      {
        main: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#10aebd',
          secondary: '#42DEE1',
          accent: '#6DECB9',
          'base-content': '#ffffff',
        },
      },
    ],
  },
}
