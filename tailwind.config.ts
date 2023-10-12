import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'desktop': '1440px',
      }
    },
    colors: {
      'primary': {
        '50': '#fffeea',
        '100': '#fffdc5',
        '200': '#fffa87',
        '300': '#fff148',
        '400': '#ffe31e',
        '500': '#f5bf03',
        '600': '#df9800',
        '700': '#b96d04',
        '800': '#96540a',
        '900': '#7b450c',
        '950': '#472301',
    },
        transparent: 'transparent',
        current: 'currentColor',
        black: {
          900: '#050506',
          800: '#0B0C0E',
          700: '#121317',
          600: "#3E4C59",
          500: "#52606D",
          400: "#616E7C",
          300: "#7B8794",
          200: "#9AA5B1",
          100: "#CBD2D9",
        },
        blue: colors.blue,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        red: colors.red,
        green: colors.green,
        pink: colors.pink,
        teal: colors.teal,
        lime: colors.lime,
    }
  },
  plugins: [],
}
export default config

