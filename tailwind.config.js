/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        h1color: '#000',
        pcolor: '#000',
        bgcolor: '#fff',
        backGround: '#b3b3b384'
      },
      fontWeight: {
        h1Weight: 'bold'
      },
      fontSize: {
        h1Size: '2em'
      },
      backgroundImage: {
        Texture: "url('/public/WhatIs-texture.jpg')"
      }
    }
  },
  blocklist: ['hidden'],

  plugins: []
}
