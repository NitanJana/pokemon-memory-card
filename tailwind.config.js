/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      colors: {
        'gradient-pink': '#ec008ee1',
        'gradient-orange': '#fc6767e1',
        'pink-dark': '#ec008e7e',
      },
    },
  },
  plugins: [],
};
