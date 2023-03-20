const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-150': '150% 150%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-75': '75% 75%',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
      colors: {
        'nuetral-dark': '#1c3535',
        'nuetral-light': '#faf7ff',
        primary: '#402BCA',
        'primary-dark': '#2B1D87',
        card: '#EBE8FA',
      },
    },
  },
  plugins: [],
};
