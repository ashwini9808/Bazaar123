/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lugrasimo': ['Lugrasimo', 'cursive'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100vh)' },
          '100%': { transform: 'translateX(0)' },
        },
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },

      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        marquee: 'marquee 10s linear infinite',
        zoomInOut: 'zoomInOut 4s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}
