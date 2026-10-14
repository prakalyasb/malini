/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f4',
          100: '#f9e0e6',
          200: '#f0bccb',
          300: '#e08aa8',
          400: '#cc547f',
          500: '#a82d57',
          600: '#8e1f44',
          700: '#741637',
          800: '#5c1130',
          900: '#4a0e2a',
          950: '#2d0518',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf8f1',
          200: '#faf0e3',
          300: '#f5e6d3',
          400: '#ecd5b8',
          500: '#ddbe94',
        },
        brown: {
          400: '#a6795a',
          500: '#8b5e3c',
          600: '#6b4423',
          700: '#553520',
        },
      },
      fontFamily: {
        cursive: ['Great Vibes', 'cursive'],
        script: ['Dancing Script', 'cursive'],
        body: ['Lora', 'serif'],
        ui: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
