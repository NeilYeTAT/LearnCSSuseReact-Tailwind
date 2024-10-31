/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        YeDefault: "url('./src/assets/solid-circle-default.svg'), default",
        YePointer: "url('./src/assets/solid-circle-pointer.svg'), pointer",
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
