module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        orange: '#FF8A00',
        'orange-20': 'RGBA(255, 138, 0, 0.2)',
        gray: 'RGBA(208, 204, 199, 0.1)',
        red: '#FF3838',
        green: '#3FA72F',
        'green-10': 'RGBA(63, 198, 110, 0.1)',
        brown: '#311F09',
        'skin-40': 'RGBA(255, 244, 231, 0.4)'
      },
    },
  },
  plugins: [],
}