/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBase: '#060610',
        bgOff: '#0c0c18',
        bgSurface: '#111120',
        bgSurface2: '#181828',
        brandRed: '#C8102E',
        brandRedLight: '#e8143a',
        textMain: '#eaeaf5',
        textDim: '#8888aa',
        textDimmer: '#50506a',
      },
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      transitionTimingFunction: {
        bounceCustom: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        easeCustom: 'cubic-bezier(0.23, 1, 0.32, 1)',
      }
    },
  },
  plugins: [],
}