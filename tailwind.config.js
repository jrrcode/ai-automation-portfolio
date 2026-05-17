/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        panel: '#0b1728',
        mist: '#a9b7ca',
        line: '#1d324d',
        accent: '#7dd3fc',
        mint: '#8ef6d2',
        coral: '#ffb4a2',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 70px rgba(125, 211, 252, 0.12)',
      },
    },
  },
  plugins: [],
};
