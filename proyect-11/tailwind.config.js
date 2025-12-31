/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: {
          500: 'hsl(25, 97%, 53%)',
        },
        Gray: {
          500: 'hsl(217, 12%, 63%)',
          900: 'hsl(213, 19%, 18%)',
          950: 'hsl(216, 12%, 8%)',
        },
        White: 'hsl(0, 100%, 100%)',
      },
    },
  },
  plugins: [],
};