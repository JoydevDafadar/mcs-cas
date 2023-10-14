/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky:{
          400 : '#0076CE',
        },
        background: {
          400: '#fbfafc'
        },
        gray:{
          400: '#f4f5f5',
        }

      }
    },
  },
  plugins: [],
}

