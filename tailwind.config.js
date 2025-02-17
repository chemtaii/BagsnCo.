/** @type {import('tailwindcss').Config} */
export default {
    mode : 'jit',
    content: ["./index.html","./src/**/*.{html,js}"],
    theme: {
      extend: {
        display: ['group-hover'],
      },
    },
    plugins: [],
  };