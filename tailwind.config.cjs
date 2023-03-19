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
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 6s linear infinite',
        'custom-spin': 'spin 8s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite',
          bounce: 'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
      },
      keyframes: {
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0px)" }
        }
      },
    },
  },
  plugins: [ 
    require('tailwind-scrollbar'),
  ],
}
