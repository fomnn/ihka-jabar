import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: '#ebf8ff',
          100: '#d1efff',
          200: '#aee4ff',
          300: '#76d6ff',
          400: '#35bdff',
          500: '#0797ff',
          600: '#0071ff',
          700: '#0058ff',
          800: '#0048d7',
          900: '#003f9f',
          950: '#062965',
        },
        darkCobalt: '#002358',
      },
    },
  },
}
