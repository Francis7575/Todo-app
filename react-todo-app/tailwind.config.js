/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#25273D',
        'light-medium-gray': '#9495A5',
        'dark-medium-gray': '#5B5E7E',
        'dark-blue-gray': '#494C6B',
        'light-blue-gray': '#C8CBE7',
        'light-grayish-blue': '#E3E4F',
        'dark-slate-blue': '#393A4B',
        'blue': '#3A7CFD',
        'blue-gray': '#494C6B',
        'lavender-gray': '#E3E4F1'
      },
      backgroundImage: {
        'light-mobile': 'url("/assets/bg-mobile-light.jpg")',
        'dark-mobile': 'url("/assets/bg-mobile-dark.jpg")',
        'light-desktop': 'url("/assets/bg-desktop-light.jpg")',
        'dark-desktop': 'url("/assets/bg-desktop-dark.jpg")',
      },
      boxShadow: {
        'light-card': '0px 35px 50px -15px rgba(194, 195, 214, 0.50)',
        'dark-card': '0px 35px 50px -15px rgba(0, 0, 0, 0.50)'
      }
    },
  },
  plugins: [],
}