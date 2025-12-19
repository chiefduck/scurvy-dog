/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          dark: '#121212',
        },
        accent: {
          teal: '#14b8a6',
          'teal-light': '#5eead4',
          'teal-dark': '#0f766e',
          'sea-green': '#2dd4bf',
        },
        secondary: {
          bone: '#f5f5dc',
          gold: '#d4af37',
          'gold-muted': '#b8944d',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3)',
        'glow-teal-lg': '0 0 40px rgba(20, 184, 166, 0.4)',
      },
    },
  },
  plugins: [],
};
