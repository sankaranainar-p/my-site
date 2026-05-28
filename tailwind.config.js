/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        brand: {
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        surface: {
          950: '#0F1117',
          900: '#13161F',
          800: '#1A1D27',
          700: '#242736',
          600: '#2D3348',
          500: '#3C4159',
        },
        content: {
          primary:   '#F0F2F5',
          secondary: '#8892A4',
          tertiary:  '#5C6478',
        },
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
        gold: { 400: '#d4a843', 500: '#c49a35' },
      },
      boxShadow: {
        'glow-brand':    '0 0 30px rgba(37,99,235,0.35)',
        'glow-brand-lg': '0 0 50px rgba(37,99,235,0.5)',
        card:      '0 1px 4px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
