/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
      'bmin1024maxh800': {'raw': '(min-width: 1024px) and (max-height: 800px)'},
      },
      fontFamily: {
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        typedjsBlink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'cursor-blink': 'typedjsBlink 0.7s infinite'
      }
    },
  },
  plugins: [],
};
