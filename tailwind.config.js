/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        type: {
          grass: '#5dbe62',
          poison: '#b563ce',
          fire: '#fc6c6d',
          bug: '#9dc130',
          dark: '#5f606d',
          normal: '#9a9da1',
          fighting: '#d94256',
          flying: '#9bb4e8',
          ground: '#d78555',
          rock: '#c3b162',
          water: '#60a5fa',
          steel: '#b8b8d0',
          ghost: '#7975d4',
          electric: '#edd53f',
          ice: '#98d8d8',
          dragon: '#0773c7',
          fairy: '#ef97e6',
          stellar: '',
          unknown: '',
          shadow: '',
          psychic: '#f85888',
        },
      },
    },
  },
  plugins: [],
}
