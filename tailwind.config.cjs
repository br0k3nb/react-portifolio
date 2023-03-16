/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {  
      'xxs': {'max': '639px', "min": "0px"},
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
        'custom-spin': 'spin 8s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite',
      },
    },
  },
  plugins: [],
}
