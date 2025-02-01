/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    'border-yellow-200',
    'border-green-200',
    'border-orange-200',
    'text-yellow-600',
    'text-green-600',
    'text-orange-600',
    'hover:bg-green-50',
    'hover:bg-purple-50',
    'hover:bg-orange-50',
    'hover:bg-red-50',
    'text-green-600',
    'text-purple-600',
    'text-orange-600',
    'text-red-600',
  ],
  plugins: [],
};