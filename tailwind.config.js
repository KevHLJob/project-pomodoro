/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      borderWidth:{
        1:'1px',
        6:'6px'
      },
      colors:{
        'primary': '#DF1901',
        'secondary':'#619277',
        'background':'#1E1D1E'
      }
    },
  },
  plugins: [],
}

