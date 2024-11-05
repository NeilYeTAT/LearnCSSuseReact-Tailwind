/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        YeDefault: "url('./src/assets/solid-circle-default.svg'), default",
        YePointer: "url('./src/assets/solid-circle-pointer.svg'), pointer",
      },
      backgroundImage: {
        'diagonal-stripes':
          'repeating-linear-gradient(45deg, black, black 11px, transparent 11px, transparent 20px)',
        'custom-radial-gradient': `radial-gradient(154.63px circle at var(--offset-x) var(--offset-y), #ffd6f1 0%, transparent 65%)`,
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
