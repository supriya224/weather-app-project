/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#292B32',
        medium: 'gray',
        light: 'white',
      },
    },
  },
  plugins: [],
};
