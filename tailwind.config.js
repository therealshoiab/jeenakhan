/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        editorial: {
          950: '#08080a',
          900: '#111115',
          850: '#18181f',
          800: '#22222b',
          700: '#32323e',
          500: '#6f6f82',
          400: '#9b9ba8',
          300: '#cacacf',
          200: '#e5e5e8',
          100: '#f5f5f7',
          50: '#fafafc',
        },
        gold: {
          400: '#e0c068',
          500: '#d4af37',
          600: '#b89224',
        }
      },
      letterSpacing: {
        widest2: '0.25em',
        luxury: '0.35em',
      }
    },
  },
  plugins: [],
};
