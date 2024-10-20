/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'conic-gradient':
          'conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
