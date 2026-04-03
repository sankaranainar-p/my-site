/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  '#f0f4f9',
          100: '#dce6f0',
          200: '#b9cde1',
          300: '#8aafc9',
          400: '#5a8db0',
          500: '#3a6e96',
          600: '#2d587c',
          700: '#254869',
          800: '#1e3a5f',
          900: '#152a45',
          950: '#0d1b2e',
        },
        gold: {
          400: '#d4a843',
          500: '#c49a35',
        },
      },
      boxShadow: {
        card: '0 1px 4px 0 rgba(0,0,0,0.08), 0 4px 16px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px 0 rgba(0,0,0,0.12), 0 8px 28px 0 rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
