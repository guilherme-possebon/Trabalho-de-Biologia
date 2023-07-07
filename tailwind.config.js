/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'
export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',

  // Or if using `src` directory:
  './src/**/*.{js,ts,jsx,tsx,mdx}'
]
export const theme = {
  extend: {
    colors: {
      h1color: '#000',
      pcolor: '#000',
      bgcolor: '#fff'
    },
    serif: ['Playfair Display', ...fontFamily.sans],
    sans: ['Poppins', ...fontFamily.sans]
  }
}
export const plugins = []
