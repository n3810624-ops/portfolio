/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a1a', // Navy blue/black base
        surface: 'rgba(255, 255, 255, 0.05)',
        primary: '#3b82f6', // blue
        secondary: '#8b5cf6', // purple
        accent: '#06b6d4', // cyan
        accent2: '#ec4899', // pink
        gold: '#fbbf24', // gold
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        'float-slow': "float 8s ease-in-out infinite",
        'float-fast': "float 4s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      },
    },
  },
  plugins: [],
}
