/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#090d16',
          900: '#0f172a',
          850: '#1e293b',
          800: '#334155',
          700: '#475569',
        },
        saqr: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#172554',
        }
      },
      boxShadow: {
        'blue-glow': '0 0 25px -5px rgba(37, 99, 235, 0.3)',
        'blue-glow-lg': '0 0 40px -10px rgba(59, 130, 246, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
