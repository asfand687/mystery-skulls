/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '10%': { opacity: '0' },
          '20%': { opacity: '0' },
          '30%': { opacity: '0' },
          '40%': { opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fade: 'fade 4s ease-in-out',
      }
    }
  },
  plugins: [],
}
