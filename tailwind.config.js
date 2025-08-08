/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9933', // Saffron Orange
        secondary: '#2ECC71', // Fresh Green
        background: '#FFFFFF',
        surface: '#f7fafc', // A slightly off-white for cards
        text: '#333333',
        'text-secondary': '#555555',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        'lg': '1rem', // 16px
        'md': '0.75rem', // 12px
        'sm': '0.5rem', // 8px,
        'full': '9999px',
      },
      boxShadow: {
        'subtle': '0 4px 15px rgba(0, 0, 0, 0.07)',
        'lifted': '0 10px 25px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
