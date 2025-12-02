/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0c1221',
        ink: '#0f1b2d',
        teal: {
          50: '#e7f9f6',
          100: '#c9f0ea',
          200: '#92dfd3',
          300: '#5acdbd',
          400: '#26bca8',
          500: '#0fa58e',
          600: '#0b8170',
          700: '#09675a',
          800: '#074c43',
          900: '#04332e',
        },
        sand: '#eef1f5',
        accent: '#ff9f43',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(10, 35, 66, 0.2)',
      },
    },
  },
  plugins: [],
}
