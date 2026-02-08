/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#faf9f7',
        'bg-alt': '#f5f3f0',
        surface: '#ffffff',
        muted: '#6b7280',
        accent: '#7a9b76',
        'accent-light': '#9bb896',
        gold: '#c4a35a',
      },
      maxWidth: {
        container: '1100px',
      },
    },
  },
  plugins: [],
}
