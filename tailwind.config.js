/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {    
    extend: {
      spacing : {
      '13' : '3.25rem',
      },
      fontFamily: {
        inter : ['Inter'],
      },
      colors: {
        core: '#3498db',
        alizrin: '#e74c3c',
        midnight : '#2c3e50',
      }
    },
  },
  plugins: [],
}
