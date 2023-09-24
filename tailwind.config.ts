import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

interface TextShadowTheme {
  matchUtilities: (utilities: Record<string, Function>, options: { values: any }) => void;
  theme: (path: string) => Function;
  value: (path: string) => any;
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        navbar: "url('../assets/navbar/letter.png')",
      },
      textShadow: {
        sm: '0 1px 1px var(--tw-shadow-color)',
        md: '0 2px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        down: '0 7px 8px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: TextShadowTheme) {
      matchUtilities(
        {
          'text-shadow': (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
export default config
