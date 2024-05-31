/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        xs: '23.563rem',
        wide: '31.313rem',
        super: '50.063rem',
      },
      boxShadow: {
        lumina: '0px 0px 10px rgba(0, 0, 0, 0.1) ',
      },
    },
  },
  plugins: [],
};
