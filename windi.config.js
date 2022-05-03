import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['./src/**/*.{html,svelte}'],
    exclude: ['node_modules', '.git', '.svelte-kit'],
  },
  darkMode: 'class',
  attributify: true,
  safelist: ['/data-theme$/'],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        main: {
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
})
